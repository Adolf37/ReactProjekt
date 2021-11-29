import {useState} from 'react'


const AddTask = () => {

    const [text,setText] =useState('')
    const [day,setDay] =useState('')
    const [emlek,setEmlek] =useState(false)

    return (
        <form className = 'add-form'>
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
                    value={emlek}
                    onChange = {(e)=> setEmlek(e.currentTarget.checked)}
                     />
            </div>
            <input type="submit" value="Mentes" className='btn btn-block'/>
        </form>
    )
}

export default AddTask
