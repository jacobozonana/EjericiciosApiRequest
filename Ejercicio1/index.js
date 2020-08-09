const request = require (`request`);

// 1.- Hacer una petición a cualquier pokemon y mostrar sus tipos.
                    // https://pokeapi.co/




request(`https://pokeapi.co/api/v2/pokemon/ditto`, function (error, response, body){
    console.error(`error:`, error);
    console.log(`statusCode`, response && response.statusCode);
    a = JSON.parse(body)
    console.log(`body:`, a.types);
});