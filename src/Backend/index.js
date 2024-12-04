import express from "express";
import cors from "cors"
import mysql from "mysql2"
import bcrypt from "bcrypt"

const app= express();

//MiddleWare
app.use(cors());
app.use(express.json());

//mysql connection

const connection = mysql.createConnection({
  host:"localhost",

  user:"root",
  password:"risper",
  database:"reshare"

});
// connection to the database
connection.connect((err)=>{
  if(err){
    console.error("Error connecting to mysql:",err.message);
    process.exit(1);

  }
  console.log("Connected to MySQL");
  // creating the table
  const createTableQuery=`
  CREATE TABLE IF NOT EXISTS registration(
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR (255) NOT NULL,
  email VARCHAR (255) NOT NULL,
  password VARCHAR (255) NOT NULL
  );
  
  `;
  connection.query(createTableQuery,(err,results)=>{
    if(err){
      console.error("error creating thre table",err.message);
    }else{
      console.log("table 'registration' is ready")
    }
  })
});

// route to handle user registration
app.post("/register",(req,res)=>{
  const {username,email,password}=req.body;
   
  // validate if all fields are provided

  if(!username || !email || !password){
  return res.status(400).json({message:"all fields are required"});
};

//hash password before storing it
bcrypt.hash(password,10,(err,hashedPassword)=>{
  if(err){
    console.error("error hashiing the password",err.message);
    res.status(500).json({message:"error registerinh user"});
  };
const query=` INSERT INTO registration (username ,email,password) VALUES (?, ?, ?)`;
connection.query(query,[username ,email,hashedPassword],(err,results)=>{
  if(err){
    console.error("error inserting user:",err.message);
    return res.status(500).json({message:"error registering user"});
  }
  res.status(201).json({ message: "User registered successfully" });

});
});
});


// simple route to test the server
app.get("/",(req,res)=>{
  res.send("hello World server is running")
});

// start the server

const PORT =3000;
app.listen(PORT,()=>{
  console.log(`server is running on http://localhost:${PORT}`);
})