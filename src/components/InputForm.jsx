import { useDispatch } from "react-redux";
import { setUserGuess } from "../app/mainSlice";


export default function InputForm() {

    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event.target.userAnswer.value)
        dispatch(setUserGuess(event.target.userAnswer.value));
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <div className="input-group">
                <input className="" name="userAnswer" />
            </div>
            <button className="btn btn-info" type="submit">Submit</button>
        </form>
    )
}