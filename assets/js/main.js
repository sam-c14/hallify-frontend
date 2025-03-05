import { registerComponents } from "./components/index.js";

// Register all components
registerComponents();

// Handle navigation
function navigateTo(route) {
  window.location.hash = route;
  loadPage(route);
}

// Load pages dynamically
async function loadPage(route) {
  const page = route === "" ? "/home" : route;
  const content = await fetch(`/pages${page}.html`).then((res) => res.text());
  document.querySelector("#app").innerHTML = content;
}

// Listen for hash changes
window.addEventListener("hashchange", () => {
  loadPage(window.location.hash.replace("#", ""));
});

// Initial load
loadPage(window.location.hash.replace("#", ""));

//  The reason for using hash based routing is so that upon refresh the url which was there before still loads up the page
// For us to achieve this in devlopment, we'd have to configure live server(that is too much hassle) or use our own dev server(too much stress)
// So we use a hash based routing for development and then in production, we can use proper routes because we'd be able to handle redirects
// Using _redirects file in our app directory, pointing all requests back to index.html
