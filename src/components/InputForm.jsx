import { useDispatch, useSelector } from "react-redux";
import { setUserGuess } from "../app/mainSlice";
import { TbVolume } from "react-icons/tb";
import { IconContext } from "react-icons";
import { useEffect, useRef } from "react";

export default function InputForm() {

    const dispatch = useDispatch();
    const formRef = useRef();
    const inputRef = useRef();
    const audioRef = useRef();
    const currentRoundNum = useSelector((state) => state.main.currentRoundNum);
    const totalRoundCount = useSelector((state) => state.main.totalRoundCount);
    const answer = useSelector((state) => state.main.answer);

    const fullPath = `/audio/${answer}.mp3`

    function playAudio() {
        if (!answer) return;
        if (currentRoundNum >= totalRoundCount) return;

        // console.log(audioRef.current.playbackRate)

        audioRef.current.play()
    }

    function setPlaybackSpeed() {
        audioRef.current.playbackRate = 0.95
    }

    function handleSubmit(event) {
        event.preventDefault();

        // check that game is not over
        if (currentRoundNum >= totalRoundCount) {
            inputRef.current.disabled = true;
            formRef.current.reset();
            return;
        }

        // console.log("User Answer: ", event.target.userAnswer.value);

        dispatch(setUserGuess(event.target.userAnswer.value));
        formRef.current.reset();
        inputRef.current.focus();
    }

    useEffect(() => {
        if (currentRoundNum == 1) {
            setTimeout(() => {
                playAudio();
            }, 500);
        } else {
            playAudio();
        }
    }, [fullPath])

    return (
        <div className="px-5 pb-10 pt-12 bg-white rounded-b-md">
            <div className="">
                <div className="flex">
                    <button
                        className="btn btn-primary h-full m-3 p-3 ring-1 ring-gray-300 group"
                        onClick={() => playAudio()}>
                        <IconContext.Provider value={{ className: "h-20 w-20 stroke-[0.75] group-hover:stroke-[1]" }}>
                            <TbVolume />
                        </IconContext.Provider>
                    </button>
                    <div className="m-3">
                        <form ref={formRef} onSubmit={(event) => handleSubmit(event)}>
                            <div className="mb-3">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    className="input input-bordered max-w-32 text-3xl"
                                    name="userAnswer"
                                    maxLength={2}
                                    autoFocus
                                    required />
                            </div>
                            <button
                                // className="my-3 text-gray-900 ring-1 ring-gray-300 bg-limeGreen px-5 py-2.5 rounded-lg text-4xl font-light hover:bg-softYellow focus:bg-softYellow focus:ring-4 focus:outline-none focus:ring-red-50"
                                className="btn btn-primary w-full"
                                type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <audio onCanPlay={() => setPlaybackSpeed()} ref={audioRef} src={fullPath}></audio>
        </div>
    )
}