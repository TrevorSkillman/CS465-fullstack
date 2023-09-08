
const packageInfo = require('../../package.json');

const contact = (req, res) => {
    pageTitle = packageInfo.description + ' - Contact';
    res.render('contact', {title: pageTitle});
};

module.exports = {
    contact
}