const request = require (`request`);

// 7.- Traer los primeros 151 pokemon de la primera generacion y 
//     devolver un arreglo de objetos con el nombre, sus moves, tipos, tamaño 
//     y peso.
//                       https://pokeapi.co/


request(`https://pokeapi.co/api/v2/generation/1/`, function(error, response,body){
    console.error(`error:`, error);
    console.log(`statusCode:`, response && response.statusCode);
    a = JSON.parse(body);
    arreglo = new Array ();
    for (i=0;i<=1;i++){
    nombres = a.pokemon_species[i].name
        // console.log(nombres)
        arreglo.push(nombres);
    }
    for (i=0;i<=1;i++){
    moves = a.moves[i].name
    // console.log(moves)
        arreglo.push(moves);
    }
    for (i=0;i<=1;i++){
        tipos = a.types[i].name
        // console.log(tipos)
        arreglo.push(tipos)
    }
    console.log(arreglo);
})