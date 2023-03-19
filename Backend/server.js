import { User } from './app/models/db.js';
import express from 'express';
//const express = require("express");
const app = express();
const port = 3000;

// Initialize publication server
app.get("/", async (req, res) =>  {
  const users = await User.findAll();
  console.log("users", users);

  const usersDisplay = users.map((user) => {
    return `${user.dataValues.pseudo} - ${user.dataValues.email}`;
  });

  res.send(usersDisplay.join('\n\n\n'));
});

app.listen(port, () => {
  console.log("Server listening on :", port);
});

