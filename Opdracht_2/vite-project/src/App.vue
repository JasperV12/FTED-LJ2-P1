<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const heroSlides = [
  {
    image: '/images/hero-construction.jpg',
    kicker: 'HIGH QUALITY GUARANTEED',
    title: ['Constructing', 'Is Our Life Business'],
  },
  {
    image: '/images/hero-building.jpg',
    kicker: 'BUILDING THE FUTURE',
    title: ['Strong Ideas', 'Build Great Spaces'],
  },
]

const whoWeAre = [
  {
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=85',
    title: 'Construction',
    text: 'We specialize in all kinds of construction works. Our certified team provides the services in time and on the highest level.',
  },
  {
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=85',
    title: 'About us',
    text: 'BuildWall is completely client-oriented company. We are able meet schedule deadlines with top quality.',
  },
  {
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=85',
    title: 'Effective teamwork',
    text: 'We have a very good team-based and teamwork attitude, working together to find the best solutions.',
  },
]

const projects = [
  { image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85', category: 'interior', title: 'Modern family residence', text: 'A light-filled interior designed for everyday living.' },
  { image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1000&q=85', category: 'building', title: 'Contemporary house', text: 'Clean architecture with a strong connection to nature.' },
  { image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85', category: 'consulting', title: 'Ocean side project', text: 'Thoughtful planning and timeless materials.' },
  { image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85', category: 'interior', title: 'Warm minimalism', text: 'A calm, functional space made around its owners.' },
  { image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=85', category: 'office', title: 'Creative workspace', text: 'An inspiring workplace for a growing team.' },
  { image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85', category: 'building', title: 'Palm house', text: 'A sustainable home with room to breathe.' },
]

const filters = ['all', 'building', 'consulting', 'interior', 'office']
const filterOrders = {
  all: [0, 1, 2, 3, 4, 5],
  building: [2, 5, 0, 4, 1, 3],
  consulting: [4, 1, 3, 5, 0, 2],
  interior: [3, 0, 5, 2, 4, 1],
  office: [1, 4, 2, 0, 5, 3],
}
const slide = ref(0)
const filter = ref('all')
const menuOpen = ref(false)
let timer

const currentSlide = computed(() => heroSlides[slide.value])
const visibleProjects = computed(() => filterOrders[filter.value].map((index) => projects[index]))

function nextSlide(direction = 1) {
  slide.value = (slide.value + direction + heroSlides.length) % heroSlides.length
}

onMounted(() => {
  timer = window.setInterval(() => nextSlide(), 6000)
})

onUnmounted(() => window.clearInterval(timer))
</script>

<template>
  <main>
    <header class="site-header">
      <div class="topbar container">
        <a class="logo" href="#top" aria-label="BuildIcon home">
          <span class="logo-mark">◐</span>
          <span><strong>Build<span>Icon</span></strong><small>CONSTRUCTION COMPANY</small></span>
        </a>
        <div class="header-details">
          <div><span class="detail-icon">▣</span><span><small>CUSTOM SUPPORT &amp; SALE</small><b>+7-495-1234567</b></span></div>
          <div><span class="detail-icon">◷</span><span><small>WORKING TIME</small><b>MON–SAT: 08:00–18:00</b></span></div>
          <a class="quote-button dark" href="#contact">✉ &nbsp; REQUEST A QUOTE</a>
        </div>
        <button class="menu-toggle" type="button" :aria-expanded="menuOpen" @click="menuOpen = !menuOpen">☰</button>
      </div>
      <nav class="nav-bar" :class="{ open: menuOpen }" aria-label="Main navigation">
        <div class="container nav-inner">
          <button class="active" type="button">HOME</button>
          <button type="button">ABOUT</button>
          <div class="nav-dropdown">
            <button type="button" aria-haspopup="true">SERVICES <span class="dropdown-chevron" aria-hidden="true"></span></button>
            <div class="dropdown-menu">
              <span>Construction consultation</span>
              <span>House renovation</span>
              <span>Architecture &amp; building</span>
              <span>Interior design</span>
              <span>Building engineering</span>
              <span>Preconstruction planning</span>
            </div>
          </div>
          <div class="nav-dropdown">
            <button type="button" aria-haspopup="true">PROJECTS <span class="dropdown-chevron" aria-hidden="true"></span></button>
            <div class="dropdown-menu">
              <span>Building projects</span>
              <span>Consulting projects</span>
              <span>Interior projects</span>
              <span>Office projects</span>
            </div>
          </div>
          <button type="button">NEWS</button>
          <button type="button">CONTACT</button>
          <button class="search" type="button" aria-label="Search">⌕</button>
        </div>
      </nav>
    </header>

    <section class="hero" id="top">
      <img :key="slide" class="hero-image" :src="currentSlide.image" :alt="currentSlide.kicker">
      <div class="hero-overlay" />
      <div class="container hero-content">
        <div class="hero-copy">
          <span class="accent-line" />
          <p class="hero-kicker">{{ currentSlide.kicker }}</p>
          <h1>{{ currentSlide.title[0] }}<br>{{ currentSlide.title[1] }}</h1>
          <div class="hero-actions">
            <a class="quote-button yellow" href="#who-we-are">OUR SERVICES <b>›</b></a>
            <a class="quote-button dark" href="#who-we-are">ABOUT US <b>›</b></a>
          </div>
        </div>
      </div>
      <button class="hero-arrow prev" aria-label="Previous slide" @click="nextSlide(-1)">‹</button>
      <button class="hero-arrow next" aria-label="Next slide" @click="nextSlide()">›</button>
    </section>

    <section class="intro-strip">
      <div class="container intro-content">
        <h2>We Are BuildWall</h2>
        <p>We have been transforming the ideas and visions into award-winning projects.</p>
        <a class="quote-button yellow" href="#contact">✉ &nbsp; REQUEST A QUOTE</a>
      </div>
    </section>

    <section class="who-section" id="who-we-are">
      <div class="container cards-grid">
        <article v-for="card in whoWeAre" :key="card.title" class="info-card">
          <img :src="card.image" alt="">
          <div class="card-content">
            <h3>{{ card.title }}</h3><span class="card-line" />
            <p>{{ card.text }}</p>
            <a class="learn-more" href="#contact">LEARN MORE <b>›</b></a>
          </div>
        </article>
      </div>
    </section>

    <section class="projects-section" id="projects">
      <div class="project-heading">
        <h2>FEATURED PROJECTS</h2>
        <div class="filters">
          <button v-for="item in filters" :key="item" :class="{ selected: filter === item }" @click="filter = item">{{ item }}</button>
        </div>
      </div>
      <div class="projects-grid">
        <article v-for="project in visibleProjects" :key="project.title" class="project">
          <img :src="project.image" :alt="project.title">
          <div class="project-overlay"><h3>{{ project.title }}</h3><p>{{ project.text }}</p><a href="#contact">LEARN MORE&nbsp; ›</a></div>
        </article>
      </div>
    </section>

    <footer id="contact"><div class="container"><strong>Build<span>Icon</span></strong><p>Quality construction. Trusted partnerships.</p></div></footer>
    <a class="to-top" href="#top" aria-label="Back to top">↑ <span>TOP</span></a>
  </main>
</template>
