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
