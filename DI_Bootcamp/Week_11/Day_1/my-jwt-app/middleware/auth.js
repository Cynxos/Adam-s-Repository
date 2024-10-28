const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
        jwt.verify(token, 'secret_key', (err, user) => {
            if (err) {
                return res.status(403).send('Invalid Token');
            }
            req.user = user;
            next();
        });
    } else {
        res.status(401).send('Token Missing');
    }
};

module.exports = authenticateJWT;
