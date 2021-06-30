const express = require('express');
const mongoose = require('mongoose')
const app = express();
const PORT = process.env.PORT || 3020;
const User = mongoose.model('User', { name: String });

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
  console.log(req)
  const kitty = new User({ name: 'Zildjian' });
  kitty.save().then(() => console.log('meow'));
  res.send("Saved!!!!")
})

app.use(express.static('./client/dist'));
app.use(express.json());

// Listening for requests on the PORT
app.listen(PORT, () => {
    console.log('Serving up now at '+ JSON.stringify(PORT))
});