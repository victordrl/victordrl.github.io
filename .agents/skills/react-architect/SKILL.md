# React Architecture Expert

Expert guidance on structuring React projects, state management strategy, and project scalability.

## Triggering Conditions
- User asks to "start a new React project", "organize folders", "project structure", "atomic design".
- When planning the layout of a frontend-only application.
- Deciding between Context API, Zustand, or Redux.

## Core Instructions
- **Atomic Design Strategy**: Structure components into `atoms`, `molecules`, `organisms`, and `pages`.
- **Folder Structure**:
  - `src/components/`: Reusable UI elements.
  - `src/hooks/`: Custom React hooks.
  - `src/store/`: State management (Zustand/Context).
  - `src/pages/`: Main application views.
  - `src/services/`: API/External logic.
  - `src/styles/`: Global CSS/Tailwind configs.
- **Separation of Concerns**: Keep UI logic (view) separate from business logic (hooks/services).
- **Vite Integration**: Use Vite for fast development and optimal bundling.
- **Clean Code**: Follow SOLID principles in React component design.

## Project Structure Template
```text
src/
├── assets/
├── components/
│   ├── atoms/
│   ├── molecules/
│   └── organisms/
├── hooks/
├── layouts/
├── pages/
├── services/
├── store/
├── utils/
├── App.jsx
└── main.jsx
```

## References
- [React Project Structure Guide](https://react.dev/learn/standard-project-structure)
- [Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/)
