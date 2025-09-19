const express = require('express');
const path = require('path');
const config = require('./config/config');

const app = express();
const PORT = config.port || 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const routes = require('./src/routes');
app.use('/', routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('pages/error', { 
    title: 'Error',
    message: 'Something went wrong!' 
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).render('pages/error', { 
    title: 'Page Not Found',
    message: 'The page you are looking for does not exist.' 
  });
});

app.listen(PORT, () => {
  console.log(`Portfolio website running on http://localhost:${PORT}`);
});

module.exports = app;