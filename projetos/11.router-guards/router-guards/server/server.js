const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const PORT = 3000;
const SECRET_KEY = "CHAVE_SECRETA_CURSO_ANGULAR";
const TOKEN_EXPIRATION = 300;

// Lista de usuários estática
const users = [
  {
    username: "user",
    password: "user",
    scopes: ["dashboard", "pagamentos"],
    walletStatus: "active",
  },
  {
    username: "admin",
    password: "admin",
    scopes: ["dashboard", "pagamentos", "admin"],
    walletStatus: "blocked",
  },
];

// Middleware para analisar o corpo das requisições
app.use(bodyParser.json());

// Usar o middleware cors para permitir todas as origens
app.use(cors());

// Endpoint de login para autenticação
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { username, scopes: user.scopes, walletStatus: user.walletStatus },
    SECRET_KEY,
    {
      expiresIn: TOKEN_EXPIRATION,
    }
  );

  res.json({ token });
});

// Middleware para verificar o token JWT
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    // Erro de "Não Autorizado"
    return res.sendStatus(401);
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      // Erro "Forbidden", o servidor entendeu a requisição mas não tem permissão
      return res.sendStatus(403);
    }

    req.user = user;
    next();
  });
}

// Endpoint para verificar se o token é válido
app.get("/verify-token", authenticateToken, (req, res) => {
  res.json({ valid: true, user: req.user });
});

// Endpoint para obter os dados do dashboard - Incidentes do dia
app.get("/general-info/incidents-day", authenticateToken, (req, res) => {
  res.json({ incidents: 0 });
});

// Endpoint para obter os dados do dashboard - Pagamentos pendentes
app.get("/general-info/pendent-payment", authenticateToken, (req, res) => {
  res.json({ pendentPayments: 3 });
});

// Endpoint para obter os dados do dashboard - Contas criadas
app.get("/general-info/accounts-create", authenticateToken, (req, res) => {
  res.json({ accountsCreate: 100 });
});

// Endpoint para obter os dados do dashboard - Usuários ativos
app.get("/general-info/active-users", authenticateToken, (req, res) => {
  res.json({ activeUsers: 10000 });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
