import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title,plusz,showErteke}) => {

    

    return (
       <header className="header">
           <h1 >{title}</h1>
            <Button szin={showErteke ? "orange" : "green"} szoveg={showErteke ? "close" : "add"} onClick={plusz}/>
            
       </header>
    )
}

//alap ertek adas ha nincs title megadva
Header.defaultProps = {
    title:"Feladat kezelő"
}

//tipus hozzarendeles
Header.propTypes = {
    title:PropTypes.string.isRequired,
}

// CSS javascriptben
/*
const stilus = {
    color:'blue',
    textAlign:'center'
}
style={{color:'green', fontSize:'2.2em'}}
<h2 style={stilus}>Masik</h2>
*/

export default Header
