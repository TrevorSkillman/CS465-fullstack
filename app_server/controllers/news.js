
const packageInfo = require('../../package.json');

const news = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - News';
    res.render('news', {title: pageTitle});
};

module.exports = {
    news
}