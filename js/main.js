document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".testimonials-track");
  const slides = document.querySelectorAll(".testimonial-slide");
  const nextButton = document.querySelector(".testimonial-next");
  const prevButton = document.querySelector(".testimonial-prev");
  const dots = document.querySelectorAll(".testimonial-dot");
  const backToTopButton = document.getElementById("back-to-top");
  // Mobile Menu Functionality
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const closeMobileMenuButton = document.getElementById("close-mobile-menu");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuPanel = mobileMenu.querySelector("div:nth-child(2)"); // The actual menu panel
  const mobileMenuOverlay = mobileMenu.querySelector("div:nth-child(1)"); // The overlay
  const mobileMenuLinks = mobileMenu.querySelectorAll("a");

  // Initialize mobile menu in the correct hidden state
  mobileMenu.classList.add("hidden");

  function openMobileMenu() {
    // First make the container visible
    mobileMenu.classList.remove("hidden");

    // Force a reflow to ensure the transition works
    void mobileMenu.offsetWidth;

    // Animate the overlay
    mobileMenuOverlay.classList.add("opacity-50");
    mobileMenuOverlay.classList.remove("opacity-0");

    // Animate the menu panel sliding in
    mobileMenuPanel.classList.remove("translate-x-full");
    mobileMenuPanel.classList.add("translate-x-0");

    // Prevent body scrolling
    document.body.classList.add("overflow-hidden");
  }

  function closeMobileMenu() {
    // Animate the overlay
    mobileMenuOverlay.classList.remove("opacity-50");
    mobileMenuOverlay.classList.add("opacity-0");

    // Animate the menu panel sliding out
    mobileMenuPanel.classList.remove("translate-x-0");
    mobileMenuPanel.classList.add("translate-x-full");

    // Allow body scrolling
    document.body.classList.remove("overflow-hidden");

    // After animation completes, hide the container
    setTimeout(() => {
      mobileMenu.classList.add("hidden");
    }, 300); // Match this to your transition duration
  }

  function toggleMobileMenu() {
    if (mobileMenu.classList.contains("hidden")) {
      openMobileMenu();
    } else {
      closeMobileMenu();
    }
  }

  mobileMenuButton.addEventListener("click", toggleMobileMenu);
  closeMobileMenuButton.addEventListener("click", closeMobileMenu);

  // Close mobile menu when clicking a link
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileMenu();

      // Smooth scroll to section
      const targetId = link.getAttribute("href");
      if (targetId !== "#") {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // Close mobile menu when clicking outside
  mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu || e.target === mobileMenuOverlay) {
      closeMobileMenu();
    }
  });

  // Handle window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && !mobileMenu.classList.contains("hidden")) {
      closeMobileMenu();
    }
  });

  // Update copyright year
  const yearElement = document.getElementById("copyright-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Show button when user scrolls down 300px from the top
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.remove("opacity-0", "invisible");
      backToTopButton.classList.add("opacity-100", "visible");
    } else {
      backToTopButton.classList.add("opacity-0", "invisible");
      backToTopButton.classList.remove("opacity-100", "visible");
    }
  });

  // Scroll to top when button is clicked
  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  let currentIndex = 0;
  const slideWidth = 100; // 100%
  let autoSlideInterval;

  // Initialize
  updateCarousel();
  startAutoSlide();

  // Set active dot
  function updateDots() {
    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add("bg-[color:var(--color-primary)]");
        dot.classList.remove("bg-gray-300");
      } else {
        dot.classList.add("bg-gray-300");
        dot.classList.remove("bg-[color:var(--color-primary)]");
      }
    });
  }

  // Update carousel position
  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
    updateDots();
  }

  // Next slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }

  // Previous slide
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  }

  // Auto slide
  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
  }

  // Event listeners
  if (nextButton) {
    nextButton.addEventListener("click", () => {
      nextSlide();
      clearInterval(autoSlideInterval);
      startAutoSlide();
    });
  }

  if (prevButton) {
    prevButton.addEventListener("click", () => {
      prevSlide();
      clearInterval(autoSlideInterval);
      startAutoSlide();
    });
  }

  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateCarousel();
      clearInterval(autoSlideInterval);
      startAutoSlide();
    });
  });

  // Pause auto-slide on hover
  const carousel = document.querySelector(".testimonial-carousel");
  if (carousel) {
    carousel.addEventListener("mouseenter", () => {
      clearInterval(autoSlideInterval);
    });

    carousel.addEventListener("mouseleave", () => {
      startAutoSlide();
    });
  }
});
