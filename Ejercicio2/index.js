const request = require(`request`);

// // 2.- Hacer una funcion que haga una petición 
//     (Ejemplo: peticionLibro(“i robot”);
//     Buscar un libro y traer el o los autores del primer libro
//     http://openlibrary.org/search.json?q=i+robot) 
    

request('http://openlibrary.org/search.json?q=i+robot) ', function (error, response, body) {
  console.error('error:', error); 
  console.log('statusCode:', response && response.statusCode);
  a = JSON.parse(body)
  
  console.log(a.docs[0].author_name);
});