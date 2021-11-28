
const AddTask = () => {
    return (
        <form className = 'add-form'>
            <div className='form-control'>
                <label>Esemény</label>
                <input type="text" placeholder='adj hozza valamit' />
            </div>

            <div className='form-control'>
                <label>Időpont</label>
                <input type="text" placeholder='idopont megadasa' />
            </div>

            <div className='form-control form-control-check'>
                <label>Emlékeztető</label>
                <input type="checkbox" />
            </div>
            <input type="submit" value="Mentes" className='btn btn-block'/>
        </form>
    )
}

export default AddTask
