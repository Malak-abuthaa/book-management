const express = require("express")
const router = express.Router()
const authors = require('../models/authors')





// * **GET /authors/** - Returns a list of authors in the database in JSON format
router.get('/authors', async(req, res)=>{
    

    try{
        const author  = await authors.find()
        res.json(author)
    }
    catch(error){
        res.status(500).json({message:error})
    }

})
// * **GET /author/{{id}}/** - Returns a detail view of the specified author id
router.get('/author/:id', getAuthor, (req, res)=>{
    res.json(res.author)
})

// * **PUT /author/{{id}}** - Updates an existing author - Expects a JSON body
router.put("/author/:id",  getAuthor, async(req, res)=>{
    try{
        console.log
        await authors.findByIdAndUpdate({_id:req.params.id}, req.body)        
        res.status(201).json(await authors.findById(req.params.id))  
    }
        catch(error){
            res.status(400).json({massage:error})
        }
})
// * **POST /author/** - Creates a new author with the specified details - Expects a
// JSON body
router.post("/author/", async (req, res)=>{

    const auther = new authors({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
    })
    try{
        const newAuthor = await auther.save()
        res.status(201).json(newAuthor)
      
    }
    catch(error){
        res.status(400).json({massage:error})


    }

    
})
router.post('/isAuthorExisit', async(req, res) =>{
    
  authors.exists({first_name: req.body.first_name, last_name:req.body.last_name}, function(err, obj) 
 {


    if (err)
    {
        res.json(err);
    }

        res.json(obj)

 });



})
async function getAuthor(req, res, next) {
  let author
  try {
      console.log(req.id)
    author = await authors.findById(req.params.id)
    if (author == null) {
      return res.status(404).json({ message: 'Cannot find author' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.author = author
  next()
}


module.exports = router



