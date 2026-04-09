# Chinmaya Moharana Portfolio

A modern developer portfolio built with React and Vite to showcase projects, technical skills, experience, education, blogs, and contact details in a polished, animated interface.

## Overview

This portfolio presents Chinmaya Moharana as a Full Stack Developer with a focus on React, MERN, Django, Python, REST APIs, and scalable application development. The site combines strong visual presentation with smooth motion effects and a responsive layout for desktop and mobile users.

## Portfolio Sections

- Hero section with animated role highlights, social links, and resume access
- About section with professional summary, core technologies, and quick stats
- Education section for academic background
- Skills section covering frontend, backend, databases, and development tools
- Experience section for internships and professional work
- Blogs section with expandable technical articles
- Projects section featuring full-stack and backend applications
- Contact section with EmailJS-powered message form

## Highlighted Projects

- Finance Dashboard System: Full-stack financial tracking platform using React.js, Django, Django REST Framework, MySQL, JWT authentication, RBAC, charts, budget alerts, reporting APIs, and admin controls
- Job Portal: MERN-based application with JWT authentication, REST APIs, MongoDB integration, and role-based dashboards
- PDF ↔ Word Converter: Django and React document conversion platform with secure file upload handling
- ATS Resume Checker: Resume analysis tool with keyword extraction and scoring workflow
- Kanban Board Application: Task management system with drag-and-drop workflows, JWT authentication, and real-time collaboration concepts

## Tech Stack

- React 19
- Vite
- React Router DOM
- Tailwind CSS
- Framer Motion
- React Icons
- React Type Animation
- Axios
- EmailJS

## Project Structure

```text
src/
  App.jsx
  main.jsx
  components/
    About.jsx
    Blogs.jsx
    Contact.jsx
    Education.jsx
    Experience.jsx
    Footer.jsx
    Hero.jsx
    Home.jsx
    Navbar.jsx
    Projects.jsx
    Skills.jsx
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open the local Vite URL shown in the terminal, usually `http://localhost:5173`.

## Available Scripts

- `npm run dev` starts the development server
- `npm run build` creates a production build
- `npm run preview` previews the production build locally
- `npm run lint` runs ESLint checks

## Customization Notes

- Project cards can be updated in `src/components/Projects.jsx`
- Portfolio sections are organized as reusable components inside `src/components`
- Resume and project images are served from the `public` folder
- The contact form is configured with EmailJS credentials inside `src/components/Contact.jsx`

## Purpose

This project is designed to serve as a professional portfolio for internships, placements, freelance opportunities, and full-time developer roles.
