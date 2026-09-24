(function () {
  "use strict";

  function initWebNeshan() {
    /* =========================
       MOBILE MENU
    ========================= */

    const navbar = document.querySelector(".navbar");
    const navbarContent = document.querySelector(".navbar-content");
    const navbarButton = document.querySelector(".navbar-btn");

    if (navbar && navbarContent) {
      let menuToggle = document.querySelector(".mobile-menu-toggle");

      if (!menuToggle) {
        menuToggle = document.createElement("button");

        menuToggle.type = "button";
        menuToggle.className = "mobile-menu-toggle";
        menuToggle.setAttribute("aria-label", "باز کردن منو");
        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML = '<i class="ph-light ph-list"></i>';

        if (navbarButton) {
          navbar.insertBefore(menuToggle, navbarButton);
        } else {
          navbar.appendChild(menuToggle);
        }
      }

      const navLinks = navbarContent.querySelectorAll("a");

      function closeMobileMenu() {
        navbar.classList.remove("menu-open");

        menuToggle.classList.remove("is-open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "باز کردن منو");

        const icon = menuToggle.querySelector("i");

        if (icon) {
          icon.classList.remove("ph-x");
          icon.classList.add("ph-list");
        }
      }

      function openMobileMenu() {
        navbar.classList.add("menu-open");

        menuToggle.classList.add("is-open");

        menuToggle.setAttribute("aria-expanded", "true");

        menuToggle.setAttribute("aria-label", "بستن منو");

        const icon = menuToggle.querySelector("i");

        if (icon) {
          icon.classList.remove("ph-list");
          icon.classList.add("ph-x");
        }
      }

      menuToggle.addEventListener("click", function () {
        const isOpen = navbar.classList.contains("menu-open");

        if (isOpen) {
          closeMobileMenu();
        } else {
          openMobileMenu();
        }
      });

      navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
          closeMobileMenu();
        });
      });

      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          closeMobileMenu();
        }
      });

      window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
          closeMobileMenu();
        }
      });
    }

    /* =========================
       FAQ ACCORDION
    ========================= */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(function (item, index) {
      const question = item.querySelector(".faq-question");

      const answer = item.querySelector(".faq-answer");

      if (!question || !answer) {
        return;
      }

      const answerId = "faq-answer-" + (index + 1);

      answer.id = answerId;

      question.setAttribute("type", "button");

      question.setAttribute("aria-controls", answerId);

      question.setAttribute("aria-expanded", "false");

      answer.style.maxHeight = "0px";

      answer.style.paddingTop = "0px";

      answer.style.paddingBottom = "0px";

      answer.style.overflow = "hidden";

      answer.style.transition = "max-height 0.35s ease, padding 0.35s ease";

      question.addEventListener("click", function () {
        const isOpen = question.getAttribute("aria-expanded") === "true";

        faqItems.forEach(function (otherItem) {
          const otherQuestion = otherItem.querySelector(".faq-question");

          const otherAnswer = otherItem.querySelector(".faq-answer");

          if (!otherQuestion || !otherAnswer) {
            return;
          }

          otherQuestion.setAttribute("aria-expanded", "false");

          otherItem.classList.remove("is-open");

          otherAnswer.style.maxHeight = "0px";

          otherAnswer.style.paddingTop = "0px";

          otherAnswer.style.paddingBottom = "0px";
        });

        if (!isOpen) {
          question.setAttribute("aria-expanded", "true");

          item.classList.add("is-open");

          answer.style.paddingTop = "0px";

          answer.style.paddingBottom = "20px";

          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });

    /* =========================
       HERO PORTFOLIO BUTTON
    ========================= */

    const portfolioButtons = document.querySelectorAll(
      '.hero-button a[href="#"]',
    );

    portfolioButtons.forEach(function (button) {
      if (button.textContent.trim().includes("نمونه کار")) {
        button.setAttribute("href", "#portfolio");
      }
    });

    /* =========================
       FOOTER LOGO
    ========================= */

    const footerLogo = document.querySelector(".footer-logo");

    if (footerLogo && footerLogo.getAttribute("href") === "#") {
      footerLogo.addEventListener("click", function (event) {
        event.preventDefault();

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initWebNeshan);
  } else {
    initWebNeshan();
  }
})();
