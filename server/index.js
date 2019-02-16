const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());


// library of books
let library = [
    {id: 1, title: "Harry Potter and the Goblet of Fire", Author: "J.K. Rowling", Pages: 636, favorite: false},
    {id: 2, title: "The Outsiders", Author: "S.E. Hinton", Pages: 192, favorite: false},
    {id: 3, title:"The Blah Story", Author: "Nigel Tomm", Pages: 7312, favorite: false}
];


// Endpoints
app.get('/books', (request, response) => {
    response.send(library)
})



app.post('/addBook', (request, response) => {
    let newBook = request.body;
    library.push(newBook);
    response.send(library);
})



app.delete('/remove/:id', (request, response) => {
    let {id} = request.params;
    console.log(id)
    library = library.filter( (book, index) => {
        return book.id != id;
    })
    response.send(library)
})




app.put('/like/:id', (request, response) => {
    let {id} = request.params;
    library.forEach(book => {
        if(book.id == id){
            book.favorite = !book.favorite
        }
    })
    response.send(library);
})




// Server running
app.listen(3005,() => {
    console.log('The server is connected!')
})