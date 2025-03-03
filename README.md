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

More Guidelines would be added soon

## HAPPY CODING CSC 26
