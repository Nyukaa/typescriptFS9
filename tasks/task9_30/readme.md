# Patientor – React + Vite

A junior-friendly patient management application built with **React + Vite**.  
The project demonstrates core React concepts, clean component structure, API communication, and modern UI practices using **Material UI**.  
Notes: Supports adding new patients, viewing patient details, and adding multiple types of health entries (HealthCheck, Hospital, OccupationalHealthcare) with diagnosis codes.

🌐 **Live demo (Render)**:  
👉 _Add your live demo URL here_

💻 **GitHub Repository**:  
👉

👩‍💻 **Author**:  
Nyukaa  
GitHub: https://github.com/Nyukaa

---

## 🎯 Project Goals

This project was created to practice and demonstrate:

- React fundamentals (hooks, components, props)
- Working with REST APIs (CRUD operations for patients and entries)
- Routing and page navigation (React Router)
- Form handling and validation
- Clean and readable project structure
- UI development with **Material UI**
- State management evolution (local state → Context API for global data like diagnoses)
- Handling multiple entry types with type-safe forms using **TypeScript**

---

## 🛠 Technologies Used

- **Frontend**: React, Vite, TypeScript
- **UI**: Material UI (MUI) components and theming
- **State management**: useState (local) + useContext + useReducer (global diagnoses)
- **API communication**: Axios
- **Testing (optional)**: Jest / React Testing Library

---

## 🧭 Architecture Overview

- **Routing**: React Router for patient list, patient detail, and add pages
- **Data**: Axios requests to a backend (mock API with json-server or real backend)
- **State Management**:
  - **Local state**: form fields, temporary UI state
  - **Global state**: diagnoses list via React Context API + useReducer
- **UI**: Material UI components with consistent theming

---

## 🌍 Live Version (Render)

The production version runs with:

- Vite build
- JSON-server serving:
  - REST API endpoints
  - Static frontend files

**Script example**:

```bash
"server": "vite build && json-server --watch src/db.json --port 3001 --static ./dist"
```

## 🧭 Pages & Routing

- `/` — Patient list
- `/patient/:id` — Patient details (including entries)
- ***

## 🎨 UI & Styling (Material UI)

- Common components: `Button`, `TextField`, `Select`, `Dialog`, `Snackbar`, `List`
- Theming: `createTheme` + `ThemeProvider` for consistent styling and palette
- Form validation: controlled components + `TextField` `helperText` and `error` props

---

## 📄 Data Model

**Patient fields**:

- `id`
- `name`
- `dateOfBirth`
- `ssn`
- `gender`
- `occupation`
- `entries[]`

**Entry fields (examples)**:

- **HealthCheck**: `date`, `description`, `specialist`, `healthCheckRating`, `diagnosisCodes`
- **Hospital**: `date`, `description`, `specialist`, `discharge {date, criteria}`, `diagnosisCodes`
- **OccupationalHealthcare**: `date`, `description`, `specialist`, `employerName`, `sickLeave {startDate, endDate}`, `diagnosisCodes`

---

## 🧩 State Management

**Main branch (default)**:

- `useState` for local state
- Axios for API calls
- Simple, beginner-friendly architecture

**Context branch (learning)**:

- React Context API (`useContext` + `useReducer`)
- Centralized global state: `diagnoses`

---

## 📚 What I Learned

- Structuring a React project with multiple pages and forms
- Working with REST APIs and async requests
- Managing multiple forms with TypeScript type safety
- Handling global state using React Context API
- Using Material UI effectively for form and list components
- Displaying dynamic data like diagnosis codes in entries

---

## 🤝 Contributing

This project is primarily educational, but feedback and suggestions are welcome.
