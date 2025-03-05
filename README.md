# HALLIFY-FRONTEND

Welcome to the HALLIFY-FRONTEND project! This is a booking application which is built using the core tools of the web, html, css and javascript. The codebase is setup using a modular approach, i.e, each reusable component according to the design which can be found here https://www.figma.com/design/e25qhVmCdEq5Q2YBhLqcAH/Hallify?node-id=1302-4&t=U9srIsrJDKjZbehE-0, It is seperated into modules using the template tag to define components in the html file and then using javascript to manage imports within other html files. This ensures scalability for the application.

## How to Run Locally

To run the project locally on your machine, follow these simple steps:

1. **Clone the Repository**: Start by cloning this repository to your local machine using the following command in your terminal:
   `git clone` <repository-url>

2. **Navigate to the Project Directory**: Once cloned, navigate to the project directory using the `cd` command:
   `cd hallify-frontend`

3. **Open in VS Code**: Open the project directory in your preferred code editor, such as Visual Studio Code:
   `code .`

4. **Install Live Server**: Before running the project, make sure to install live server if not present. It can be found in the extensions marketplace on the VSCode editor or run the following command:
   `npm install -g live-server`

5. **Run the Development Server**: After installing live server, you can start the development server using the following command:
   `live server` or by clicking on the live server option on the bottom right of your VSCode editor.

6. **Pull Requests**: To work on any feature, branch off the dev branch and name the branch using this convention your-name/feature/feature-name-to-be-worked-on. Each PR should be made to the dev branch.

7. **Start Coding**: You're all set! Now you can start coding and making changes to the project. Happy coding!

## Folder Structure

```bash
/project-root
├── /assets
│    ├── /css
│    │    ├── main.css
│    │    └── components/
│    │          └── button.css
│    ├── /js
│    │    ├── main.js
│    │    └── components/
│    │          ├── button.js
│    │          └── modal.js
│    └── /images
├── /components
│    ├── button.html
│    ├── navbar.html
│    └── modal.html
├── index.html
└── about.html

```

## Coding Guidelines

1. Every icon used in the project should be defined as an svg by copying it directly from the figma and pasting in an svg file created in the icons subdirectory under the assets directory.

2. Every reusable component such as navbars, footers and so on should be defined as modules within the components subdirectory in the js subfolder within the assets folder. They should be importable for any html file being used.

3. Every reusable html markup that is to be defined should be done with the template tags and if comments are needed they shoul dbe left within the file for a better developer experience

4. All pages should be defined as html files at the root level of the app.

5. Images should be in the form of svg or png and should be within the images subdirectory.

6. Follow the js guideline to define & render a reusable component in the project.

7. We are using an SPA approach meaning that routes would be properly defined within the pages subdirectory, note to call every html file within this directory the route name which you would like it to have within the application.

8. We are switching from shadowDOM to LightDOM to allow the use of external stylesheets instead of isolated styles in each custom component.

9. All stylesheets should be imported into the main.css file.

# 📚 Adding Custom Components

This project supports dynamic custom components using the registerCustomElement function. Follow the steps below to add a new component.

## 📌 How to Add a Custom Component

1. **Create the Component Template**

   Add a new HTML file inside the /components directory. This file should contain your component's structure and optional styles.

   ```bash
   <template id="button-template">
     <button class="btn btn-primary"></button>
   </template>
   ```

2. **Register the Component**

   In the registerComponents function (found in /assets/js/main.js), add a new await registerCustomElement call.

   ```bash
   async function registerComponents() {
    await registerCustomElement("navbar", "/components/navbar.html");
    await registerCustomElement("footer", "/components/footer.html");
    await registerCustomElement("button", "/components/button.html");
   }
   ```

   ✅ Ensure the first argument is the name of the custom component, and the second argument is the path to the HTML file.

3. **Use the Component in Your HTML**

   You can now use the custom component as an HTML tag anywhere in your page.

   ```bash
   <custom-navbar></custom-navbar>
   <custom-button text="Submit"></custom-button>
   <custom-footer></custom-footer>
   ```

4. **Ensure External Styles Apply**

   Since the components are rendered in the Light DOM, they will inherit styles from external stylesheets. Ensure you add your styles to the appropriate CSS files (e.g., main.css).

   ```bash
   .nav-links ul {
    display: flex;
    gap: 20px;
   }
   ```

   ✅ Ensure this stylesheet is imported in your main CSS file:

   ```bash
   @import "./components/navbar.css";
   ```

## HAPPY CODING CSC 26
