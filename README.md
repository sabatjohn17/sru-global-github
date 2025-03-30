# SRU Global Logistics

A modern, responsive website for SRU Global Logistics, a company specializing in logistics, transport, and shipping services.

## Overview

This project is built with HTML, CSS (using Tailwind CSS), and vanilla JavaScript to create a fast, responsive, and user-friendly website for a logistics company.

## Features

- Responsive design that works on all devices
- Testimonial carousel with auto-slide functionality
- Mobile-friendly navigation menu
- Back-to-top button for better user experience
- Modern UI with Tailwind CSS

## Tech Stack

- HTML5
- CSS3 with Tailwind CSS v4.0
- Vanilla JavaScript
- NPM for package management

## Project Structure

```
sru-global/
├── css/
│   ├── input.css     # Tailwind input file
│   └── styles.css    # Compiled CSS
├── js/
│   └── main.js       # Main JavaScript file
├── package.json      # Project dependencies
├── package-lock.json # Dependency lock file
└── index.html        # Main HTML file
```

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- NPM (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone [repository-url]
   cd sru-global
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server with hot-reloading:

```bash
npm run dev
```

This will watch for changes in your Tailwind CSS input file and automatically compile it to the output CSS file.

### Building for Production

To build the project for production:

```bash
npm run build
```

This will minify the CSS for optimal performance.

## JavaScript Features

The main.js file includes several interactive features:

- Testimonial carousel with automatic sliding
- Mobile menu functionality
- Back-to-top button
- Dynamic copyright year

## Customization

### Tailwind CSS

You can customize the Tailwind configuration by modifying the `tailwind.config.js` file.

### Colors

The project uses CSS variables for consistent theming. The primary color can be modified in the CSS.

## Browser Support

The website is compatible with:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Author

Ajit Sabat

## License

This project is licensed under the MIT License - see the LICENSE file for details.
