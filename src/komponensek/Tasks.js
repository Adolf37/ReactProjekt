import EgyTask from "./EgyTask";

const Tasks = ({tasks}) => {

   return (
        <>
            {tasks.map((elem)=>{
                return <EgyTask key={elem.id} task ={elem}/>
            })}
        </>
    )
}

export default Tasks
