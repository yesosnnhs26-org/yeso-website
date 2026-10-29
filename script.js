const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.16 }
);

revealElements.forEach((element) => revealObserver.observe(element));

const floatingCta = document.getElementById("floatingCta");
const contactSection = document.getElementById("contact");

if (floatingCta && contactSection) {
  const contactObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          floatingCta.textContent = "Contact YES-O";
          floatingCta.href = "mailto:yesosnnhs26@gmail.com";
          floatingCta.classList.add("contact-mode");
        } else {
          floatingCta.textContent = "Get Involved";
          floatingCta.href = "#contact";
          floatingCta.classList.remove("contact-mode");
        }
      });
    },
    {
      threshold: 0.45
    }
  );

  contactObserver.observe(contactSection);
}

const saveTabs = document.querySelectorAll(".save-tab");
const savePanels = document.querySelectorAll(".save-panel");
saveTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    saveTabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", String(active));
      item.tabIndex = active ? 0 : -1;
    });
    const focusImage = document.getElementById("save-focus-image");
    if (focusImage) {
      focusImage.src = tab.dataset.image;
      focusImage.alt = tab.dataset.alt;
    }
    savePanels.forEach((panel) => {
      const active = panel.id === tab.getAttribute("aria-controls");
      panel.classList.toggle("is-active", active);
      panel.hidden = !active;
    });
  });
  tab.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      const nextIndex = (index + (event.key === "ArrowRight" ? 1 : -1) + saveTabs.length) % saveTabs.length;
      saveTabs[nextIndex].focus();
      saveTabs[nextIndex].click();
    }
  });
});
