import {FaTimes} from 'react-icons/fa'; //x ikon amivel torlok esemenyt

const EgyTask = ({task,onDelete,setReminder}) => {
    return (
        <div className={` task ${task.reminder ? 'reminder' : ' '} `} onDoubleClick={()=>setReminder(task.id)}>
            <h3>{task.text}
             <FaTimes 
                style={{color:'orange',cursor:'pointer'}} 
                onClick={()=>onDelete(task.id)}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default EgyTask
