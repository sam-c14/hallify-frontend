// Define the custom button element
class CustomButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }); // Shadow DOM encapsulation
  }

  async connectedCallback() {
    // Load and attach the template
    const response = await fetch("/components/button.html");
    const html = await response.text();
    this.shadowRoot.innerHTML = html;

    // Access the button and apply dynamic content
    const button = this.shadowRoot.querySelector("button");

    // Set button text (default if none provided)
    button.textContent = this.getAttribute("text") || "Click Me";

    // Handle variant (e.g., primary, secondary, danger)
    const variant = this.getAttribute("variant") || "primary";
    button.className = `btn btn-${variant}`;

    // Add click event listener if provided
    if (this.hasAttribute("onClick")) {
      button.addEventListener("click", () => {
        const handler = this.getAttribute("onClick");
        window[handler]?.();
      });
    }
  }
}

// Register the custom element
customElements.define("custom-button", CustomButton);

// This module gives a template for how reusable components should be defined and handled via js while building the app, more explanation would happen in the documentation
