// Create web server
// Create an endpoint for POST /comments
// Create a new comment and save it to the database
// Return the created comment
// Create an endpoint for GET /comments
// Retrieve all comments from the database
// Return all comments

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true });

const Comment = mongoose.model('Comment', {