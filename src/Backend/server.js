import express from 'express';
import bcrypt from 'bcrypt';
import mysql from 'mysql';

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

// Database connection setup
const connection = mysql.createConnection({
  host: 'localhost',    // Replace with your DB host
  user: 'root',         // Replace with your DB username
  password: 'risper',         // Replace with your DB password
  database: 'reshare', // Replace with your database name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1); // Exit if DB connection fails
  }
  console.log('Connected to the database.');
});

// Registration route
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const checkQuery = 'SELECT username FROM registration WHERE username = ?';
    connection.query(checkQuery, [username], (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error.' });
      }

      if (results.length > 0) {
        return res.status(409).json({ message: 'User already exists.' });
      }

      const insertQuery = 'INSERT INTO registration (username, email, password) VALUES (?, ?, ?)';
      connection.query(insertQuery, [username, email, hashedPassword], (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: 'Server error.' });
        }
        res.status(201).json({ message: 'User registered successfully!' });
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error.' });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
