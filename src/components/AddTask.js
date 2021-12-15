import {useState} from 'react'
import emailjs from "emailjs-com"

const AddTask = ({onAdd}) => {

    const [text,setText] =useState('')
    const [day,setDay] =useState('')
    const [reminder,setReminder] =useState(false)

    const onSubmit = (e) =>{
        e.preventDefault() //ne frissitse az oldalt

        if(!text){
            alert('Nem adtal meg esemenyt')
            return
        }
        if(!day){
            alert('Nem adtal meg idopontot')
            return 
        }
        onAdd({text,day,reminder})
        
        if(reminder === true){
            emailjs.send("gmail","proba",{
                from_name: "TaskTracker",
                to_name: "Adolf",
                message: text + ' ' + day,
                },
                'user_TYcrZRZayHHw7DFFPkYbu');
        }
        

        setDay('')
        setText('')
        setReminder(false)
    }

    return (
        <form className = 'add-form' onSubmit = {onSubmit}>
            <div className='form-control'>
                <label>Esemény</label>
                <input type="text" 
                    value ={text}
                    onChange = {(e)=> setText(e.target.value)}
                    placeholder='esemeny megadas'/>
            </div>

            <div className='form-control'>
                <label>Időpont</label>
                <input type="text" placeholder='idopont megadasa'
                    value={day}
                    onChange = {(e)=> setDay(e.target.value)}
                 />
            </div>

            <div className='form-control form-control-check'>
                <label>Emlékeztető</label>
                <input type="checkbox"
                    checked = {reminder}
                    value={reminder}
                    onChange = {  (e)=> setReminder(e.currentTarget.checked)  }
                     />
            </div>
            <input type="submit" value="Mentes" className='btn btn-block'/>
        </form>
    )
}

export default AddTask
