# Technical Documentation

## Project Overview
This project is a responsive personal portfolio website created using HTML, CSS, and JavaScript. It contains information about me, my skills, two projects, and a contact form.

## Project Files
1. `index.html` contains the website structure and content.
2. `css/styles.css` contains the colors, spacing, layout, and responsive design.
3. `js/script.js` contains the time based greeting feature.
4. `assets/images` is used to store website images.
5. `docs` contains the AI usage report and technical documentation.

## HTML
The website uses a header, navigation, main content, and footer. The main content contains About Me, Projects, and Contact sections. Navigation links use section IDs to move to the correct part of the page. The contact form includes Name, Email, and Message fields.

## CSS and Responsive Design
CSS is used to style the navigation, intro area, skills, project cards, contact form, and footer. Flexbox is used for the navigation and skills, while CSS Grid is used for the project cards.

Media queries change the layout for tablet and mobile screens. Project cards change from two columns to one column, and the navigation stacks vertically on smaller screens. I tested the responsive layout using Chrome DevTools.

## JavaScript
JavaScript displays a greeting based on the visitor’s current time. It selects the greeting paragraph, retrieves the current hour, and uses conditions to display a morning, afternoon, or evening greeting.

## Limitations
The project images are temporary placeholders and can be replaced with actual project screenshots later. The contact form does not send data because the project does not include a backend.