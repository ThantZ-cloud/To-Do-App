# To-Do App with React + Vite + MUI

A simple task manager built with React and Vite, using Material UI for layout and styling. The app supports adding tasks, toggling completion, deleting items, and switching between light/dark themes.

## Features

- Add new to-do items with a form input
- Mark tasks complete or incomplete with a toggle button
- Delete tasks individually
- Separate lists for active and completed tasks
- Light/dark theme toggle using MUI theme provider
- Built with React 19 and Vite for fast development

## Tech Stack

- React
- Vite
- Material UI (`@mui/material`, `@mui/icons-material`)
- Emotion for styling (`@emotion/react`, `@emotion/styled`)
- Roboto font via `@fontsource/roboto`

## Installation

```bash
npm install
```

## Running Locally

```bash
npm run dev
```

Then open the local development URL shown in the terminal.

## Build for Production

```bash
npm run build
```

## Project Structure

- `src/App.jsx` — main app component that manages task state
- `src/AppProvider.jsx` — theme provider and context for light/dark mode
- `src/Header.jsx` — app header with task count and theme toggle
- `src/Form.jsx` — input form for adding new tasks
- `src/Item.jsx` — list item component with complete/delete actions
- `src/main.jsx` — app entry and root render

## Notes

- Task data is stored in component state and does not persist after refresh.
- The UI uses MUI components like `AppBar`, `Container`, `List`, and icons.

## License

This project is open source and available to use freely.