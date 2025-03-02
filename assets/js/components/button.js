// Define the custom button element
class CustomButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    try {
      // Fetch the template content
      const response = await fetch("/components/button.html");
      if (!response.ok) {
        throw new Error(`Failed to fetch button.html: ${response.statusText}`);
      }
      const html = await response.text();

      // Create a temporary container to parse the HTML
      const tempContainer = document.createElement("div");
      tempContainer.innerHTML = html;

      // Extract the template
      const template = tempContainer.querySelector("template");
      if (!template) {
        throw new Error("Template not found in the fetched HTML.");
      }

      // Clone the content inside the template
      this.shadowRoot.appendChild(template.content.cloneNode(true));

      // Select the button element
      const button = this.shadowRoot.querySelector("button");
      if (!button) {
        throw new Error("Button element not found in the template.");
      }

      // Set button text (with fallback)
      button.textContent = this.getAttribute("text") || "Click Me";

      // Apply button variant (e.g., primary, secondary, danger)
      const variant = this.getAttribute("variant") || "primary";
      button.classList.add(`btn-${variant}`);

      // Handle click event if provided
      if (this.hasAttribute("onClick")) {
        const handlerName = this.getAttribute("onClick");
        if (typeof window[handlerName] === "function") {
          button.addEventListener("click", () => window[handlerName]());
        } else {
          console.warn(`Function ${handlerName} is not defined.`);
        }
      }
    } catch (error) {
      console.error("Error loading custom button:", error);
    }
  }
}

// Register the custom element
customElements.define("custom-button", CustomButton);

// This module gives a template for how reusable components should be defined and handled via js while building the app, more explanation would happen in the documentation
