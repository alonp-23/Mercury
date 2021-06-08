var express = require('express');
var router = express.Router();
const fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.post('/weather', function(req, res, next) {
    writeToJson('weather.json', req.body);
});

/* GET home page. */
router.post('/holidaysIL', function(req, res, next) {
  writeToJson('holidaysIL.json', req.body);
});

/* GET home page. */
router.post('/holidaysUS', function(req, res, next) {
  writeToJson('holidaysUS.json', req.body);
});

/* GET home page. */
router.post('/holidaysJO', function(req, res, next) {
  writeToJson('holidaysJO.json', req.body);
});

writeToJson(filename, content){
   // convert JSON object to string
  const data = JSON.stringify(content);

  // write JSON string to a file
  fs.writeFile(filename, data, (err) => {
      if (err) {
          throw err;
      }
      console.log("JSON data is saved.");
    }); 
}

/* GET home page. */
router.get('/weather', function(req, res, next) {
    res.send(readFromFile('weather.json'));
});

/* GET home page. */
router.get('/holidaysIL', function(req, res, next) {
    res.send(readFromFile('holidaysIL.json'));
});

/* GET home page. */
router.get('/holidaysUS', function(req, res, next) {
    res.send(readFromFile('holidaysUS.json'));
});

/* GET home page. */
router.get('/holidaysJO', function(req, res, next) {
    res.send(readFromFile('holidaysJO.json'));
});

readFromFile(filename){
  fs.readFile(filename, 'utf8', (err, jsonString) => {
      if (err) {
          console.log("File read failed:", err)
          return '';
      }
      return jsonString;
  })
}

module.exports = router;
