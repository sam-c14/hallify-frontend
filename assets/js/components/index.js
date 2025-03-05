// index.js
import { setupMenuToggle } from "./navbar.js";
// import '../../css/components/'

// Utility to ensure valid custom element name
const getValidElementName = (name) => {
  return name.includes("-") ? name : `custom-${name}`;
};

// Function to register custom elements
async function registerCustomElement(name, path) {
  try {
    const response = await fetch(path);
    if (!response.ok)
      throw new Error(`Failed to fetch ${path}: ${response.statusText}`);
    const html = await response.text();

    class DynamicElement extends HTMLElement {
      constructor() {
        super();
      }

      async connectedCallback() {
        const container = document.createElement("div");
        container.innerHTML = html;
        const template = container.querySelector("template");
        if (!template) throw new Error(`Template not found in ${path}`);

        this.appendChild(template.content.cloneNode(true));

        // ✅ Import and set up menu toggle
        if (name === "navbar") {
          setupMenuToggle(this);
        }
      }
    }

    // Register the custom element if not already defined
    const validName = getValidElementName(name);
    if (!customElements.get(validName)) {
      customElements.define(validName, DynamicElement);
      console.log(`Registered component: <${validName}>`);
    }
  } catch (error) {
    console.error(`Error registering ${name}:`, error);
  }
}

// Dynamically register components
async function registerComponents() {
  await registerCustomElement("navbar", "/components/navbar.html");
  await registerCustomElement("footer", "/components/footer.html");
  await registerCustomElement("button", "/components/button.html");
}

export { registerComponents };
