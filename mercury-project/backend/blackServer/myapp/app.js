const express = require('express')
const app = express()
const axios = require('axios');
var fs = require('fs');
const port = 4000
app.set('port', port);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)


  const weather = () => {
    axios.get('https://api.tomorrow.io/v4/timelines?location=40.730610,-73.935242&fields=temperature&timesteps=1d&units=metric&apikey=c3u0Q33n6HGtev3zLW70APcW8P2U9DNZ')
    .then(response => {
        var dictstring = JSON.stringify(response.data);
        fs.writeFile("weather.json", dictstring, function(err, result) {
            if(err) {
                console.log('error', err);
            } else {
                var jsonObj = fs.readFileSync('weather.json');
                var jsonParse = JSON.parse(jsonObj);
                var intervals = jsonParse.data.timelines[0].intervals;

                var weatherStr = intervals.map(interval => {
                    return {
                        startTime: interval.startTime,
                        temperature: interval.values.temperature
                    }
                })
                fs.writeFile("weather.json", JSON.stringify(weatherStr), err => {
                        if(err) {
                            console.log('error', err);
                        }    

                    }) 
            }
        })
    })
    .catch(error => {
        console.log(error);
    });
  }

  const holidaysIL = () => {
    axios.get('https://holidays.abstractapi.com/v1/?api_key=69a12df0be914759ab35f98b46c65e41&country=IL&year=2020')
      .then(response => {

          var data = response.data;
          var holidaysIL = data.map(obj => {
              return {
                  name: obj.name,
                  date: obj.date
              }
          })
          fs.writeFile("holidaysIL.json", JSON.stringify(holidaysIL), err => {
              if (err) {
                  console.log('error', err);
              }

          })
      })
      .catch(error => {
          console.log(error);
      });
  }
  

  const holidaysUS = () => {
    axios.get('https://holidays.abstractapi.com/v1/?api_key=69a12df0be914759ab35f98b46c65e41&country=US&year=2020')
      .then(response => {

          var data = response.data;
          var holidaysUS = data.map(obj => {
              return {
                  name: obj.name,
                  date: obj.date
              }
          })
          fs.writeFile("holidaysUS.json", JSON.stringify(holidaysUS), err => {
              if (err) {
                  console.log('error', err);
              }

          })
      })
      .catch(error => {
          console.log(error);
      });
  }

  
  const holidaysJO = () => {
    axios.get('https://holidays.abstractapi.com/v1/?api_key=69a12df0be914759ab35f98b46c65e41&country=JO&year=2020')
      .then(response => {

          var data = response.data;
          var holidaysJO = data.map(obj => {
              return {
                  name: obj.name,
                  date: obj.date
              }
          })
          fs.writeFile("holidaysJO.json", JSON.stringify(holidaysJO), err => {
              if (err) {
                  console.log('error', err);
              }

          })
      })
      .catch(error => {
          console.log(error);
      });  
    }


  setInterval((weather), 4000);
  setInterval((holidaysIL), 4000);
  setInterval((holidaysUS), 4000);
  setInterval((holidaysJO), 4000);

})


module.exports = app;
