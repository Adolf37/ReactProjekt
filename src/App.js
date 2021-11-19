import Header from "./komponensek/Header";
import Tasks from "./komponensek/Tasks";
import { useState } from "react";

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
  return (
    <div className="container">
      <Header  />
      <Tasks tasks = {tasks}/>
    </div>
  );
}

export default App;
