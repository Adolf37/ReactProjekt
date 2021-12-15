import {FaTimes} from 'react-icons/fa'; //x ikon amivel torlok esemenyt

const Task = ({task,onDelete,setReminder}) => {


    /*
   const ismetel =  setInterval(()=>{
        var kuldesElotte = 5;
        var date = new Date();
        var hour;
        var minute;
        if(task.day[1] === ':'){
             hour = parseInt(task.day[0])
             minute = parseInt(task.day[2]+task.day[3])
        }
        if(task.day[1] !== ':'){
             hour = parseInt(task.day[0] + task.day[1])
             minute = parseInt(task.day[3]+task.day[4])
        }
        
        var kuldesiIdoOra
        var kuldesiIdoPerc
        
            if(minute - kuldesElotte >= 0){
                kuldesiIdoOra = hour;
                kuldesiIdoPerc = minute - kuldesElotte
            }else {
                kuldesiIdoOra = hour-1
                kuldesiIdoPerc = 60 + (minute -kuldesElotte)  
                
            }
            console.log('kuldesi ido = '+ kuldesiIdoOra + ':' + kuldesiIdoPerc)
        
            if(date.getHours() === kuldesiIdoOra && date.getMinutes() === kuldesiIdoPerc ){
                console.log('emailKuldes');
                clearInterval(ismetel)
            }
        
        
    },10000)
   
  */
    
    
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

export default Task
