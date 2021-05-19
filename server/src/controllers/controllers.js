const data = require("../mockData/cards.json");

const dashboard = (req, res, next) => {
    res.status(200).json(data)
};

module.exports.dashboard = dashboard;