
// Importing and intializing
const packageInfo = require('../../package.json');

const travel = (req, res) => {
    pageTitle = packageInfo.description + ' - Travel';
    res.render('travel', {title: pageTitle});
};

module.exports = {
    travel
}