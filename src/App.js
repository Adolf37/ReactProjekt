import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {

  const [show,setShow] = useState(false)
  const [tasks,setTasks] = useState([])


const addTask = (task)=>{
  const id = Math.floor(Math.random()*1000) + 1

  //concat the task and the id
  const newTask = {id, ...task}

  //adding the new task to the tasks
  setTasks([...tasks, newTask])
}


const deleteTask =(id)=>{
  // eliminateet the task with the given id
  let reduced_list = tasks.filter((task)=> task.id !== id)
  
  // update task with new list
  setTasks(reduced_list)
}


const setReminder=(id)=>{
  //selecting the tasks one bye one
  setTasks(tasks.map((task)=>
     task.id === id ?
     //if the id is equal we give back the whole task but we change the reminder
     {...task,reminder: !task.reminder} : task))
     //if not equal we give back the task without any change
      

}

  return (
    <div className="container">
      <Header  add = { ()=>setShow(!show) } showValue ={show}/>
      { show && <AddTask onAdd={addTask} />}
     {tasks.length >0 ? 
     (<Tasks tasks = {tasks} onDelete={deleteTask} setReminder = {setReminder}/>)
      : ('Nincs feladat,esemeny')}
      
    </div>
  );
}

export default App;
