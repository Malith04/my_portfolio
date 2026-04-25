import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

const SEO = ({ 
  title = "Malith Rajamanthri - Software Engineer & Full-Stack Developer",
  description = "Passionate Software Engineer specializing in React, TypeScript, and modern web technologies. Building innovative solutions with clean, scalable code.",
  keywords = "Malith Rajamanthri, Software Engineer, Full-Stack Developer, React Developer, TypeScript, JavaScript, Web Development, Sri Lanka, NIBM, Portfolio",
  image = "/images/og-image.jpg",
  url = "https://malithrajamanthri.dev",
  type = "website"
}: SEOProps) => {

  useEffect(() => {
    // Update document title
    document.title = title

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name'
      let element = document.querySelector(`meta[${attribute}="${name}"]`)
      
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      
      element.setAttribute('content', content)
    }

    // Basic meta tags
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)
    updateMetaTag('author', 'Malith Rajamanthri')
    updateMetaTag('robots', 'index, follow')
    updateMetaTag('language', 'en')
    updateMetaTag('revisit-after', '7 days')

    // Open Graph meta tags
    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:image', image, true)
    updateMetaTag('og:url', url, true)
    updateMetaTag('og:type', type, true)
    updateMetaTag('og:site_name', 'Malith Rajamanthri Portfolio', true)
    updateMetaTag('og:locale', 'en_US', true)

    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', title)
    updateMetaTag('twitter:description', description)
    updateMetaTag('twitter:image', image)
    updateMetaTag('twitter:creator', '@malith_raja')

    // Additional SEO meta tags
    updateMetaTag('theme-color', '#4DD0E1')
    updateMetaTag('msapplication-TileColor', '#4DD0E1')
    updateMetaTag('apple-mobile-web-app-capable', 'yes')
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent')

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', url)

    // Alternate language links - removed since we only support English now

    // JSON-LD structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Malith Rajamanthri",
      "jobTitle": "Software Engineer",
      "description": description,
      "url": url,
      "image": image,
      "sameAs": [
        "https://www.linkedin.com/in/hashintha-malith-794823361/",
        "https://github.com/malith",
        "https://www.instagram.com/malith_raja/",
        "https://www.facebook.com/malith.rajamanthri"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kandy",
        "addressCountry": "LK"
      },
      "email": "malithrajamanthri@gmail.com",
      "telephone": "+94767421844",
      "knowsAbout": [
        "React",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Python",
        "Web Development",
        "Software Engineering"
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "NIBM"
      },
      "nationality": "Sri Lankan"
    }

    // Remove existing JSON-LD
    const existingScript = document.querySelector('script[type="application/ld+json"]')
    if (existingScript) {
      existingScript.remove()
    }

    // Add new JSON-LD
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script)

  }, [title, description, keywords, image, url, type])

  return null
}

export default SEO