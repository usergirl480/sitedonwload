// Create magical particles
function createMagicalParticles() {
  const container = document.getElementById("particles-container")

  for (let i = 0; i < 20; i++) {
    const particle = document.createElement("div")
    particle.className = "magical-particle"
    particle.style.left = Math.random() * 100 + "%"
    particle.style.animationDelay = Math.random() * 8 + "s"
    particle.style.animationDuration = 8 + Math.random() * 4 + "s"
    container.appendChild(particle)
  }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

// Add entrance animations on scroll
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running"
      }
    })
  }, observerOptions)

  document.querySelectorAll(".epic-entrance").forEach((el) => {
    el.style.animationPlayState = "paused"
    observer.observe(el)
  })
}

// Add hover effects to buttons
function initButtonEffects() {
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px) scale(1.02)"
    })

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  createMagicalParticles()
  initSmoothScrolling()
  initScrollAnimations()
  initButtonEffects()

  // Add some dynamic sparkle effects
  setInterval(() => {
    const sparkles = document.querySelectorAll(".sparkle")
    sparkles.forEach((sparkle) => {
      sparkle.style.animationDuration = 2 + Math.random() * 2 + "s"
    })
  }, 5000)
})

// Add parallax effect to background
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const background = document.querySelector(".background-image")
  if (background) {
    background.style.transform = `translateY(${scrolled * 0.5}px)`
  }
})
