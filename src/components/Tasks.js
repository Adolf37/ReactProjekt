import Task from "./Task";

const Tasks = ({tasks,onDelete,setReminder}) => {

   return (
        <>
            {tasks.map((task)=>{
                return <Task key={task.id} task ={task} onDelete={onDelete} setReminder ={setReminder}/>
            })}
        </>
    )
}

export default Tasks
