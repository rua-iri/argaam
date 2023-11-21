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
        <div>
            <div className="card my-3 correct-answer">
                <div className="card-body">
                    <form onSubmit={(event) => handleSubmit(event)}>
                        <div className="input-group my-3">
                            <input required className="" name="userAnswer" />
                        </div>
                        <button className="btn btn-info text-white" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}