// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Preloader
    window.addEventListener("load", () => {
      const preloader = document.querySelector(".preloader")
      preloader.style.opacity = "0"
      setTimeout(() => {
        preloader.style.display = "none"
      }, 500)
    })
  
    // Navbar scroll effect
    const navbar = document.querySelector(".navbar")
    const navLinks = document.querySelectorAll(".nav-link")
    const sections = document.querySelectorAll("section")
    const backToTop = document.querySelector(".back-to-top")
  
    window.addEventListener("scroll", () => {
      // Navbar background change on scroll
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled")
      } else {
        navbar.classList.remove("scrolled")
      }
  
      // Back to top button visibility
      if (window.scrollY > 500) {
        backToTop.classList.add("active")
      } else {
        backToTop.classList.remove("active")
      }
  
      // Active nav link on scroll
      let current = ""
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (pageYOffset >= sectionTop - 200) {
          current = section.getAttribute("id")
        }
      })
  
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href").substring(1) === current) {
          link.classList.add("active")
        }
      })
    })
  
    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle")
    const navMenu = document.querySelector(".nav-menu")
  
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
      document.body.classList.toggle("no-scroll")
    })
  
    // Close mobile menu when clicking on a nav link
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active")
        document.body.classList.remove("no-scroll")
      })
    })
  
    // Typing animation
    const typingElement = document.querySelector(".typing")
    const words = ["Software Engineer", "Java Developer", "Web Developer", "Problem Solver"]
    let wordIndex = 0
    let charIndex = 0
    let isDeleting = false
    let typingDelay = 200
    const erasingDelay = 100
    const newWordDelay = 2000
  
    function type() {
      const currentWord = words[wordIndex]
  
      if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1)
        charIndex--
        typingDelay = erasingDelay
      } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1)
        charIndex++
        typingDelay = 200
      }
  
      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true
        typingDelay = newWordDelay
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        wordIndex = (wordIndex + 1) % words.length
      }
  
      setTimeout(type, typingDelay)
    }
  
    if (typingElement) {
      setTimeout(type, newWordDelay)
    }
  
    // Animate progress bars when in viewport
    const progressBars = document.querySelectorAll(".progress")
  
    function animateProgressBars() {
      progressBars.forEach((bar) => {
        const rect = bar.getBoundingClientRect()
        const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0
  
        if (isInViewport && !bar.classList.contains("animated")) {
          const width = bar.getAttribute("data-width")
          bar.style.width = width
          bar.classList.add("animated")
        }
      })
    }
  
    window.addEventListener("scroll", animateProgressBars)
    animateProgressBars() // Initial check
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 70,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Form submission
    const contactForm = document.getElementById("contactForm")
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form values
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const subject = document.getElementById("subject").value
        const message = document.getElementById("message").value
  
        // Here you would typically send the form data to a server
        // For demonstration, we'll just log it and show an alert
        console.log("Form submitted:", { name, email, subject, message })
  
        // Show success message
        alert("Thank you for your message! I will get back to you soon.")
  
        // Reset form
        contactForm.reset()
      })
    }
  
    // Fade-in animation for elements
    const fadeElements = document.querySelectorAll(
      ".about-content, .skills-category, .project-card, .certification-card, .contact-content",
    )
  
    function fadeIn() {
      fadeElements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const isInViewport = rect.top <= window.innerHeight - 100 && rect.bottom >= 0
  
        if (isInViewport) {
          element.classList.add("fade-in")
        }
      })
    }
  
    window.addEventListener("scroll", fadeIn)
    fadeIn() // Initial check
  
    // Add fade-in class to CSS
    const style = document.createElement("style")
    style.textContent = `
          .about-content, .skills-category, .project-card, .certification-card, .contact-content {
              opacity: 0;
              transform: translateY(20px);
              transition: opacity 0.6s ease, transform 0.6s ease;
          }
          
          .fade-in {
              opacity: 1;
              transform: translateY(0);
          }
      `
    document.head.appendChild(style)
  })
  