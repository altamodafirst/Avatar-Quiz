const db = require('./Avatar/server/db')
const app = require('./Avatar/server/index');

const port = process.env.PORT || 3000;


db.sync()  // sync our database
  .then(function(){
    console.log('db synced')
    app.listen(port) // then start listening with our express server once we have synced
  })