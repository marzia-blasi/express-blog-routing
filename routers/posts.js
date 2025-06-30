const express = require("express");
const router = express.Router();

// Index

router.get("/", (req, res) => {
  res.send("lista deiposts ");
});

// Show
router.get("/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  res.send(`post numero ${id}`);
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
