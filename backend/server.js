const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
require('./connection');
const server = http.createServer(app);
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET);
const {Server} = require('socket.io');
const io = new Server(server, {
    cors: '*',
    method: '*'
});

const User = require('./models/User');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const imageRoutes = require('./routes/imageRoutes');

app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/images', imageRoutes);
//paypal
// app.get('/a[i/keys/paypal', (req, res) => {
//     res.send(process.env.PAYPAL_CLIENT_ID || 'sb')
// });

app.post('/create-payment', async(req, res)=> {
    const {amount} = req.body;
    console.log(amount);
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
        payment_method_types: ['card']
      });
      res.status(200).json(paymentIntent)
    } catch (e) {
      console.log("dwdwdwd", e.message);
      res.status(400).json(e.message);
     }
  })

server.listen(8080, ()=> {
    console.log('server running on', 8080)
});