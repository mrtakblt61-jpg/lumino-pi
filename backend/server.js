const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// 📁 FRONTEND SERVE (HTML'i yayınlar)
app.use(express.static(path.join(__dirname, "../frontend")));

// 🌐 ANA SAYFA (index.html açılır)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// 📦 İÇERİK
app.get("/content", (req, res) => {
  res.json([
    { id: 1, title: "Free CNC Notları", premium: false },
    { id: 2, title: "Abkant Gizli Parametreler", premium: true }
  ]);
});

// 💳 UNLOCK
app.post("/unlock", (req, res) => {
  console.log("unlock isteği:", req.body);
  res.json({ success: true });
});

// 🔐 LOGIN
app.post("/login", (req, res) => {
  const { uid, username } = req.body;

  console.log("LOGIN GELDİ");
  console.log("UID:", uid);
  console.log("USER:", username);

  res.json({ success: true });
});

// 🚀 SERVER
app.listen(process.env.PORT || 3000, () => {
  console.log("API çalışıyor");
});