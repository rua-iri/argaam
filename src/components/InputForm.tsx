import { useDispatch, useSelector } from "react-redux";
import { setUserGuess } from "../app/mainSlice";
import { TbVolume } from "react-icons/tb";
import { IconContext } from "react-icons";
import { useEffect, useRef, useState } from "react";

export default function InputForm() {
  const dispatch = useDispatch();
  const formRef = useRef();
  const inputRef = useRef();
  const audioRef = useRef();
  const currentRoundNum = useSelector((state) => state.main.currentRoundNum);
  const maxRoundCount = useSelector((state) => state.main.maxRoundCount);
  const answer = useSelector((state) => state.main.answer);
  const audioSpeed = useSelector((state) => state.main.audioSpeed);
  const [inputValue, setInputValue] = useState();

  const fullPath = `/audio/${answer}.mp3`;

  function handleChange(value) {
    const re = new RegExp("^[0-9\b]+$");

    if (re.test(value) || value == "") {
      setInputValue(value);
    }
  }

  function playAudio() {
    if (!answer) return;
    if (currentRoundNum >= maxRoundCount) return;

    const playPromise = audioRef.current.play();

    playPromise.catch((e) => {
      console.log("Audio Autoplay failed");
    });
  }

  function setPlaybackSpeed() {
    audioRef.current.playbackRate = audioSpeed;
  }

  function handleSubmit(event) {
    event.preventDefault();

    // check that game is not over
    if (currentRoundNum >= maxRoundCount) {
      inputRef.current.disabled = true;
      formRef.current.reset();
      return;
    }

    dispatch(setUserGuess(event.target.userAnswer.value));
    setInputValue();
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
  }, [fullPath]);

  return (
    <div className="px-5 pb-10 pt-12 bg-white rounded-b-md">
      <div className="">
        <div className="flex">
          <button
            className="btn btn-primary h-full m-3 p-3 ring-1 ring-gray-300 group"
            onClick={() => playAudio()}
            aria-label="Play Audio"
          >
            <IconContext.Provider
              value={{
                className: "h-20 w-20 stroke-[0.75] group-hover:stroke-[1]",
              }}
            >
              <TbVolume />
            </IconContext.Provider>
          </button>
          <div className="m-3">
            <form ref={formRef} onSubmit={(event) => handleSubmit(event)}>
              <div className="mb-3">
                <input
                  ref={inputRef}
                  aria-label="Number Input"
                  type="text"
                  className="input input-bordered max-w-32 text-3xl"
                  name="userAnswer"
                  maxLength={2}
                  autoFocus
                  inputMode="numeric"
                  onChange={(e) => handleChange(e.target.value)}
                  value={inputValue}
                  required
                />
              </div>
              <button
                className="btn btn-primary w-full"
                type="submit"
                aria-label="Submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <audio
        onCanPlay={() => setPlaybackSpeed()}
        ref={audioRef}
        src={fullPath}
      ></audio>
    </div>
  );
}
