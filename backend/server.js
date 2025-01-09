const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "restaurant",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

// Register Route
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 8, (err, hash) => {
    if (err) return res.status(500).json({ error: err });
    const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
    db.query(sql, [username, hash], (error, result) => {
      if (error) return res.status(500).json({ error });
      res.status(200).json({ message: "User registered successfully!" });
    });
  });
});

// Login Route
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT * FROM users WHERE username = ?";
  db.query(sql, [username], (error, results) => {
    if (error || results.length === 0) return res.status(401).json({ message: "User not found" });
    bcrypt.compare(password, results[0].password, (err, result) => {
      if (result) {
        const token = jwt.sign({ id: results[0].id }, "secretkey", { expiresIn: "1h" });
        res.json({ message: "Login successful", token });
      } else {
        res.status(401).json({ message: "Invalid password" });
      }
    });
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
