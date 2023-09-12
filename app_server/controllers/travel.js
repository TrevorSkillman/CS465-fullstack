
// Importing and intializing
const packageInfo = require('../../package.json');
// fs stands for file system that allows you to access the local file system on the browser
const fs = require('fs');
// the pars takes the string giving back an object.
const trips = JSON.parse(fs.readFileSync('./data/trips.json', "utf8"));

const travel = (req, res) => {
    pageTitle = packageInfo.description + ' - Travel';
    res.render('travel', {title: pageTitle, trips});
};

module.exports = {
    travel
}