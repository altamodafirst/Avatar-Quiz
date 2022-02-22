const path = require('path');
const express = require('express');
const app = express();

// app.listen(1337, () => {
//   console.log('listening port 1337')
// })

app.use(express.static(path.join(__dirname, './path/to/your/static/assets')))

app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, './path/to/your/index.html'));
});