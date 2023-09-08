
const packageInfo = require('../../package.json');

const about = (req, res) => {
    pageTitle = packageInfo.description + ' - About';
    res.render('about', {title: pageTitle});
};

module.exports = {
    about
}