import { useState } from "react";
import "./placeForm.css";

function PlaceForm(props)
{
    const [enteredPlace,setEnteredPlace] = useState('');
    const [invalidPlace,setInvalidPlace] = useState(false);
    function placeChangeHandler(event)
    {
        setEnteredPlace(event.target.value)
    }

    function formSubmitHandler(event)
    {
        event.preventDefault();
        if(enteredPlace.trim().length === 0)
        {
            setInvalidPlace(true);
            return;
        }
        setInvalidPlace(false);
        props.onFindPlace(enteredPlace);
        setEnteredPlace('');
    }
    return(
        <form onSubmit = {formSubmitHandler}>
            <input type="text" 
            value = {enteredPlace}
            onChange = {placeChangeHandler}/>
            {invalidPlace ? <p>place cannot be empty</p>: <p></p>}
        </form>
    )
}

export default PlaceForm;