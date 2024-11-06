const express = require("express");
const app = express();
let { book } = require("./models/book.model");
let { sequelize } = require("./lib/index");

app.use(express.json());

let bookData = [
  {
    title: 'The Silent Forest',
    genre: 'Mystery',
    author: 'Harper Lee',
    publication_year: 2015,
    publisher: 'Greenwood Press',
    pages: 320,
  },
  {
    title: 'Echoes of the Past',
    genre: 'Historical Fiction',
    author: 'Martha Kingsley',
    publication_year: 2018,
    publisher: 'Blue Horizon Publishers',
    pages: 400,
  },
  {
    title: 'Into the Abyss',
    genre: 'Adventure',
    author: 'James North',
    publication_year: 2020,
    publisher: 'Summit House',
    pages: 280,
  },
  {
    title: 'Whispers of the Wind',
    genre: 'Romance',
    author: 'Lily Evans',
    publication_year: 2019,
    publisher: 'Rosewood Publications',
    pages: 350,
  },
  {
    title: 'The Quantum Paradox',
    genre: 'Science Fiction',
    author: 'Nathan Reed',
    publication_year: 2021,
    publisher: 'Galactic Press',
    pages: 410,
  },
  {
    title: 'Mindful Living',
    genre: 'Self-Help',
    author: 'Sophia Blake',
    publication_year: 2017,
    publisher: 'LifeWorks',
    pages: 220,
  },
  {
    title: 'Beyond the Horizon',
    genre: 'Fantasy',
    author: 'Amelia Storm',
    publication_year: 2016,
    publisher: 'Phoenix Books',
    pages: 450,
  },
  {
    title: 'The Art of Coding',
    genre: 'Technology',
    author: 'Chris Andrews',
    publication_year: 2022,
    publisher: 'Tech Books International',
    pages: 380,
  },
  {
    title: 'Under the Northern Sky',
    genre: 'Thriller',
    author: 'Robert Gray',
    publication_year: 2018,
    publisher: 'Blackwood Publishing',
    pages: 290,
  },
  {
    title: 'The Secrets of the Ocean',
    genre: 'Non-Fiction',
    author: 'Lara Thompson',
    publication_year: 2020,
    publisher: 'Discovery Press',
    pages: 310,
  },
];

// Defining a route to seed the database
app.get("/seed_db", async (req, res) => {
  try{
    // syncs the database, recreating all tables as per models
    await sequelize.sync({ force: true }); // 'force: true' drops existing tables and recreates them
    
    // Bulk insert all data from bookData array into the book table
    await book.bulkCreate(bookData);

    res.status(200).json({ message: "Database seeding successful." });
  } catch(error){
    res.status(500).json({ message: "Error seeding the data", error: error.message });
  }
});

app.listen(3000, () => {
 console.log("Server is running on Port : 3000");
});