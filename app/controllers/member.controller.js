/*const db = require("../models");
const Member = db.member;
const Login = db.login; 
const secret = "member-json-secret-tokenkey";

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.create = (req, res) => {
  // Create Database
    const member = new Member({
    userid: req.body.userid,
    password: bcrypt.hashSync(req.body.password,8),
    name: req.body.name,
    email: req.body.email,
    phonenumber:req.body.phonenumber,
    access: "False",
    hours:0.0
  });

  // Save Database 
  Member.findOne({userid: req.body.userid}, (err, result) =>
  {
     if(err) 
     {
        res.status(500).send("500 Internal Server Error"); 
        return; 
     }
     if(!result) 
     {
      member
     .save(member)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
           });
        });
     }
     else {
        throw err; 
     }
  });
};


//Login
exports.Loginuser = (req, res) => {
   Member.findOne({userid: req.body.userid})
   .exec(
      (err, member) => {
        if(err)
        {
           res.status(500).send(err);
           return;
        }
        if(!member)
        {
           res.status(404).send("USER NOT FOUND....");
           return;
        }
        var passwordIsVaild = bcrypt.compareSync(req.body.password, member.password);

        if(!passwordIsVaild)
        {
          return res.status(401).send({accessToken: null, message: "Invalid Password..." });
        }

        var token = jwt.sign({id: member.id}, secret, {
          expireIn: 86400 
        });

        res.status(200).send(
          {
            id: member._id,
            userid: member.userid,
            accessToken: token
          });
      });
};


exports.findAll = (req, res) => {
  const userid = req.query.userid;
  var condition = userid ? { userid: { $regex: new RegExp(userid), $options: "i" } } : {};

  Member.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error"
      });
    });
};


exports.findOne = (req, res) => {
   Member.findOne({userid: req.params.userid}, (err, result) =>
         {
            if(err) throw err;
            var data = result;
            res.send(data);
         }
      );
};



exports.update = (req, res) => {

  if (!req.body) {
    return res.status(400).send({
      message: "400 Update Error! Empty..."
    });
  }

   var body = req.body;
     Member.findOneAndUpdate({userid: body.userid}, {$set: {password: bcrypt.hashSync(body.password, 8), name: body.name,
        email: body.email, phonenumber: body.phonenumber } }, {upsert: true, returnNewDocument: true}, 
     (err, data) => { if(err) throw err;
     res.send(data);
    });

};


exports.updateAccess = (req, res) => {

  if (!req.body) {
    return res.status(400).send({
      message: "400 Update Error! Empty..."
    });
  }

   var body = req.body;
     Member.findOneAndUpdate({userid: body.userid}, {$set: {access: body.access,
     } }, {upsert: true, returnNewDocument: true}, 
     (err, data) => { if(err) throw err;
     res.send(data);
    });
};


exports.updateHours = (req, res) => {

  if (!req.body) {
    return res.status(400).send({
      message: "400 Update Error! Empty..."
    });
  }

   var body = req.body;
     Member.findOneAndUpdate({userid: body.userid}, {$set: {hours: body.hours,
     } }, {upsert: true, returnNewDocument: true}, 
     (err, data) => { if(err) throw err;
     res.send(data);
    });

};

exports.delete = (req, res) => {
  const userid = req.params.userid;
      
  var body = req.body; 
  Member.deleteOne(body, (err,data) => 
      {
      if(err) throw err;
      res.send(data + {message: "delete success!"}); 
   });
};
*/