const config = require('../../config/config');
const portfolioData = require('../../data/portfolio');

const homeController = {
  getHome: (req, res) => {
    res.render('pages/home', {
      title: config.siteName,
      description: config.siteDescription,
      data: portfolioData,
      portfolioData: portfolioData, // Add portfolioData for consistent header/footer
      currentPage: 'home'
    });
  },

  getSection: (section) => {
    return (req, res) => {
      res.render('pages/section', {
        title: `${section.charAt(0).toUpperCase() + section.slice(1)} - ${config.siteName}`,
        description: config.siteDescription,
        section: section,
        data: portfolioData[section] || {},
        portfolioData: portfolioData, // Add full portfolio data for header/footer
        currentPage: section
      });
    };
  }
};

module.exports = homeController;