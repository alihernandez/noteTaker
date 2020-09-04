// Load Data

var noteData = require("../data/noteData");

//API GET requests
module.exports = function (app) {
  app.get("api/notes", function (req, res) {
    res.json(noteData);
  });
};

//API POST requests

app.post("/api/notes", function (req, res) {
  if (noteData.length < 3) {
    noteData.push(req.body);
    res.json(true);
  } else {
    res.json(false);
  }
});
