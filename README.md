# Personal Portfolio Website

A modern, responsive portfolio website built with Node.js, Express, and EJS templating.

## Features

- 🎨 Modern, responsive design with gradient hero section
- 📱 Mobile-friendly navigation with hamburger menu
- 🚀 Fast and lightweight
- 📝 Easy content management through data files
- 🔧 Modular and scalable architecture
- 🎯 SEO-friendly structure

## Sections

- **Home**: Landing page with overview of all sections
- **About**: Personal information and interests
- **Education**: Academic background and qualifications
- **Experience**: Professional work history
- **Skills**: Technical skills organized by categories
- **Portfolio**: Project showcase with links and technologies
- **Extracurricular**: Activities and contributions outside work

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## Project Structure

```
about-me/
├── server.js                 # Main server file
├── package.json             # Dependencies and scripts
├── config/
│   └── config.js           # Application configuration
├── src/
│   ├── routes/
│   │   └── index.js        # Route definitions
│   ├── controllers/
│   │   └── homeController.js # Route handlers
│   ├── middleware/         # Custom middleware (future use)
│   └── utils/             # Utility functions (future use)
├── views/
│   ├── pages/
│   │   ├── home.ejs       # Homepage template
│   │   ├── section.ejs    # Generic section template
│   │   └── error.ejs      # Error page template
│   └── partials/
│       ├── header.ejs     # Navigation header
│       └── footer.ejs     # Footer with contact info
├── public/
│   ├── css/
│   │   └── main.css       # Styles
│   ├── js/
│   │   └── main.js        # Client-side JavaScript
│   └── images/            # Static images (add your own)
└── data/
    └── portfolio.js       # Content data structure
```

## Customization

### Update Personal Information

Edit the `data/portfolio.js` file to update:
- Personal details (name, title, bio)
- Contact information
- Social media links
- Education history
- Work experience
- Skills and technologies
- Project portfolio
- Extracurricular activities

### Styling

- Main styles: `public/css/main.css`
- Color scheme: Update CSS custom properties
- Layout: Modify grid and flexbox properties
- Responsive breakpoints: Adjust media queries

### Adding New Sections

1. Add route in `src/routes/index.js`
2. Add data structure in `data/portfolio.js`
3. Update navigation in `views/partials/header.ejs`
4. Optionally create custom template in `views/pages/`

## Deployment

### Local Development
```bash
npm start
```

### Production
1. Set environment variables:
   ```bash
   export NODE_ENV=production
   export PORT=3000
   ```

2. Start the application:
   ```bash
   npm start
   ```

### Hosting Platforms

This project is ready to deploy on:
- **Vercel**: Add `vercel.json` configuration
- **Netlify**: Works with static build
- **Heroku**: Ready to deploy with `package.json`
- **Railway**: Direct deployment support
- **DigitalOcean App Platform**: Ready to deploy

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit your changes: `git commit -am 'Add some feature'`
5. Push to the branch: `git push origin feature-name`
6. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.