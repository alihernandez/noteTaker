var router = require("express").Router();
// Load Data
//file manipulation
var fs = require("fs");
var noteData = require("../db/db.json");
var id = noteData.length+1
//API GET requests
router.get("/api/notes", function (req, res) {
  res.json(noteData);
});

//API POST requests

router.post("/api/notes", function (req, res) {
  console.log(req.body)

  req.body.id= id++
    noteData.push(req.body);

    fs.writeFile("./db/db.json",JSON.stringify(noteData), function(){
      res.json(noteData);
    })
    


});

//delete route
router.delete("/api/notes/:id", function(req, res){
  var id = req.params.id
  for (let i = 0; i < noteData.length; i++) {
    if (noteData[i].id === parseInt(id)){
      noteData.splice(i,1)
    }
  }
  fs.writeFile("./db/db.json", JSON.stringify(noteData), function (){
    res.json(noteData)
  })
  
})

module.exports = router;