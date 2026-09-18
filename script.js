// TODO: substituir pelo número comercial definitivo assim que o cliente repassar
// (ver ESTADO-DO-PROJETO.md secao 9 / pendencia em 4a-prompt-site.md).
const WHATSAPP_NUMBER = "SEUNUMEROAQUI";
const WHATSAPP_MESSAGE = "Vim do site — quero saber mais sobre o transfer";

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  link.target = "_blank";
  link.rel = "noopener";
});

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("is-open"));
});

document.querySelectorAll(".accordion__trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const item = trigger.parentElement;
    const panel = trigger.nextElementSibling;
    const isOpen = item.classList.contains("is-open");

    document.querySelectorAll(".accordion__item.is-open").forEach((openItem) => {
      openItem.classList.remove("is-open");
      openItem.querySelector(".accordion__panel").style.maxHeight = null;
    });

    if (!isOpen) {
      item.classList.add("is-open");
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

const revealEls = document.querySelectorAll(".reveal");
if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => revealObserver.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}
