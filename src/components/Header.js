import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title,add,showValue}) => {

    

    return (
       <header className="header">
           <h1 >{title}</h1>
            <Button color={showValue ? "orange" : "green"} text={showValue ? "close" : "add"} onClick={add}/>
            
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


export default Header
