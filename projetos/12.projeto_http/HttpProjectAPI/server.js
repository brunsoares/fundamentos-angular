const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { USERS_LIST_BD } = require('./utils/users-list-bd');
const { generateToken, validateToken } = require('./utils/jwt-manager');
const { authenticateToken } = require('./middlewares/authenticate-token');

const app = express();
const PORT = 3000;

// Middleware para analisar o corpo das requisições
app.use(bodyParser.json());

// Usar o middleware cors para permitir todas as origens
app.use(cors());

app.post('/login', (req, res) => {
	const { username, password } = req.body;
	const userFound = USERS_LIST_BD.find(
		(user) => user.username === username && user.password === password
	);

	if (!userFound) {
		return res.status(401).json({ message: 'Usuário ou senha inválidos' });
	}
	const token = generateToken(username);
	return res.status(200).json({ token });
});

app.post('/validate-token', authenticateToken, (req, res) => {
	res.status(200).json({ message: 'Token válido' });
});

app.listen(PORT, () => {
	console.log(`O Servidor está rodando no http://localhost:${PORT}`);
});
