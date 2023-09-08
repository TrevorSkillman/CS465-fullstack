
const packageInfo = require('../../package.json');

const news = (req, res) => {
    pageTitle = packageInfo.description + ' - News';
    res.render('news', {title: pageTitle});
};

module.exports = {
    news
}