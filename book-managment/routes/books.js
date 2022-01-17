const express = require("express")
const router = express.Router()
const books = require('../models/books')


// * **GET /books/** - Returns a list of books in the database in JSON format
router.get('/books', async(req, res)=>{
    try{
        const list_of_books = await books.find()
        res.json(list_of_books)
    }
    catch(error){
        res.status(500).json({massage:error})
    }
    

})
// * **GET /book/{{id}}/** - Returns a detail view of the specified book id. Nest author
// details in JSON format
router.get('/book/:id', getBook, (req, res)=>{
    res.json(res.book.name+res.book.isbn)


})

// * **PUT /book/{{id}}** - Updates an existing book - Expects a JSON body
router.put("/book/:id", async(req, res)=>{
    try{
        await books.findByIdAndUpdate({_id:req.params.id}, req.body)        
        res.status(201).json(await books.findById(req.params.id))  
    }
        catch(error){
            res.status(400).json({massage:error})
        }
})

// * **POST /book/** - Creates a new book with the specified details - Expects a JSON
// body
router.post("/book/", async(req, res)=>{


    const book = new books({
        name:req.body.name,
        isbn:req.body.isbn,
        auther_id: req.body.auther_id
    })
    try{
        const newBook = await book.save()
        console.log(book)
        res.status(201).json(newBook)
    }
    catch(error){
        res.status(400).json({massage:error})


    }
})

async function getBook(req, res, next) {
    let book
    try {
      book = await books.findById(req.params.id)
      if (book == null) {
        return res.status(404).json({ message: 'Cannot find book' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.book = book
    next()
  }

module.exports = router



