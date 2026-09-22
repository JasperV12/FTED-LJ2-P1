import logo from './assets/itagency-logo.svg'
import playIcon from './assets/play-icon.svg'
import './App.css'

const heroImg = 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&h=850&q=85'

function App() {
  return (
    <main className="site-shell">
      <nav className="navigation" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="ITAgency home">
          <img src={logo} alt="ITAgency" />
        </a>
        <div className="nav-links">
          <a className="active" href="#top">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services <span className="chevron">v</span></a>
          <a href="#work">Portfolio <span className="chevron">v</span></a>
          <a href="#team">Team</a>
          <a href="#blog">Blog</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="get-started" href="#contact">Get Started <span aria-hidden="true">-&gt;</span></a>
      </nav>
      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span></span> Welcome to ITAgency</p>
          <h1>Innovative <em>IT</em><br /><strong>Solutions</strong><br />For Your <b>Future</b><i></i></h1>
          <p className="intro">We deliver cutting-edge technology solutions that transform businesses, drive growth, and create exceptional digital experiences for the modern world.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#contact">Start a Project <svg className="arrow-icon" viewBox="0 0 18 18" aria-hidden="true"><path d="M3 9h11M9.5 4.5L14 9l-4.5 4.5" /></svg></a>
            <a className="secondary-button" href="#services"><img className="play-icon" src={playIcon} alt="" /> Our Services</a>
          </div>
          <div className="stats" aria-label="Company statistics">
            <div><strong>250+</strong><span>Projects Done</span></div>
            <div><strong>50+</strong><span>Team Members</span></div>
            <div><strong>180+</strong><span>Happy Clients</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="image-frame">
            <img src={heroImg} alt="Abstract technology platform" />
            <div className="done-badge"><span>✓</span><div><strong>Project Done</strong><small>Just now</small></div></div>
            <div className="growth-badge"><span>↗</span><div><strong>Growth +85%</strong><small>This month</small></div></div>
          </div>
        </div>
      </section>
      <div className="scroll-cue"><span>Scroll Down</span><div className="mouse"><i></i></div></div>
    </main>
  )
}

export default App
