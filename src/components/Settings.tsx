import { useDispatch } from "react-redux";
import { saveSettings } from "../lib/utils";
import { useAppSelector } from "../app/hooks";
import { type RefObject } from "react";

export default function Settings({
  settingsRef,
}: {
  settingsRef: RefObject<HTMLDialogElement | null>;
}) {
  const dispatch = useDispatch();

  const audioSpeed = useAppSelector((state) => state.main.audioSpeed);
  const maxRoundCount = useAppSelector((state) => state.main.maxRoundCount);
  const maxAnswer = useAppSelector((state) => state.main.maxAnswer);

  const audioSpeedOptions = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
  const numberRoundsOptions = [5, 10, 20, 50];

  // TODO: include components which allow the user to control some/all of the following
  // - number of rounds
  // - max number

  // TODO: if the user clicks save then the values should be
  // changed in the store and the game should be reset
  // otherwise the

  return (
    <dialog className="modal" ref={settingsRef}>
      <div className="modal-box text-center pt-0 px-0">
        <h2 className="font-bold text-xl py-3 bg-limeGreen">Settings</h2>

        <form
          method="dialog"
          onSubmit={(event) => {
            saveSettings(dispatch, event);
          }}
        >
          <div className="divider"></div>

          <div className="text-start px-5">
            <label
              className="text-lg font-semibold"
              htmlFor="audioSpeedRangeInput"
            >
              Voice Speed
            </label>
            <input
              type="range"
              className="range mt-5"
              min={audioSpeedOptions[0]}
              max={audioSpeedOptions[audioSpeedOptions.length - 1]}
              step={0.25}
              name="audioSpeed"
              defaultValue={audioSpeed}
              id="audioSpeedRangeInput"
            />
            <div className="w-full flex justify-between text-xs px-2">
              {audioSpeedOptions.map((speed, index) => (
                <span key={index} className="text-center font-bold">
                  |<div>{speed}x</div>
                </span>
              ))}
            </div>
          </div>

          <div className="divider"></div>

          <div className="text-start px-5">
            <h3 className="text-lg font-semibold">Max Round Number</h3>
            <fieldset>
              <div className="flex justify-center gap-7">
                {numberRoundsOptions.map((numberRounds, index) => (
                  <div className="flex">
                    <label
                      className="mx-1"
                      htmlFor={`numberRounds-${numberRounds}`}
                    >
                      {numberRounds}
                    </label>
                    <input
                      className="radio"
                      key={index}
                      type="radio"
                      name="numberRounds"
                      id={`numberRounds-${numberRounds}`}
                      defaultChecked={numberRounds + 1 === maxRoundCount}
                      value={numberRounds}
                    />
                  </div>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="divider"></div>

          <div className="text-start px-5">
            <label className="text-lg font-semibold block" htmlFor="maxAnswerInput">
              Highest Number
            </label>
            <input
              className="input border border-black"
              type="number"
              name="maxAnswer"
              id="maxAnswerInput"
              placeholder="Enter a Number between 5 and 99"
              min={5}
              max={99}
              defaultValue={maxAnswer}
              aria-label="Max Number Input"
            />
          </div>

          <div className="divider"></div>

          <div className="modal-action px-5">
            <button
              className="btn"
              type="button"
              onClick={() => settingsRef.current?.close()}
              aria-label="Close Without Saving"
            >
              Close
            </button>
            <button className="btn" type="submit" aria-label="Save Settings">
              Save
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
