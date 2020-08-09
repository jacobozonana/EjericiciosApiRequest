const request = require(`request`);

// 3.- Hacer una petición por autor y devolver la lista de 
//     sus libros
//         http://openlibrary.org/search.json?author=asimov


request(`http://openlibrary.org/search.json?author=asimov`, function (error, response, body){
    console.error(`error:`, error);
    console.log(`statusCode:`, response && response.statusCode);
    a= JSON.parse(body)
    for (i=0;i<a.docs.length;i++)
    console.log(a.docs[i].title_suggest)
})