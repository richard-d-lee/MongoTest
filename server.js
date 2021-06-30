const express = require('express');
const mongoose = require('mongoose')
const app = express();
const PORT = process.env.PORT || 3020;
const User = mongoose.model('user', { name: String });

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/test',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
);

app.post('/test', (req, res) => {
  const kitty = new User({ name: 'Zildjian' });
  kitty.save().then((err) => console.log(err));
  res.send("Saved!!!!")
})

app.use(express.static('./client/dist')); // Host your dist folder up to the server
app.use(express.json()); // Alternative to BodyParser

// Listening for requests on the PORT
app.listen(PORT, () => {
    console.log('Serving up now at '+ JSON.stringify(PORT))
});