import { useDispatch } from "react-redux";
import { setUserGuess } from "../app/mainSlice";
import { useRef, useState, type FormEvent } from "react";
import { useAppSelector } from "../app/hooks";
import AudioPlayer from "./AudioPlayer";

export default function InputForm() {
  const dispatch = useDispatch();
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const currentRoundNum = useAppSelector((state) => state.main.currentRoundNum);
  const maxRoundCount = useAppSelector((state) => state.main.maxRoundCount);
  const [inputValue, setInputValue] = useState<string>();

  function handleChange(value: string) {
    const re = new RegExp("^[0-9\b]+$");

    if (re.test(value) || value == "") {
      setInputValue(value);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // check that game is not over
    if (currentRoundNum >= maxRoundCount) {
      if (inputRef.current) inputRef.current.disabled = true;
      if (formRef.current) formRef.current.reset();
      return;
    }

    dispatch(setUserGuess(event.currentTarget.userAnswer.value));
    setInputValue("");
    formRef.current?.reset();
    inputRef.current?.focus();
  }

  return (
    <div className="px-5 pb-10 pt-12 bg-white rounded-b-md">
      <div className="">
        <div className="flex">
          <AudioPlayer />
          <div className="m-3">
            <form ref={formRef} onSubmit={handleSubmit}>
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
    </div>
  );
}
