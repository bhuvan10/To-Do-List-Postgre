import React, { useEffect, useState } from "react";

export default function Todo({user}) {
  const [todos,settodo]=useState([])
  useEffect(()=>{getTodos()},[])
  const getTodos = async () => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`http://localhost:5000/todo/fetchalltodos`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "userid":user.id
      },
    });
    
    const todo = await response.json();
    console.log(todo);
    settodo(todo)
  }
  const addTdos = async (userid,note,email) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`http://localhost:5000/todo/addtodo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({userid,note,email})
    });

    const todo = await response.json();
    settodo(todos.concat(todo));
  }
  const addTodo=()=>{
    const element=document.getElementById("addtodo");
    addTdos(user.id,element.value,user._json.email);
    element.value="";
  }
  return (
    <div className="container">
      <div>
        <h1>TO DO List</h1>
      </div>
      <div>
        <>
          <label htmlFor="addtodo" className="form-label">
            Add TO DO
          </label>
          <input
            type="text"
            id="addtodo"
            className="form-control"
            aria-describedby="passwordHelpBlock"
          />
          <button type="button" className="btn btn-primary" onClick={addTodo}>Add</button>

        </>
      </div>
      <div>
      <ul className="list-group my-2">
       {todos.map((todo)=>{
        return <li className="list-group-item" key={todo._id}>{todo.note}</li>
       })}
</ul>
      </div>
    </div>
  );
}
