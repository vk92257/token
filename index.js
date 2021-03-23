const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config({ path: __dirname + '/config.env' });
app.get('/app/v1/token', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'hit the url',
  });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('app is running');
});
console.log(process.env);
console.log(process.env.PORT);
