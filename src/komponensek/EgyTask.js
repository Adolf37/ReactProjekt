import {FaTimes} from 'react-icons/fa';

const EgyTask = ({task}) => {
    return (
        <div className='task'>
            <h3>{task.text} <FaTimes style={{color:'orange',cursor:'pointer'}}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default EgyTask
