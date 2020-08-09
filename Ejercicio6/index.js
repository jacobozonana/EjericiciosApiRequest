const request = require('request');

// 6.- Devolver los asteroides que sean potencialmente peligrosos
//     para la tierra de la semana pasada hasta el día de ayer.
//                     https://api.nasa.gov/

request('https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-06-22&end_date=2020-06-28&api_key=nWe2DC0F1b31zAEAdoCNokoLcHJEMAb4LOavBKPY', function (error, response, body) {
  console.error('error:', error);
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  data = JSON.parse(body)
  var fecha = parseInt(2020-06-26);
  console.log('body:', data.near_earth_objects);
});