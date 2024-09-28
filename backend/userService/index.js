const express = require('express');
require('dotenv').config();
const app = express();

app.use(express.json());  // Add this to parse incoming JSON data

// Import routes
const helloRoutes = require('./routes/hello.route');
const userRoutes = require('./routes/user.route');

// Use routes
app.use('/api/v1/', helloRoutes);
app.use('/api/v1/user', userRoutes);

// Mock data for demo purposes
const person = [
  { id: "1", name: "Harshita", email: "harshitarupani711@gmail.com" },
  { id: "2", name: "Honey", email: "harshitarupani711@gmail.com" },
  { id: "3", name: "HrHr", email: "harshitarupani711@gmail.com" }
];

const abt = [
  { Height: "5.6" },
  { Height: "6" },
  { Height: "9" }
];

// Example GET routes for other purposes
app.get('/allUser', (req, res) => {
  res.send(person);
});

app.get('/about', (req, res) => {
  res.send(abt);
});

app.get('/allUser/:name', (req, res) => {
  const name = req.params.name;
  const foundUser = person.find(p => p.name === name);
  
  if (foundUser) {
    res.send(foundUser);
  } else {
    res.status(404).send("Person not Found");
  }
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server started at port ${process.env.PORT}`);
});
