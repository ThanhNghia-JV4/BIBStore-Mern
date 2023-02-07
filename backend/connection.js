require('dotenv').config();
//ecomern-f 
//TFnHTB7Qxh
const mongoose = require('mongoose');

const connectionStr = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@cluster0.yswccyq.mongodb.net/ecomernf?retryWrites=true&w=majority`;

mongoose.connect(connectionStr, {useNewUrlparser: true})
.then(() => console.log('connected to mongodb'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
  console.log(err)
})