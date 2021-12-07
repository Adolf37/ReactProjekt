import Header from "./komponensek/Header";
import Tasks from "./komponensek/Tasks";
import { useState } from "react";
import AddTask from "./komponensek/AddTask";

function App() {
  const [tasks,setTasks] = useState([
    {
        id:1,
        text:'Gym',
        day:'Hetfo 10:30',
        emlekezteto:true
    },
    {
        id:2,
        text:'Taco',
        day:'Hetfo 13:00',
        emlekezteto:false

    }
])


//Feladat hozzadas

const addTask = (task)=>{
  const id = Math.floor(Math.random()*1000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

//Feladat Torlese

const deleteTask =(id)=>{
  setTasks(tasks.filter((task)=> task.id !== id))
}

const emlekezteto=(id)=>{
  setTasks(tasks.map((task)=>
     task.id === id ?
      {...task,emlekezteto: !task.emlekezteto} : task))

}

  return (
    <div className="container">
      <Header  />
      <AddTask onAdd={addTask} />
     {tasks.length >0 ? 
     (<Tasks tasks = {tasks} onDelete={deleteTask} emlekezteto = {emlekezteto}/>)
      : ('Nincs feladat,esemeny')}
      
    </div>
  );
}

export default App;
