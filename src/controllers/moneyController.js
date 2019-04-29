const CONNECTION = require('./../app/connection');

function getInfo(req, res, next) {
    CONNECTION.query('SELECT * FROM CoinType;',
        function(err, results) {
            if (err) {
                throw err;
            }

            res.json(results);
        }
    );
}

module.exports = {
    getInfo: getInfo
};