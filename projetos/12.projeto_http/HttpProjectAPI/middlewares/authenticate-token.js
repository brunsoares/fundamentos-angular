const { validateToken } = require('../utils/jwt-manager');

const authenticateToken = (req, res, next) => {
	const authHeader = req.headers.authorization;
	const token = authHeader && authHeader.split(' ')[1];

	if (!token) {
		return res.status(401).json({ message: 'Token não fornecido' });
	}

	const tokenDecoded = validateToken(token);
	if (!tokenDecoded) {
		return res.status(403).json({ message: 'Token inválido' });
	}

	req.username = tokenDecoded.username;
	next();
};

module.exports = { authenticateToken };
