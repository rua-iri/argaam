import { useDispatch, useSelector } from "react-redux";
import { setUserGuess } from "../app/mainSlice";
import { BiVolumeFull } from "react-icons/bi";
import { IconContext } from "react-icons";
import { useRef } from "react";

export default function InputForm() {

    const dispatch = useDispatch();
    const formRef = useRef();
    const inputRef = useRef();
    const currentRoundNum = useSelector((state) => state.main.roundNumberCount);
    const totalRoundNum = useSelector((state) => state.main.totalRoundCount);

    function handleSubmit(event) {
        event.preventDefault();

        if (currentRoundNum >= totalRoundNum) {
            return;
        }

        console.log(event.target.userAnswer.value)
        dispatch(setUserGuess(event.target.userAnswer.value));
        formRef.current.reset();
        inputRef.current.focus();
    }

    return (
        <div>
            <div className="">
                <div className="flex">
                    <div className="bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 flex items-center rounded-3xl m-3 p-3">
                        <IconContext.Provider value={{ className: "h-20 w-20 text-slate-900 animate-ping" }}>
                            <BiVolumeFull />
                        </IconContext.Provider>
                    </div>
                    <div className="m-3">
                        <form ref={formRef} onSubmit={(event) => handleSubmit(event)}>
                            <div className=" my-3">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    className="bg-slate-100 border border-gray-300 rounded-lg text-5xl max-w-32"
                                    name="userAnswer"
                                    maxLength={2}
                                    autoFocus
                                    required />
                            </div>
                            <button
                                className="my-3 text-gray-900 bg-gradient-to-bl from-red-200 via-red-300 to-yellow-200 px-5 py-2.5 rounded-lg text-4xl font-light hover:bg-gradient-to-tr focus:ring-4 focus:outline-none focus:ring-red-50"
                                type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}