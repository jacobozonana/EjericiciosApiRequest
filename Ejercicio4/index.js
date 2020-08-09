const request = require(`request`);

// 4.- Hacer una petición y devolver el género de la banda deseada
//     http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse

request (`http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse`, function (error, response, body){
    console.error(`error:`, error);
    console.log('statusCode:', response && response.statusCode);
    a = JSON.parse(body)
    console.log(a.artists[0].strGenre);
})