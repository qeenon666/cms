const express = require('express') 
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const db = require("../app/models"); 
db.mongoose.connect(db.url, {useNewUrlParser:true, useUnifiedTopology: true})
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
  
require("../app/router/member.router")(app); 

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});


http.createServer(app).listen(80, () => console.log('Running on http://localhost:${port}'));
