# HALLIFY-FRONTEND

Welcome to the HALLIFY-FRONTEND project! This is a booking application which is built using the core tools of the web, html, css and javascript. The codebase is setup using a modular approach, i.e, each reusable component according to the design which can be found here https://www.figma.com/design/e25qhVmCdEq5Q2YBhLqcAH/Hallify?node-id=1302-4&t=U9srIsrJDKjZbehE-0, is seperated into modules using the template tag to define components in the html file and then using javascript to manage imports within other html files. This ensures scalability for the application.

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

6. **Start Coding**: You're all set! Now you can start coding and making changes to the project. Happy coding!

## Folder Structure

/project-root
├── /assets
│ ├── /css
│ │ ├── main.css
│ │ └── components/
│ │ └── button.css
│ ├── /js
│ │ ├── main.js
│ │ └── components/
│ │ ├── button.js
│ │ └── modal.js
│ └── /images
├── /components
│ ├── button.html
│ ├── navbar.html
│ └── modal.html
├── index.html
└── about.html
