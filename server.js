const express = require('express');
const mongoose = require('mongoose')
const app = express();
const PORT = process.env.PORT || 3020;
const Cat = mongoose.model('Cat', { name: String });

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
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

app.use(express.static('./client/dist')); // Host your dist folder up to the server
app.use(express.json()); // Alternative to BodyParser

// If you had to handle requests on the server side, this is where that would occur
app.get('/products/:id', (req, res) => {
		// Handle the request
		// -- Could make DB queries here
		// Send back O-K
		res.status(200).send('The server is taking requests to the products/:id endpoint');
});

// Listening for requests on the PORT
app.listen(PORT, () => {
    console.log('Serving up now at '+ JSON.stringify(PORT))
});