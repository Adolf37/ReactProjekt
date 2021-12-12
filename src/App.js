import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState,useEffect } from "react";
import AddTask from "./components/AddTask";

function App() {



  
  const [show,setShow] = useState(false)
  const [tasks,setTasks] = useState([])

  //run as soo as the page loads
  useEffect(()=>{
    const getTasks = async () =>{
      //getting the json objcet with the data
      const tasksFromServer = await fetchTasks()
      //updating the tasks
      setTasks(tasksFromServer);
    }
    getTasks();
    
  },[])//we can add values and then this will run when the input value will change

  const fetchTasks = async ()=>{
    //fetching the data from the server
    let res = await fetch('http://localhost:5000/tasks')
    //convert the data into json
    let data = await res.json();
    //giveing back the json data
  
    return data
  }

 

const addTask = async (task)=>{
  const res = await fetch('http://localhost:5000/tasks',{
    //POST = adding new element
    method:'POST',
    headers : {
      //type of the new element
      'Content-Type':'application/json'
    },
    //converting from javascript object to json
    body: JSON.stringify(task)
  })

  //the return data is the new task which i added
  const data = await res.json()

  //updating on the ui
  setTasks([...tasks,data])
}


const deleteTask = async (id)=>{

  //deleting the task from the server with the given id
  await fetch(`http://localhost:5000/tasks/${id}`,{
    method:"DELETE"
  })
  
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
