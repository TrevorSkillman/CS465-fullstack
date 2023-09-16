const fs = require('fs');
const recentNews = JSON.parse(fs.readFileSync('./data/newsInfo.json', 'utf8')); // for the ads to the right of the news page
const vacationTips = JSON.parse(fs.readFileSync('./data/vacaTips.json', 'utf8')); // for the ads to the right of the news page
const kayakInfoArray = JSON.parse(fs.readFileSync('./data/kayakNews.json', 'utf8')); // Array for the news page as there are multiple json files for this page.
const kayakInfo = kayakInfoArray[0]; // created an array for the news page to load the kayak information correctly 

const packageInfo = require('../../package.json');

const news = (req, res) => {
    pageTitle = packageInfo.description + ' - News';
    res.render('news', {title: pageTitle, recentNews, vacationTips, kayakInfo});
};

module.exports = {
    news
}