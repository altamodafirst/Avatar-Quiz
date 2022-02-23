const db = require('./db/database')
const app = require('../server/index');

const port = process.env.PORT || 3000;


db.sync()  // sync our database
  .then(function(){
    app.listen(port) // then start listening with our express server once we have synced
  })