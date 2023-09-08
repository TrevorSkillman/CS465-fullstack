
const packageInfo = require('../../package.json')

const rooms = (req, res) => {
    pageTitle = packageInfo.description + " - Rooms";
    res.render("rooms", { title: pageTitle });
};

module.exports = {
    rooms
}