const request = require (`request`);

// 5.- Hacer una petición a la swapi a un personaje y obtener 
//     sus películas.
//                     https://swapi.co/


request (`https://swapi.dev/api/people/4`, function (error, response, body){
    console.error(`error:`,error);
    console.log(`statusCode:`, response && response.statusCode);
    a = JSON.parse(body)
    console.log(a.films)
} )