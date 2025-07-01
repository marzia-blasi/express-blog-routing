const express = require("express");
const router = express.Router();

// require posts bonus
const posts = require("./posts.js");
// l'ha scritta da solo...
//const posts = require("../../../../Downloads/express_routing_immagini_e_post/posts.js");
// Index

router.get("/", (req, res) => {
  res.json(posts);
});

// Show
router.get("/:id", (req, res) => {
  console.log(req.params);
  //const id = req.params.id;
  const id = parseInt(req.params.id);
  const post = posts.find((posts) => posts.id === id);
  //res.send(`post numero ${id}`);
  res.json(posts);
});

//Store
router.post("/", (req, res) => {
  res.send(`crea nuovo post`);
});

//Update
router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`modifica tutto il post n ${id}`);
});

//Modify
router.patch("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`mododifica parzialmente il post n ${id}`);
});

//Destroy
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`cancella tutto il post ${id}`);
});

module.exports = router;
