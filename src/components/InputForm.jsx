import { useDispatch, useSelector } from "react-redux";
import { setUserGuess } from "../app/mainSlice";
import { BiVolumeFull } from "react-icons/bi";
import { IconContext } from "react-icons";
import { useEffect, useRef } from "react";

export default function InputForm() {

    const dispatch = useDispatch();
    const formRef = useRef();
    const inputRef = useRef();
    const audioRef = useRef();
    const currentRoundNum = useSelector((state) => state.main.currentRoundNum);
    const totalRoundNum = useSelector((state) => state.main.totalRoundCount);
    const answer = useSelector((state) => state.main.answer);

    const rand64 = btoa(answer);
    const fullURL = `https://voice.reverso.net/RestPronunciation.svc/v1/output=json/GetVoiceStream/voiceName=Leila22k?inputText=${rand64}`;

    function playAudio() {
        if (!answer) return;
        audioRef.current.play()
    }

    function handleSubmit(event) {
        event.preventDefault();

        // check that game is not over
        if (currentRoundNum >= totalRoundNum) {
            inputRef.current.disabled = true;
            formRef.current.reset();
            return;
        }

        // console.log("User Answer: ", event.target.userAnswer.value)

        dispatch(setUserGuess(event.target.userAnswer.value));
        formRef.current.reset();
        inputRef.current.focus();
    }

    useEffect(() => {
        playAudio();
    }, [fullURL])

    return (
        <div className="px-5 pb-10">
            <div className="">
                <div className="flex">
                    <div 
                    className="flex items-center rounded-3xl m-3 p-3 bg-limeGreen ring-1 ring-gray-300 cursor-pointer"
                    onClick={() => playAudio()}>
                        <IconContext.Provider value={{ className: "h-20 w-20 text-slate-900" }}>
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
                                className="my-3 text-gray-900 ring-1 ring-gray-300 bg-limeGreen px-5 py-2.5 rounded-lg text-4xl font-light hover:bg-softYellow focus:bg-softYellow focus:ring-4 focus:outline-none focus:ring-red-50"
                                type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <audio ref={audioRef} src={fullURL}></audio>
        </div>
    )
}