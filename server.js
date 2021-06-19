const express = require('express') 
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();
var cors = require('cors');
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(cors());
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


app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

require("../app/router/member.router")(app); 

http.createServer(app).listen(80, () => console.log('Running on http://localhost:${port}'));
