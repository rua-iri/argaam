import { useEffect, type RefObject } from "react";
import { IconContext } from "react-icons";
import { PiGithubLogoDuotone } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { resetGame } from "../lib/utils";

export default function StartMenu({
  startMenuRef,
}: {
  startMenuRef: RefObject<HTMLDialogElement | null>;
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    startMenuRef.current?.show();
  }, []);

  function handleStartGame() {
    resetGame(dispatch);
  }

  return (
    <dialog className="modal backdrop-blur-md" ref={startMenuRef}>
      <div className="modal-box text-center pt-0 px-0">
        <h2 className="font-bold text-xl py-3 bg-limeGreen">
          Welcome to Argaam
        </h2>
        <div className="modal-action flex flex-col justify-center items-center gap-2 w-full">
          <p>
            This is a web application to practice comprehension of Arabic
            numbers.
          </p>
          <p>
            Arabic numbers, particularly those with double digits, are
            challenging to get one's head around when first learning them.
          </p>
          <p>
            This application is designed to let students practice their
            comprehension of Arabic numbers and increase the speed at which they
            can understand them.
          </p>
          <p>
            You can view the source code
            <a
              className="btn btn-xs btn-primary mx-2"
              href="https://github.com/rua-iri/argaam"
              target="_blank"
            >
              <IconContext.Provider value={{ className: "h-5 w-5" }}>
                <PiGithubLogoDuotone />
              </IconContext.Provider>
              here
            </a>
          </p>
          <form method="dialog">
            <button
              className="btn btn-primary text-lg"
              onClick={handleStartGame}
              aria-label="Start Game Button"
            >
              Start Game
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
