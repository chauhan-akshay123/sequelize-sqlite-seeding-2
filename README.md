# Express Sequelize Book Database Seeder

This repository provides a simple setup for seeding a SQLite database with dummy book data using Node.js, Express, and Sequelize. This project is designed for practicing database seeding and testing basic CRUD operations with a book dataset.

## Features

- **Node.js and Express**: Provides a REST API setup to interact with the book database.
- **Sequelize ORM**: Manages models and migrations, supporting SQLite as a lightweight, file-based database.
- **SQLite Database**: No server setup required; utilizes a local file-based database (`database.sqlite`).
- **Bulk Seeding**: A `/seed_db` route that seeds the database with sample book data.

## Project Structure

- **models/book.model.js**: Defines the `book` model to represent book data.
- **controllers/dataController.js**: Manages database interactions, including seeding and retrieving book data.
- **lib/index.js**: Sets up Sequelize with SQLite configuration.
- **bookSeeder.js**: Contains the logic to seed the database with predefined book data.

## Getting Started

### Prerequisites
- **Node.js** and **npm** installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/express-sequelize-book-seeder.git
   cd express-sequelize-book-seeder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the server:
   ```bash
   node index.js
   ```
   The server will start on `http://localhost:3000`.

### Usage

To seed the database with book data:
1. Start the server if it’s not already running.
2. Open a browser or API client (like Postman) and navigate to:
   ```
   http://localhost:3000/seed_db
   ```
3. The response should confirm successful database seeding.

### Sample Book Data

The seeding script includes an array of book data with fields:
- **title**: Title of the book
- **genre**: Book genre (e.g., Mystery, Romance, Science Fiction)
- **author**: Author’s name
- **publication_year**: Year the book was published
- **publisher**: Publisher’s name
- **pages**: Number of pages in the book
