import {FaTimes} from 'react-icons/fa';

const EgyTask = ({task,onDelete}) => {
    return (
        <div className='task'>
            <h3>{task.text} <FaTimes style={{color:'orange',cursor:'pointer'}} 
            onClick={()=>onDelete(task.id)}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default EgyTask
