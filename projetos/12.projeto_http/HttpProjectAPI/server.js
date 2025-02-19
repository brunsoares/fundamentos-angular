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

app.put('/update-user', authenticateToken, (req, res) => {
	if (!req.body.name)
		return res.status(400).json({ message: 'O nome é obrigatório' });

	if (!req.body.email)
		return res.status(400).json({ message: 'O email é obrigatório' });

	if (!req.body.username)
		return res.status(400).json({ message: 'O username é obrigatório' });

	if (!req.body.password)
		return res.status(400).json({ message: 'A senha é obrigatória' });

	const userIndex = USERS_LIST_BD.findIndex(
		(user) => user.username === req.username
	);

	if (userIndex !== -1) {
		USERS_LIST_BD[userIndex] = {
			...USERS_LIST_BD[userIndex],
			name: req.body.name,
			email: req.body.email,
			username: req.body.username,
			password: req.body.password,
		};
		return res.status(200).json({
			message: 'Usuário atualizado com sucesso',
			token: generateToken(req.body.username),
		});
	} else {
		return res.status(403).json({ message: 'Usuário não encontrado' });
	}
});

app.post('/create-user', authenticateToken, (req, res) => {
	if (!req.body.name)
		return res.status(400).json({ message: 'O nome é obrigatório' });

	if (!req.body.email)
		return res.status(400).json({ message: 'O email é obrigatório' });

	if (!req.body.username)
		return res.status(400).json({ message: 'O username é obrigatório' });

	if (!req.body.password)
		return res.status(400).json({ message: 'A senha é obrigatória' });

	const userFound = USERS_LIST_BD.find(
		(user) => user.username === req.body.username
	);

	if (userFound)
		return res.status(409).json({ message: 'Usuário já cadastrado' });

	USERS_LIST_BD.push({
		name: req.body.name,
		email: req.body.email,
		username: req.body.username,
		password: req.body.password,
	});

	return res.status(201).json({
		message: 'Usuário cadastrado com sucesso',
		token: generateToken(req.body.username),
	});
});

app.post('/validate-token', authenticateToken, (req, res) => {
	res.status(200).json({ message: 'Token válido' });
});

app.listen(PORT, () => {
	console.log(`O Servidor está rodando no http://localhost:${PORT}`);
});
