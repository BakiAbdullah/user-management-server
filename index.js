const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const users = [
  { id: 1, name: "sabana", email: "sabana@gmail.com" },
  { id: 2, name: "sabnoor", email: "sabnoor@gmail.com" },
  { id: 3, name: "sabila", email: "sabila@gmail.com" },
];

// use the Cors middleware otherwise data will not fetch
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("User Management server is Running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log('post api hitting')
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});
