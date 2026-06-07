const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/api", (req, res) => {
  res.json([
    {
      id: 0,
      name: "GTA V",
      image: "https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg",
      installed: true,
      trofeusObtidos: 20,
      trofeusTotais: 40,
    },
    {
      id: 1,
      name: "Resident Evil 4",
      image: "https://cdn.akamai.steamstatic.com/steam/apps/2050650/header.jpg",
      installed: true,
      trofeusObtidos: 15,
      trofeusTotais: 50,
    },
    {
      id: 2,
      name: "Days Gone",
      image: "https://cdn.akamai.steamstatic.com/steam/apps/1259420/header.jpg",
      installed: true,
      trofeusObtidos: 50,
      trofeusTotais: 100,
    },
    {
      id: 3,
      name: "Cyberpunk 2077",
      image: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg",
      installed: true,
      trofeusObtidos: 10,
      trofeusTotais: 30,
    },
    {
      id: 4,
      name: "Red Dead Redemption 2",
      image: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg",
      installed: true,
      trofeusObtidos: 25,
      trofeusTotais: 25,
    },
    {
      id: 5,
      name: "God of War",
      image: "https://cdn.akamai.steamstatic.com/steam/apps/1593500/header.jpg",
      installed: true,
      trofeusObtidos: 30,
      trofeusTotais: 60,
    },
    {
      id: 6,
      name: "Elden Ring",
      image: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg",
      installed: true,
      trofeusObtidos: 50,
      trofeusTotais: 50,
    },
    {
      id: 7,
      name: "The Witcher 3",
      image: "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg",
      installed: true,
      trofeusObtidos: 15,
      trofeusTotais: 40,
    },
    {
      id: 8,
      name: "Spider-Man",
      image: "https://cdn.akamai.steamstatic.com/steam/apps/1817070/header.jpg",
      installed: true,
      trofeusObtidos: 20,
      trofeusTotais: 40,
    },
    {
      id: 9,
      name: "Hogwarts Legacy",
      image: "https://cdn.akamai.steamstatic.com/steam/apps/990080/header.jpg",
      installed: false,
      trofeusObtidos: 0,
      trofeusTotais: 120,
    },
    {
      id: 10,
      name: "The Last of Us",
      image: "https://cdn.akamai.steamstatic.com/steam/apps/1888930/header.jpg",
      installed: false,
      trofeusObtidos: 0,
      trofeusTotais: 100,
    },
    {
      id: 11,
      name: "Baldurs Gate 3",
      image: "https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg",
      installed: false,
      trofeusObtidos: 0,
      trofeusTotais: 80,
    },
  ]);
});

app.listen(3000, () => console.log("Rodando na porta 3000"));

module.exports = app;
