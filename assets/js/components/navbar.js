export function setupMenuToggle(container) {
  // Ensure navbar.css is loaded
  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = "./assets/css/components/navbar-footer.css";
  document.head.appendChild(style);

  // Menu toggle logic
  const menuToggle = container.querySelector(".menu-toggle");
  const navLinks = container.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
