import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';

const app = express();

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse JSON request bodies

// MySQL Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'risper',
  database: 'Reshare',
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    process.exit(1); // Exit the process if connection fails
  }
  console.log('Connected to MySQL!');

  // Ensure the database and table exist with proper unique constraints
  const setupQuery = `
    CREATE TABLE IF NOT EXISTS registration (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(50) NOT NULL UNIQUE,  -- Ensure username is unique
      email VARCHAR(100) NOT NULL,           -- Allow duplicate emails
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  connection.query(setupQuery, (err) => {
    if (err) {
      console.error('Error creating table:', err.message);
      process.exit(1);
    }
    console.log('Table "registration" is ready!');
  });
});

// Registration Route
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  // Input validation
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // First, check if the username already exists
  const checkUsernameQuery = `SELECT * FROM registration WHERE username = ?`;
  connection.query(checkUsernameQuery, [username], (err, results) => {
    if (err) {
      console.error('Error checking username:', err.message);
      return res.status(500).json({ message: 'Error checking username.' });
    }

    if (results.length > 0) {
      return res.status(409).json({ message: 'Username already exists.' });
    }

    // Now check if the email-password combination already exists
    const checkEmailPasswordQuery = `SELECT * FROM registration WHERE email = ? AND password = ?`;
    connection.query(checkEmailPasswordQuery, [email, password], (err, results) => {
      if (err) {
        console.error('Error checking email-password:', err.message);
        return res.status(500).json({ message: 'Error checking email-password.' });
      }

      if (results.length > 0) {
        return res.status(409).json({ message: 'This email and password combination already exists.' });
      }

      // If both checks pass, insert the new user
      const insertQuery = `INSERT INTO registration (username, email, password) VALUES (?, ?, ?)`;
      connection.query(insertQuery, [username, email, password], (err) => {
        if (err) {
          console.error('Error inserting data:', err.message);
          return res.status(500).json({ message: 'Error saving user data.' });
        }
        res.status(201).json({ message: 'User registered successfully!' });
      });
    });
  });
});

// Fallback for undefined routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found.' });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
