var express = require('express');
var multer = require('multer');
var fs = require('fs');
var app = express();

var DIR = './uploads/';

var upload = multer({ dest: DIR }).single('file');
app.post('/', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.end(JSON.stringify({status: false,err}));
    }
    res.end(JSON.stringify({
      status: true,
      data: {
        filepath: req.file.path,
        name:req.file.originalname
      }
    }));
  });
});

var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log('Working on port ' + PORT);
});
