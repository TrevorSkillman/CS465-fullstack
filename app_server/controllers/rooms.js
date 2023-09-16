
const fs = require('fs');
const roomChoice = JSON.parse(fs.readFileSync('./data/roomChoice.json', 'utf8'));

const packageInfo = require('../../package.json');

const rooms = (req, res) => {
    pageTitle = packageInfo.description + " - Rooms";
    res.render("rooms", { title: pageTitle, roomChoice});
};

module.exports = {
    rooms
}