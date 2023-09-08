
const packageInfo = require('../../package.json');

const meals = (req, res) => {
    pageTitle = packageInfo.description + ' - Meals';
    res.render('meals', {title: pageTitle});
};

module.exports = {
    meals
}