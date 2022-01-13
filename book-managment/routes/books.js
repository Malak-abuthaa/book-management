const express = require("express")
const router = express.Router()


// * **GET /books/** - Returns a list of books in the database in JSON format
router.get('/books',(req, res)=>{
    res.send('books')

})
// * **GET /book/{{id}}/** - Returns a detail view of the specified book id. Nest author
// details in JSON format
router.get('/book/:id',(req, res)=>{
    res.send("books with id "+ req.params.id)


})

// * **PUT /book/{{id}}** - Updates an existing book - Expects a JSON body
router.put("/book/:id", (req, res)=>{

    res.send("update with id = " + req.params.id)
})
// * **POST /book/** - Creates a new book with the specified details - Expects a JSON
// body
router.post("/book/", (req, res)=>{

    res.send("post crete author")
})

module.exports = router



