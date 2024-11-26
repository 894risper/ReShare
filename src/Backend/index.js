import mysql from "mysql2";

// Create a connection to the MySQL server
const connection = mysql.createConnection({
  host: "localhost", // Replace with your MySQL host (e.g., 127.0.0.1)
  user: "root",      // Replace with your MySQL username
  password: "risper", // Replace with your MySQL password
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL!");

  // Create the database
  const createDatabaseQuery = "CREATE DATABASE IF NOT EXISTS Reshare";
  connection.query(createDatabaseQuery, (err, results) => {
    if (err) {
      console.error("Error creating database:", err);
      return;
    }
    console.log("Database 'Reshare' created successfully!");
  });

  // Close the connection
  connection.end();
});
