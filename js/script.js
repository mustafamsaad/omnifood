"use strict";

// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
// Make mobile navigation work
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// Smooth scrolling
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) =>
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // Scroll to top
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Scroll to another link
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile nav
    if (link.classList.contains("main-nav-link"))
      header.classList.toggle("nav-open");
  })
);

// Sticky navigation
const hero = document.querySelector(".section-hero");
const body = document.querySelector("body");

const callback = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) body.classList.add("sticky");
  else body.classList.remove("sticky");
};

const heroObs = new IntersectionObserver(callback, {
  root: null,
  threshold: 0,
  rootMargin: "-80px",
});

heroObs.observe(hero);
