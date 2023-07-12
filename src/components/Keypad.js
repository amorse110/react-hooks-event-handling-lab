// Code Keypad Component Here

function Keypad (){
    function handleSubmit() {
        console.log('Entering password...')
    }
    
    return (
        <div>
            <input type="password"
            name="password"
            placeholder="Enter Password..."
            onChange={handleSubmit}/>
        </div>
    )
}

export default Keypad;