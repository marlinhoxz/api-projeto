const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/api', (req, res) => {
    res.json([
        { 
            id: 0, 
            name: 'Crossout', 
            image: '/crossoutgame.jpg',  
            installed: true,
            trofeusObtidos: 20,
            trofeusTotais: 40
        },
        { 
            id: 1, 
            name: 'Diablo Immortal', 
            image: '/diablo.jpg', 
            installed: true,
            trofeusObtidos: 15,
            trofeusTotais: 50 
        },
        {
            id: 2,
            name: 'Enlisted',
            image: '/enlistedgame.jpg',
            installed: true,
            trofeusObtidos: 50,
            trofeusTotais: 100
        },
        {
            id: 3,
            name: 'Fall Guys',
            image: '/fallguygame.jpg',
            installed: true,
            trofeusObtidos: 10,
            trofeusTotais: 30
        },
        {
            id: 4,
            name: 'Halo Infinite',
            image: '/haloinfinitgame.jpg',
            installed: true,
            trofeusObtidos: 25,
            trofeusTotais: 25
        },
        {
            id: 5,
            name: 'Hero Wars: Dominion Era',
            image: '/herodamaingame.jpg',
            installed: true,
            trofeusObtidos: 30,
            trofeusTotais: 60
        },
        {
            id: 6,
            name: 'Marvel Rivals',
            image: '/marvelrivalgame.jpg',
            installed: true,
            trofeusObtidos: 50,
            trofeusTotais: 50
        },
        {
            id: 7,
            name: 'Project Entropy',
            image: '/projectenjoygame.jpg',
            installed: true,
            trofeusObtidos: 15,
            trofeusTotais: 40
        }, {
            id: 8,
            name: 'PUBG: BATTLEGROUNDS',
            image: '/pubggame.jpg',
            installed: true,
            trofeusObtidos: 20,
            trofeusTotais: 40
        },
        {
            id: 9,
            name: 'War Thunder',
            image: '/wadgame.jpg',
            installed: false,
            trofeusObtidos: 0,
            trofeusTotais: 120
        }, 
        {
            id: 10,
            name: 'World of Warships',
            image: '/wordofshipgame.jpg',
            installed: false,
            trofeusObtidos: 0,
            trofeusTotais: 100
        },
        {
            id: 11,
            name: 'World of Tanks',
            image: '/worldankgame.jpg',
            installed: false,
            trofeusObtidos: 0,
            trofeusTotais: 80
        }
    ]);
});

app.listen(3000, () => console.log("Rodando na porta 3000"));

module.exports = app;