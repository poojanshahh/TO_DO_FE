import React from 'react';
import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/HandleApi";


function App() {

  const [toDo, setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")

  useEffect(() => {
    getAllToDo(setToDo)
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }

  return (
  <>
    {/* Navbar Starts */}
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
      
      <div className="container-fluid">

        <a className="navbar-brand" href="/">To-Do App</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-brand collapse navbar-collapse" id="navbarSupportedContent">
          
          <ul className="me-auto mb-2 mb-lg-0">
            <text className='cen'>IT629 - Web Programmig</text>
          </ul>

          <form className="d-flex" role="search">
            <text className="me-2">Poojan Shah - 202212112</text>
          </form>

        </div>

      </div>

    </nav>
    {/* Navbar Ends */}

    {/* To-Do Starts */}
    <div className="App">

      <div className="container">

        <h1>Your To-Do List</h1>

        <div className="top">
          
          <input
            type="text"
            placeholder="Add anything here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div
            className="add"
            onClick={isUpdating ?
              () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
              : () => addToDo(text, setText, setToDo)}>
            {isUpdating ? "Update" : "Add"}
          </div>

        </div>

        <div className="list">
          {toDo.map((item) => <ToDo 
          key={item._id} 
          text={item.text}
          updateMode = {() => updateMode(item._id, item.text)}
          deleteToDo = {() => deleteToDo(item._id, setToDo)} />)}
        </div>

      </div>

    </div>
  </>
  );
}

export default App;
