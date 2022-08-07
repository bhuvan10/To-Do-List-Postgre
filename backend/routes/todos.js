const express = require("express");
const router = express.Router();
const Todo = require("../modals/Todo");
const db = require('./db')

//ROUTE1:   Get all the notes

router.get("/fetchalltodos", async (req, res) => {
  const notes = await Todo.findAll({where:{ userid:req.headers.userid }});
  res.json(notes);
});

//ROUTE2:   ADD a new note using post

router.post(
  "/addtodo",
  async (req, res) => {
    const { userid, note,email} = req.body;
   
    try {
      const todo = new Todo({
        userid,
        note,
        email
      });
      const savedNote = await todo.save();
      res.json(savedNote);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal server Error");
    }
  }
);

module.exports = router;
