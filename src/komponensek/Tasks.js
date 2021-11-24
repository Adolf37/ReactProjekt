import EgyTask from "./EgyTask";

const Tasks = ({tasks,onDelete}) => {

   return (
        <>
            {tasks.map((elem)=>{
                return <EgyTask key={elem.id} task ={elem} onDelete={onDelete}/>
            })}
        </>
    )
}

export default Tasks
