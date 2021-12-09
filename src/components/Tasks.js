import Task from "./Task";

const Tasks = ({tasks,onDelete,setReminder}) => {

   return (
        <>
            {tasks.map((elem)=>{
                return <Task key={elem.id} task ={elem} onDelete={onDelete} setReminder ={setReminder}/>
            })}
        </>
    )
}

export default Tasks
