import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import './DriftWall.css';

export interface DriftWallItem {
  image: string;
  title?: string;
  href?: string;
}

const DEFAULT_ITEMS: DriftWallItem[] = [
  { image: '/images/impactecho-app.png', title: 'ImpactEcho — Cause Network' },
  { image: '/images/soundwave-ui.jpg', title: 'SoundWave — Music Streaming' },
  { image: '/images/agrosmart-ui.jpg', title: 'AgroSmart 2.0 — IoT Telemetry' },
  { image: '/images/drivelanka-ui.jpg', title: 'DriveLanka — Smart Fleet' },
  { image: '/images/portfolio-ui.jpg', title: 'Next.js 15 & React 19 Architecture' },
  { image: '/images/mockup-laptop.jpg', title: 'Elysia — Digital Architecture' },
  { image: '/images/mockup-phone.jpg', title: 'ImpactEcho — Mobile Experience' },
  { image: '/images/mockup-mobile.jpg', title: 'Studio Interactive — UI/UX' },
  { image: '/images/impactecho-preview.png', title: 'ImpactEcho — Stories & Reels' },
  { image: '/images/pos-system-ui.jpg', title: 'Smart POS & Retail Analytics Engine' }
];

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const columnFactor = (index: number, variance: number) => {
  const pseudo = ((index * 0.6180339887 + 0.35) % 1) * 2 - 1;
  return 1 + variance * pseudo;
};

export interface DriftWallProps {
  items?: DriftWallItem[];
  columns?: number;
  tileWidth?: number;
  tileHeight?: number;
  gap?: number;
  radius?: number;
  tilt?: number;
  turn?: number;
  roll?: number;
  perspective?: number;
  depth?: number;
  speed?: number;
  direction?: 'up' | 'down';
  variance?: number;
  parallax?: number;
  pauseOnHover?: boolean;
  lift?: number;
  fade?: number;
  dim?: number;
  grayscale?: boolean;
  overlayColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const DriftWall: React.FC<DriftWallProps> = ({
  items = DEFAULT_ITEMS,
  columns = 6,
  tileWidth = 200,
  tileHeight = 132,
  gap = 18,
  radius = 14,
  tilt = 16,
  turn = -14,
  roll = 0,
  perspective = 1200,
  depth = 120,
  speed = 42,
  direction = 'up',
  variance = 0.45,
  parallax = 0.6,
  pauseOnHover = false,
  lift = 28,
  fade = 0.6,
  dim = 0.55,
  grayscale = false,
  overlayColor = '#060010',
  className = '',
  style
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const planeRef = useRef<HTMLDivElement | null>(null);
  const trackRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);

  const offsetsRef = useRef<number[]>([]);
  const velocitiesRef = useRef<number[]>([]);
  const activeTileElRef = useRef<HTMLElement | null>(null);
  const activeColElRef = useRef<HTMLElement | null>(null);
  const hoveredColRef = useRef(-1);
  const hoveredTileIdRef = useRef<string | null>(null);
  const releaseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wallHoveredRef = useRef(false);
  const pointerRef = useRef({ x: 0, y: 0 });
  const pointerDampedRef = useRef({ x: 0, y: 0 });
  const lastTsRef = useRef<number | null>(null);

  const [containerHeight, setContainerHeight] = useState(600);
  const [containerWidth, setContainerWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1440
  );
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(prefersReducedMotion());
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const isMobile = containerWidth < 768;
  const effectiveTileWidth = isMobile ? Math.min(tileWidth, 160) : tileWidth;
  const effectiveTileHeight = isMobile ? Math.min(tileHeight, 105) : tileHeight;
  const effectiveGap = isMobile ? Math.min(gap, 12) : gap;

  // Compute effective columns dynamically so that the 3D plane fully covers full screen width with bleed
  const effectiveColumns = useMemo(() => {
    const colUnit = effectiveTileWidth + effectiveGap;
    const needed = Math.ceil(((containerWidth || 1440) * 1.35) / colUnit);
    return Math.max(isMobile ? 4 : (columns ?? 6), needed);
  }, [containerWidth, effectiveTileWidth, effectiveGap, columns, isMobile]);

  const columnItems = useMemo(() => {
    if (!items.length) return [];
    const L = items.length;
    // Stride offset ensures adjacent columns never start or align with the same project
    const stride = L > 3 ? (L % 3 === 0 ? 5 : 3) : 1;

    return Array.from({ length: effectiveColumns }, (_, c) => {
      // Each column receives all distinct items, staggered by (c * stride)
      const offset = (c * stride) % L;
      const colList: DriftWallItem[] = [];
      for (let i = 0; i < L; i++) {
        colList.push(items[(offset + i) % L]);
      }
      return colList;
    });
  }, [items, effectiveColumns]);

  const columnMeta = useMemo(() => {
    const unit = effectiveTileHeight + effectiveGap;
    return columnItems.map(col => {
      const copyHeight = Math.max(unit, col.length * unit);
      const copies = Math.max(2, Math.ceil((containerHeight * 1.6) / copyHeight) + 1);
      return { copyHeight, copies };
    });
  }, [columnItems, effectiveTileHeight, effectiveGap, containerHeight]);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      setContainerHeight(entry.contentRect.height || 600);
      setContainerWidth(entry.contentRect.width || (typeof window !== 'undefined' ? window.innerWidth : 1440));
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const baseVelocities = useMemo(() => {
    const dirSign = direction === 'up' ? 1 : -1;
    return columnItems.map((_, c) => {
      const altSign = c % 2 === 0 ? 1 : -1;
      return speed * columnFactor(c, variance) * dirSign * altSign;
    });
  }, [columnItems, speed, direction, variance]);

  useEffect(() => {
    offsetsRef.current = columnMeta.map((meta, c) => meta.copyHeight * ((c * 0.37) % 1));
    velocitiesRef.current = columnItems.map(() => 0);
  }, [columnMeta, columnItems]);

  const applyPlaneTransform = useCallback(
    (px: number, py: number) => {
      const plane = planeRef.current;
      if (!plane) return;
      plane.style.transform =
        `translate(-50%, -50%) scale(1.22) ` +
        `rotateX(${tilt + py}deg) rotateY(${turn + px}deg) rotateZ(${roll}deg) ` +
        `translateZ(${-depth}px)`;
    },
    [tilt, turn, roll, depth]
  );

  useEffect(() => {
    let isVisible = true;

    const animate = (ts: number) => {
      if (!isVisible) {
        rafRef.current = null;
        return;
      }

      if (lastTsRef.current === null) lastTsRef.current = ts;
      const dt = Math.min(0.05, Math.max(0, ts - lastTsRef.current) / 1000);
      lastTsRef.current = ts;

      const maxTilt = parallax * 8;
      const isAnyColHovered = hoveredColRef.current !== -1;
      // When a tile is hovered, lock plane tilt to prevent camera sway shifting tiles under cursor
      const targetX = isAnyColHovered ? pointerDampedRef.current.x : pointerRef.current.x * maxTilt;
      const targetY = isAnyColHovered ? pointerDampedRef.current.y : -pointerRef.current.y * maxTilt;
      const damp = 1 - Math.exp(-dt / (isAnyColHovered ? 0.35 : 0.12));
      pointerDampedRef.current.x += (targetX - pointerDampedRef.current.x) * damp;
      pointerDampedRef.current.y += (targetY - pointerDampedRef.current.y) * damp;
      applyPlaneTransform(pointerDampedRef.current.x, pointerDampedRef.current.y);

      if (!reduced) {
        const isWallPaused = pauseOnHover && wallHoveredRef.current;
        for (let c = 0; c < trackRefs.current.length; c++) {
          const meta = columnMeta[c];
          if (!meta) continue;

          // Freeze only the column currently hovered by the user (or entire wall if pauseOnHover=true)
          const isThisColHovered = hoveredColRef.current === c;
          const shouldStop = isWallPaused || isThisColHovered;

          if (shouldStop) {
            velocitiesRef.current[c] = 0;
          } else {
            const target = baseVelocities[c];
            // Smooth exponential ease back to normal drift velocity
            const ease = 1 - Math.exp(-dt / 0.32);
            velocitiesRef.current[c] += (target - velocitiesRef.current[c]) * ease;
            let next = (offsetsRef.current[c] ?? 0) + velocitiesRef.current[c] * dt;
            next = ((next % meta.copyHeight) + meta.copyHeight) % meta.copyHeight;
            offsetsRef.current[c] = next;

            const el = trackRefs.current[c];
            if (el) el.style.transform = `translate3d(0, ${-next}px, 0)`;
          }
        }
      } else {
        for (let c = 0; c < trackRefs.current.length; c++) {
          const el = trackRefs.current[c];
          const meta = columnMeta[c];
          if (el && meta) el.style.transform = `translate3d(0, ${-(offsetsRef.current[c] ?? 0)}px, 0)`;
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = isVisible;
        isVisible = entry.isIntersecting;
        if (isVisible && !wasVisible) {
          lastTsRef.current = null;
          if (!rafRef.current) {
            rafRef.current = requestAnimationFrame(animate);
          }
        }
      },
      { rootMargin: '150px 0px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTsRef.current = null;
      if (releaseTimerRef.current) {
        clearTimeout(releaseTimerRef.current);
        releaseTimerRef.current = null;
      }
      if (activeTileElRef.current) {
        activeTileElRef.current.classList.remove('is-hovered');
        activeTileElRef.current = null;
      }
      if (activeColElRef.current) {
        activeColElRef.current.style.zIndex = '';
        activeColElRef.current = null;
      }
    };
  }, [baseVelocities, columnMeta, pauseOnHover, parallax, reduced, applyPlaneTransform]);

  const activateTile = useCallback(
    (e: React.PointerEvent<HTMLElement> | React.FocusEvent<HTMLElement>, id: string, colIndex: number) => {
      if (releaseTimerRef.current) {
        clearTimeout(releaseTimerRef.current);
        releaseTimerRef.current = null;
      }

      const currentTileEl = e.currentTarget;

      if (activeTileElRef.current && activeTileElRef.current !== currentTileEl) {
        activeTileElRef.current.classList.remove('is-hovered');
      }

      if (activeColElRef.current && hoveredColRef.current !== colIndex) {
        activeColElRef.current.style.zIndex = '';
      }

      activeTileElRef.current = currentTileEl;
      currentTileEl.classList.add('is-hovered');

      const colEl = currentTileEl.closest('.drift-wall__col') as HTMLElement | null;
      if (colEl) {
        activeColElRef.current = colEl;
        colEl.style.zIndex = '10';
      }

      hoveredColRef.current = colIndex;
      hoveredTileIdRef.current = id;

      // Snap velocity to 0 immediately so tile never moves from under cursor
      if (velocitiesRef.current[colIndex] !== undefined) {
        velocitiesRef.current[colIndex] = 0;
      }
    },
    []
  );

  const releaseTile = useCallback((id: string) => {
    if (hoveredTileIdRef.current === id) {
      if (releaseTimerRef.current) {
        clearTimeout(releaseTimerRef.current);
      }
      // 60ms hysteresis window prevents jitter when moving across adjacent tiles in same column
      releaseTimerRef.current = setTimeout(() => {
        if (hoveredTileIdRef.current === id) {
          if (activeTileElRef.current) {
            activeTileElRef.current.classList.remove('is-hovered');
            activeTileElRef.current = null;
          }
          if (activeColElRef.current) {
            activeColElRef.current.style.zIndex = '';
            activeColElRef.current = null;
          }
          hoveredColRef.current = -1;
          hoveredTileIdRef.current = null;
        }
        releaseTimerRef.current = null;
      }, 60);
    }
  }, []);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      if (parallax > 0 && !reduced) {
        pointerRef.current = {
          x: (e.clientX - rect.left) / rect.width - 0.5,
          y: (e.clientY - rect.top) / rect.height - 0.5
        };
      }
    },
    [parallax, reduced]
  );

  const handlePointerLeaveWall = useCallback(() => {
    if (releaseTimerRef.current) {
      clearTimeout(releaseTimerRef.current);
      releaseTimerRef.current = null;
    }
    if (activeTileElRef.current) {
      activeTileElRef.current.classList.remove('is-hovered');
      activeTileElRef.current = null;
    }
    if (activeColElRef.current) {
      activeColElRef.current.style.zIndex = '';
      activeColElRef.current = null;
    }
    wallHoveredRef.current = false;
    hoveredColRef.current = -1;
    hoveredTileIdRef.current = null;
    pointerRef.current = { x: 0, y: 0 };
  }, []);

  const cssVars = useMemo(
    () => ({
      '--dw-tile-w': `${effectiveTileWidth}px`,
      '--dw-tile-h': `${effectiveTileHeight}px`,
      '--dw-gap': `${effectiveGap}px`,
      '--dw-radius': `${isMobile ? Math.min(radius, 12) : radius}px`,
      '--dw-perspective': `${isMobile ? Math.min(perspective, 900) : perspective}px`,
      '--dw-lift': `${lift}px`,
      '--dw-dim': dim,
      '--dw-gray': grayscale ? 1 : 0,
      '--dw-overlay': overlayColor,
      '--dw-edge': `${Math.max(0, (1 - fade) * 100)}%`,
      ...style
    } as React.CSSProperties),
    [effectiveTileWidth, effectiveTileHeight, effectiveGap, isMobile, radius, perspective, lift, dim, grayscale, overlayColor, fade, style]
  );

  const renderTile = (item: DriftWallItem, id: string, colIndex: number) => {
    const inner = (
      <span className="drift-wall__inner">
        <img src={item.image} alt={item.title ?? ''} loading="lazy" decoding="async" draggable={false} />
        <span className="drift-wall__overlay" aria-hidden="true" />
        {item.title && (
          <span className="drift-wall__title" aria-hidden="true">
            <span className="drift-wall__badge">
              <span className="drift-wall__dot" />
              <span>Project</span>
            </span>
            <span className="drift-wall__title-text">{item.title}</span>
          </span>
        )}
      </span>
    );
    const commonProps = {
      className: 'drift-wall__tile',
      'data-tile-id': id,
      'data-col': colIndex,
      'aria-label': item.title ?? 'Project tile',
      onPointerEnter: (e: React.PointerEvent<HTMLElement>) => activateTile(e, id, colIndex),
      onPointerLeave: () => releaseTile(id),
      onFocus: (e: React.FocusEvent<HTMLElement>) => activateTile(e, id, colIndex),
      onBlur: () => releaseTile(id)
    };
    if (item.href) {
      return (
        <a key={id} href={item.href} {...commonProps}>
          {inner}
        </a>
      );
    }
    return (
      <div key={id} tabIndex={0} role="button" {...commonProps}>
        {inner}
      </div>
    );
  };

  const rootClass = ['drift-wall', reduced ? 'drift-wall--reduced' : '', className].filter(Boolean).join(' ');

  return (
    <div
      ref={containerRef}
      className={rootClass}
      style={cssVars}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => {
        wallHoveredRef.current = true;
      }}
      onPointerLeave={handlePointerLeaveWall}
      role="group"
      aria-label="Drifting wall of tiles"
    >
      <div ref={planeRef} className="drift-wall__plane">
        {columnItems.map((col, c) => {
          const meta = columnMeta[c];
          const copies = Array.from({ length: meta.copies });
          return (
            <div className="drift-wall__col" key={`col-${c}`}>
              <div className="drift-wall__track" ref={el => (trackRefs.current[c] = el)}>
                {copies.map((_, copyIndex) =>
                  col.map((item, itemIndex) => renderTile(item, `${c}-${copyIndex}-${itemIndex}`, c))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DriftWall;
