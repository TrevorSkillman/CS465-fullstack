const fs = require('fs');
const aboutPage = JSON.parse(fs.readFileSync('./data/aboutInfo.json', 'utf8'));
const packageInfo = require('../../package.json');

const about = (req, res) => {
    pageTitle = packageInfo.description + ' - About';
    res.render('about', {title: pageTitle, aboutPage});
};

module.exports = {
    about
}