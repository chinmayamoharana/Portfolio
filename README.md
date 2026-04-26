# Chinmaya Moharana Portfolio

A responsive developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion. The site is designed to present projects as case studies, highlight full-stack skills, and provide a polished contact experience for internships, entry-level roles, and freelance opportunities.

## Overview

This portfolio focuses on clear presentation, modern UI, and product-oriented storytelling. It combines animated landing sections, project detail pages, responsive navigation, reusable content blocks, and a contact form into a single personal website.

## Features

- Responsive homepage with profile-first hero section
- Dedicated pages for About, Skills, Projects, Experience, Education, Blogs, and Contact
- Project listing page with polished CTA buttons and GitHub links
- Dynamic project case study pages using route params
- Fixed responsive navbar tuned for desktop, tablet, and mobile layouts
- Framer Motion transitions and reveal effects across the site
- Particle and cursor glow background effects
- Resume download links and social profile links
- Contact form powered by EmailJS

## Routes

- `/` Home
- `/about` About
- `/skills` Skills
- `/projects` All projects
- `/projects/:slug` Individual project case study
- `/experience` Experience
- `/education` Education
- `/blogs` Blogs
- `/contact` Contact

## Tech Stack

- React 19
- Vite
- React Router DOM
- Tailwind CSS 4
- Framer Motion
- React Icons
- React Type Animation
- Three.js
- `@react-three/fiber`
- `@react-three/drei`
- EmailJS

## Project Structure

```text
src/
  App.jsx
  main.jsx
  data/
    projects.js
  components/
    About.jsx
    Blogs.jsx
    Contact.jsx
    CursorGlow.jsx
    Education.jsx
    Experience.jsx
    Footer.jsx
    Hero.jsx
    Home.jsx
    MagneticButton.jsx
    Navbar.jsx
    ParticleBackground.jsx
    ProjectCaseStudy.jsx
    Projects.jsx
    Skills.jsx
    TiltCard.jsx
public/
  LOGO.png
  Profile.jpeg
  resume.pdf
  project*.png
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Content Management

- Update project data in `src/data/projects.js`
- Update homepage layout in `src/components/Home.jsx`
- Update navigation links and tablet/mobile behavior in `src/components/Navbar.jsx`
- Update all-project cards in `src/components/Projects.jsx`
- Update project detail layout in `src/components/ProjectCaseStudy.jsx`
- Replace images, logo, and resume from the `public` folder

## Contact Form Note

The contact page currently uses EmailJS identifiers directly inside `src/components/Contact.jsx`. For a cleaner production setup, move those values to environment variables before deployment.

## Current UI Direction

- Case-study-oriented projects instead of plain portfolio cards
- Responsive desktop, tablet, and mobile layouts
- Professional hero section with dedicated profile image panel
- Stronger CTA styling across home and project pages

## Purpose

This project is meant to function as a professional portfolio for showcasing engineering ability, frontend polish, and full-stack project work in a way that is easy for recruiters, hiring teams, and collaborators to review.
