import EgyTask from "./EgyTask";

const Tasks = ({tasks,onDelete,emlekezteto}) => {

   return (
        <>
            {tasks.map((elem)=>{
                return <EgyTask key={elem.id} task ={elem} onDelete={onDelete} emlekezteto ={emlekezteto}/>
            })}
        </>
    )
}

export default Tasks
