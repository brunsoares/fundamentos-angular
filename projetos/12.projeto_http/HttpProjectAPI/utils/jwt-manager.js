const jwt = require('jsonwebtoken');
const SECRET_KEY = 'secretKeyJwt';

const generateToken = (username) => {
	return jwt.sign({ username }, SECRET_KEY, { expiresIn: 300 });
};

const validateToken = (token) => {
	try {
		jwt.verify(token, SECRET_KEY);
		return true;
	} catch (error) {
		return false;
	}
};

module.exports = { generateToken, validateToken };
