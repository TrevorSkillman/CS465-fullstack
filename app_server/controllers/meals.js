const fs = require('fs');
const mealChoice = JSON.parse(fs.readFileSync('./data/mealChoice.json', 'utf8'));


const packageInfo = require('../../package.json');

const meals = (req, res) => {
    pageTitle = packageInfo.description + ' - Meals';
    res.render('meals', {title: pageTitle, mealChoice});
};

module.exports = {
    meals
}