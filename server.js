const express = require('express');
const mongoose = require('mongoose')
const app = express();
const PORT = process.env.PORT || 3020;
const Cat = mongoose.model('Cat', { name: String });

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/test',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
);

app.get('/test', (req, res) => {
  const kitty = new Cat({ name: 'Zildjian' });
  kitty.save().then(() => console.log('meow'));
  res.send("Saved!!!!")
})

app.use(express.static('./client/dist'));
app.use(express.json());

// Listening for requests on the PORT
app.listen(PORT, () => {
    console.log('Serving up now at '+ JSON.stringify(PORT))
});