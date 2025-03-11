# HALLIFY-FRONTEND

Welcome to the HALLIFY-FRONTEND project! This is a React.js application scaffolded with Vite, utilizing css for styling and Redux Toolkit for state management. We've also integrated some external npm packages to make our development process smoother.

## How to Run Locally

To run the project locally on your machine, follow these simple steps:

1. **Clone the Repository**: Start by cloning this repository to your local machine using the following command in your terminal:
   `git clone` <repository-url>

2. **Navigate to the Project Directory**: Once cloned, navigate to the project directory using the `cd` command:
   `cd hallify-frontend`

3. **Open in VS Code**: Open the project directory in your preferred code editor, such as Visual Studio Code:
   `code .`

4. **Install Dependencies**: Before running the project, make sure to install all the required dependencies. Run the following command:
   `npm install`

5. **Run the Development Server**: After installing the dependencies, you can start the development server using the following command:
   `npm run dev`

6. **Pull Requests**: To work on any feature, branch off the dev branch and name the branch using this convention your-name/feature/feature-name-to-be-worked-on. Each PR should be made to the dev branch.

7. **Start Coding**: You're all set! Now you can start coding and making changes to the project.

# 📦 Redux Overview

Redux is a predictable state management library for JavaScript applications, commonly used with React. It helps manage application-level state in a centralized store, making state updates predictable and easier to debug.

---

## 📚 Core Concepts

1. **Store**: A centralized container holding the entire application state.
2. **Actions**: Plain JavaScript objects describing _what_ happened. Each action must have a `type` property.
3. **Reducers**: Pure functions that take the current state and an action, and return a new state.
4. **Dispatch**: A function to send actions to the store and trigger state changes.
5. **Selectors**: Functions to extract and compute derived state from the store.

---

## 🛠️ Redux Workflow

1. **Dispatch** an action →
2. **Reducer** updates the state →
3. **Store** holds the updated state →
4. **Components** re-render with new state.

---

## 📦 Basic Example Setup

```bash
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; },
    reset: (state) => { state.value = 0; },
  },
});

export const { increment, decrement, reset } = exampleSlice.actions;
export default exampleSlice.reducer;

```

## Use Redux State and Dispatch in Components

```bash
// src/components/Counter.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/exampleSlice";

const Counter = () => {
  const value = useSelector((state) => state.example.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;

```

## Additional Notes

- Make sure to create a new branch for your changes using `git checkout -b <branch-name>` before making any modifications.
- Ensure to follow mobile first approach when translate design into code.
- Stick with the module assigned to you, and don't edit files outside of that module.
- During maintanance pick one module at a time and stick with it until it's completed.
- You must not edit files outside of the module you have picked. This will help to avoid git conflict, and ensure a clear seperation of concerns.
- Ensure that your code is clean, reusable and maintanable.
- Always check for assets, variables, data and utilities in the top level homogenious folder before adding a new one.
- Ensure to reuse components, layout, hooks and other reusables, when ever you can.
- If you encounter any issues or have questions, feel free to reach out to the project developers for assistance.
- Use any of the css font variables in your css component files, use them by putting var(--font-name).
- This project also uses a combination of tailwindcss and base css styling, More information on tailwindcss is found here [Tailwind Docs](https://tailwindcss.com/docs).
- To know more about redux, Check out thier documentation [Redux docs](https://redux-toolkit.js.org/).

Happy coding! 🚀
