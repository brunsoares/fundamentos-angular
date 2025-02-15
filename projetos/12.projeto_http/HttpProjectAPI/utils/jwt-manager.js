const jwt = require('jsonwebtoken');
const SECRET_KEY = 'secretKeyJwt';

const generateToken = (username) => {
	return jwt.sign({ username }, SECRET_KEY, { expiresIn: 300 });
};

const validateToken = (token) => {
	try {
		return jwt.verify(token, SECRET_KEY);
	} catch (error) {
		return undefined;
	}
};

module.exports = { generateToken, validateToken };
