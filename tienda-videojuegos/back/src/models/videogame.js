const videojuegos = [{
    id: 1,
    titulo: "Mario 64",
    año: 1996,
    precio: 59.99,
    pais: "Japón",
    publisher: "Nintendo",
    consola: "Nintendo 64",
    cover: "https://upload.wikimedia.org/wikipedia/en/6/6a/Super_Mario_64_box_cover.jpg"
},
{
    id: 2,
    titulo: "The Legend of Zelda: Ocarina of Time",
    año: 1998,
    precio: 59.99,
    pais: "Japón",
    publisher: "Nintendo",
    consola: "Nintendo 64",
    cover: "https://upload.wikimedia.org/wikipedia/en/5/57/The_Legend_of_Zelda_Ocarina_of_Time.jpg"
},
{
    id: 3,
    titulo: "Final Fantasy VII",
    año: 1997,
    precio: 49.99,
    pais: "Japón",
    publisher: "Square",
    consola: "PlayStation",
    cover: "https://upload.wikimedia.org/wikipedia/en/c/c2/Final_Fantasy_VII_Box_Art.jpg"
},
{
    id: 4,
    titulo: "Half-Life 2",
    año: 2004,
    precio: 39.99,
    pais: "Estados Unidos",
    publisher: "Valve",
    consola: "PC",
    cover: "https://upload.wikimedia.org/wikipedia/en/2/25/Half-Life_2_cover.jpg"
},
{
    id: 5,
    titulo: "Grand Theft Auto V",
    año: 2013,
    precio: 59.99,
    pais: "Reino Unido",
    publisher: "Rockstar Games",
    consola: "PlayStation 3",
    cover: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png"
},
{
    id: 6,
    titulo: "Red Dead Redemption 2",
    año: 2018,
    precio: 59.99,
    pais: "Estados Unidos",
    publisher: "Rockstar Games",
    consola: "PlayStation 4",
    cover: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg"
},
{
    id: 7,
    titulo: "The Witcher 3: Wild Hunt",
    año: 2015,
    precio: 39.99,
    pais: "Polonia",
    publisher: "CD Projekt Red",
    consola: "PlayStation 4",
    cover: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg"
},
{
    id: 8,
    titulo: "Minecraft",
    año: 2011,
    precio: 26.95,
    pais: "Suecia",
    publisher: "Mojang",
    consola: "PC",
    cover: "https://images.igdb.com/igdb/image/upload/t_cover_small/co8fu6.png"
},
{
    id: 9,
    titulo: "Dark Souls",
    año: 2011,
    precio: 39.99,
    pais: "Japón",
    publisher: "FromSoftware",
    consola: "PlayStation 3",
    cover: "https://upload.wikimedia.org/wikipedia/en/8/8d/Dark_Souls_Cover_Art.jpg"
},
{
    id: 10,
    titulo: "BioShock",
    año: 2007,
    precio: 19.99,
    pais: "Estados Unidos",
    publisher: "2K Games",
    consola: "Xbox 360",
    cover: "https://upload.wikimedia.org/wikipedia/en/6/6d/BioShock_cover.jpg"
},
{
    id: 11,
    titulo: "Portal 2",
    año: 2011,
    precio: 19.99,
    pais: "Estados Unidos",
    publisher: "Valve",
    consola: "PC",
    cover: "https://upload.wikimedia.org/wikipedia/en/f/f9/Portal2cover.jpg"
},
{
    id: 12,
    titulo: "Mass Effect 2",
    año: 2010,
    precio: 19.99,
    pais: "Canadá",
    publisher: "Electronic Arts",
    consola: "Xbox 360",
    cover: "https://upload.wikimedia.org/wikipedia/en/0/05/MassEffect2_cover.PNG"
},
{
    id: 13,
    titulo: "The Elder Scrolls V: Skyrim",
    año: 2011,
    precio: 39.99,
    pais: "Estados Unidos",
    publisher: "Bethesda Softworks",
    consola: "PC",
    cover: "https://upload.wikimedia.org/wikipedia/en/1/15/The_Elder_Scrolls_V_Skyrim_cover.png"
},
{
    id: 14,
    titulo: "God of War",
    año: 2018,
    precio: 39.99,
    pais: "Estados Unidos",
    publisher: "Sony Interactive Entertainment",
    consola: "PlayStation 4",
    cover: "https://www.metacritic.com/a/img/resize/3e192d068493d25dd7b03309b3245f337d68200e/catalog/provider/6/3/6-1-728084-13.jpg?auto=webp&fit=cover&height=132&width=88"
},
{
    id: 15,
    titulo: "Super Metroid",
    año: 1994,
    precio: 7.99,
    pais: "Japón",
    publisher: "Nintendo",
    consola: "SNES",
    cover: "https://images.igdb.com/igdb/image/upload/t_cover_small/co5osy.png"
},
{
    id: 16,
    titulo: "Street Fighter II",
    año: 1991,
    precio: 9.99,
    pais: "Japón",
    publisher: "Capcom",
    consola: "Arcade",
    cover: "https://images.igdb.com/igdb/image/upload/t_cover_small/co55et.png"
},
{
    id: 17,
    titulo: "Chrono Trigger",
    año: 1995,
    precio: 14.99,
    pais: "Japón",
    publisher: "Square",
    consola: "SNES",
    cover: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3plw.png"
},
{
    id: 18,
    titulo: "Metal Gear Solid",
    año: 1998,
    precio: 9.99,
    pais: "Japón",
    publisher: "Konami",
    consola: "PlayStation",
    cover: "https://images.igdb.com/igdb/image/upload/t_cover_small/co3dmw.png"
},
{
    id: 19,
    titulo: "Resident Evil 4",
    año: 2005,
    precio: 19.99,
    pais: "Japón",
    publisher: "Capcom",
    consola: "GameCube",
    cover: "https://images.igdb.com/igdb/image/upload/t_cover_small/co2wk8.png"
},
{
    id: 20,
    titulo: "World of Warcraft",
    año: 2004,
    precio: 14.99,
    pais: "Estados Unidos",
    publisher: "Blizzard Entertainment",
    consola: "PC",
    cover: "https://upload.wikimedia.org/wikipedia/en/6/65/World_of_Warcraft.png"
}]

export default videojuegos;