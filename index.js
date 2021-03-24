const express = require('express');
const dotenv = require('dotenv');
const app = express();
// dotenv.config({ path: __dirname + '/config.env' });
app.get('/', (req, res) => {
  // res.status(200).json({
  //   status: 'success',
  //   message: 'hit the url',
  // });
  res.status(200).send('hello world');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('app is running');
});
// console.log(process.env);
// console.log(process.env.PORT);
