import PropTypes from 'prop-types';


const Button = ({color,text,onClick}) => {

    return <button style={{backgroundColor:color}} className='btn' onClick={onClick}>
        {text}
    </button>
}

Button.defaultProps = {
    szin:'gray',
    szoveg:'?'
}

Button.propTypes = {
    szin:PropTypes.string,
    szoveg:PropTypes.string,
    onClick:PropTypes.func
}

export default Button
