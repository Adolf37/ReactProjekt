import PropTypes from 'prop-types';


const Button = ({szin,szoveg,onClick}) => {

    return <button style={{backgroundColor:szin}} className='btn' onClick={onClick}>
        {szoveg}
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
