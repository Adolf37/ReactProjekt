import {FaTimes} from 'react-icons/fa';

const EgyTask = ({task,onDelete,emlekezteto}) => {
    return (
        <div className={`task ${task.emlekezteto ? 'emlekezteto' : ' '}`} onDoubleClick={()=>emlekezteto(task.id)}>
            <h3>{task.text}
             <FaTimes 
                style={{color:'orange',cursor:'pointer'}} 
                onClick={()=>onDelete(task.id)}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default EgyTask
