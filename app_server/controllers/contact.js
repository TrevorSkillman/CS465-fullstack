const fs = require('fs');
const contactTravlr = JSON.parse(fs.readFileSync('./data/contactInfo.json', 'utf8'));

const packageInfo = require('../../package.json');

const contact = (req, res) => {
    pageTitle = packageInfo.description + ' - Contact';
    res.render('contact', {title: pageTitle, contactTravlr});
};

module.exports = {
    contact
}