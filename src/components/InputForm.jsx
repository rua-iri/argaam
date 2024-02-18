import { useDispatch } from "react-redux";
import { setUserGuess } from "../app/mainSlice";
import { BiVolumeFull } from "react-icons/bi";
import { IconContext } from "react-icons";

export default function InputForm() {

    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event.target.userAnswer.value)
        dispatch(setUserGuess(event.target.userAnswer.value));
    }

    return (
        <div>
            <div className="">
                <div className="flex">
                    <div className="bg-green-300 flex items-center rounded-3xl">
                        <IconContext.Provider value={{ className: "h-20 w-20" }}>
                            <BiVolumeFull />
                        </IconContext.Provider>
                    </div>
                    <form onSubmit={(event) => handleSubmit(event)}>
                        <div className="">
                            <input
                                className="bg-slate-100 border border-gray-300 rounded-lg text-5xl max-w-24"
                                name="userAnswer"
                                maxLength={2}
                                required />
                        </div>
                        <button
                            className="text-slate-900 bg-gradient-to-tr from-red-200 via-red-300 to-yellow-200 px-5 py-2.5 rounded-lg text-4xl font-light hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-50"
                            type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}