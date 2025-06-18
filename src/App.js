import { useState } from 'react';
import './App.css';

function App() {

let [todolist, setTodolist]=useState([])


let saveToDo=(event)=>{

  let todoname=event.target.todoname.value;

  if(!todolist.includes(todoname)){
    
    let finalDolist=[...todolist,todoname]
    setTodolist(finalDolist) 

  } else {
    alert("Task already exists!")
  }


  event.preventDefault();
}

  let list=todolist.map((value, index)=>{
    return(
      <ToDoListItems value={value} key={index} indexNumber={index} todolist={todolist}  setTodolist={setTodolist} />
    )
  })

  return (
    <div className='App'>
      <h1>To-Do List</h1>
      <form onSubmit={saveToDo}>
        <input type='text' name='todoname'/> 
        <button>Save</button>
      </form>

      <div className='outerDiv'>
        <ul>
          {list}
        </ul>
      </div>

    </div>
  );
}

function ToDoListItems({value, indexNumber, todolist, setTodolist}){


  let[status, setStatus]=useState(false)
  let deleteRow=()=>{
    let finalData = todolist.filter((v, i) => i !== indexNumber);
    setTodolist(finalData)
  }

  let checkStatus=()=>{
    setStatus(!status)
  }

  return(
    <li className={(status) ? 'completetodo' : ''} onClick={checkStatus}> {indexNumber+1}. {value} <span onClick={deleteRow}>&times;</span></li>
  )
}

export default App;
