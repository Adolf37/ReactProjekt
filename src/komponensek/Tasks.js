import { useState } from "react";

 
const Tasks = () => {

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
            day:'Hetfo 12:00',
            emlekezteto:false
    
        }
    ])

    return (
        <>
            {tasks.map((elem)=>{
               return <h2 key={elem.id}>{elem.text},{elem.day}</h2>
            })}
        </>
    )
}

export default Tasks
