import { useEffect, useState } from 'react'
import './App.css'

/** Hero slider content */
const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85',
    title: 'Business your satisfaction',
    text: 'Smart ideas, careful strategy and a team that moves your business forward.',
  },
  {
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1800&q=85',
    title: 'Build your success',
    text: 'Practical digital solutions for ambitious teams and growing companies.',
  },
]

/** Services grid content */
const services = [
  { icon: '◫', title: 'Promotion agency', text: 'Creative campaigns that make your brand impossible to ignore.' },
  { icon: '⚒', title: 'Constructions building', text: 'Reliable planning and strong foundations for every next step.' },
  { icon: '✦', title: 'Education online', text: 'Clear digital experiences that help people learn and grow.' },
  { icon: '↟', title: 'Fashion design', text: 'Distinctive ideas shaped into a visual identity people remember.' },
]

/** Offers section content */
const offers = {
  image: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1000&q=85',
  eyebrow: 'Elaborated code and creative design',
  title: 'What we offers',
  lead: 'Duis sed odio sit amet nibh vulputate cursus a sit amet mauris ipsum veli. Nam nec tellus a odio tincidunt auctor.',
  items: [
    { icon: '◒', title: 'Clean modern code', text: 'Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et.' },
    { icon: '♞', title: 'Design to brag about', text: 'Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et.' },
  ],
  cta: 'View all offers »',
}

/** Navigation links */
const navLinks = [
  { href: '#top', label: 'Home', active: true },
  { href: '#about', label: 'About us' },
  { href: '#services', label: 'Services' },
  { href: '#pages', label: 'Pages' },
  { href: '#shop', label: 'Shop' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact us' },
]

/** Utility bar content */
const utility = {
  email: 'infoursite@mail.com',
  phone: '+77 000 453',
  socials: ['f', 'G', 'in'],
  cta: 'Get a quote »',
}

/** Brand identity */
const brand = {
  mark: '✹',
  name: 'ALTECO',
  tagline: 'Business Template',
}

/** Section heading reused in Offers & Services */
const sectionHeading = {
  eyebrow: 'Elaborated code and creative design',
  title: 'Our services',
  dots: '•••',
  text: 'Non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
}

/** Go to slide helper */
function getNextSlide(current, delta, total) {
  return (current + delta + total) % total
}

function App() {
  const [slide, setSlide] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobilePinned, setIsMobilePinned] = useState(false)
  const [headerProgress, setHeaderProgress] = useState(0)
  const [headerTop, setHeaderTop] = useState(68)
  const currentSlide = heroSlides[slide]

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 600) {
        setIsScrolled(false)
        setHeaderProgress(0)
        setHeaderTop(0)
        setIsMobilePinned((wasPinned) => (
          wasPinned ? window.scrollY > 0 : window.scrollY >= 48
        ))
        return
      }

      setIsMobilePinned(false)
      const headerHeight = window.innerWidth <= 900 ? 90 : 120
      const utilityHeight = 68
      const progress = Math.min(
        Math.max((window.scrollY - utilityHeight) / headerHeight, 0),
        1,
      )

      setHeaderTop(Math.max(utilityHeight - window.scrollY, 0))
      setHeaderProgress(progress)
      setIsScrolled(progress === 1)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const fullHeaderHeight = window.innerWidth <= 900 ? 90 : 120
  const compactHeaderHeight = window.innerWidth <= 900 ? 64 : 72
  const compactHeaderWidth = Math.min(1125, window.innerWidth - 48)
  const headerWidth = window.innerWidth + (compactHeaderWidth - window.innerWidth) * headerProgress
  const headerHeight = fullHeaderHeight + (compactHeaderHeight - fullHeaderHeight) * headerProgress

  return (
    <main>
      {/* Utility bar */}
      <div className="utility-bar">
        <div className="container utility-content">
          <span>✉ {utility.email}</span>
          <span>│</span>
          <span>☎ {utility.phone}</span>
          <div className="socials">
            {utility.socials.map((s, i) => (
              <span key={i}>{s}</span>
            ))}
            <a href="#contact">{utility.cta}</a>
          </div>
        </div>
      </div>

      {/* Site header */}
      <div className={`site-header-shell${isScrolled ? ' is-scrolled' : ''}${isMobilePinned ? ' is-mobile-pinned' : ''}`}>
        <header
          className={`site-header${isScrolled ? ' is-scrolled' : ''}${isMobilePinned ? ' is-mobile-pinned' : ''}`}
          style={{
            '--header-top': `${headerTop}px`,
            '--header-progress': headerProgress,
            width: `${headerWidth}px`,
            minHeight: `${headerHeight}px`,
          }}
        >
          <div className="site-header-inner container">
            <a className="brand" href="#top" aria-label={`${brand.name} home`}>
              <span className="brand-mark">{brand.mark}</span>
              <span>
                <strong>{brand.name}</strong>
                <small>{brand.tagline}</small>
              </span>
            </a>

            <nav aria-label="Main navigation">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className={link.active ? 'active' : ''}>
                  {link.label}
                </a>
              ))}
            </nav>

            <button className="search-button" type="button" aria-label="Search">⌕</button>
            <button className="menu-button" type="button" aria-label="Open menu">☰</button>
          </div>
        </header>
      </div>

      {/* Hero slider */}
      <section
        className="hero"
        id="top"
        style={{
          backgroundImage: `url(${currentSlide.image})`,
        }}
      >
        <div className="hero-shade" />
        <div className="container hero-content">
          <div className="hero-copy">
            <h1>{currentSlide.title}</h1>
            <p>{currentSlide.text}</p>
            <div className="hero-actions">
              <a className="outline-button" href="#about">Login</a>
              <a className="outline-button" href="#contact">Register</a>
            </div>
          </div>
        </div>
        <button className="slider-arrow previous" onClick={() => setSlide(getNextSlide(slide, -1, heroSlides.length))} aria-label="Previous slide">‹</button>
        <button className="slider-arrow next" onClick={() => setSlide(getNextSlide(slide, 1, heroSlides.length))} aria-label="Next slide">›</button>
      </section>

      {/* Offers section */}
      <section className="offers container" id="about">
        <div className="offers-image">
          <img src={offers.image} alt="Colleagues working together" />
        </div>
        <div className="offers-copy">
          <p className="eyebrow">{offers.eyebrow}</p>
          <h2>{offers.title}</h2>
          <p className="lead">{offers.lead}</p>
          <div className="offer-items">
            {offers.items.map((item) => (
              <article key={item.title}>
                <span className="pale-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href="#services">Read more »</a>
              </article>
            ))}
          </div>
          <a className="dark-button" href="#services">{offers.cta}</a>
        </div>
      </section>

      {/* Services section */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">{sectionHeading.eyebrow}</p>
            <h2>{sectionHeading.title}</h2>
            <span className="dots">{sectionHeading.dots}</span>
            <p>{sectionHeading.text}</p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <span className="service-icon">{service.icon}</span>
                <p className="eyebrow">Tutorials to help</p>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Back to top */}
      <a className="back-to-top" href="#top" aria-label="Back to top">↑</a>
    </main>
  )
}

export default App
