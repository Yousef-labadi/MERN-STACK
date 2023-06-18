// jokes.model.js
const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
  jokeText: {
    type: String,
    required: true,
  },
});

const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;
