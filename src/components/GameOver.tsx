import { useDispatch, useSelector } from "react-redux"
import { resetGame } from "../lib/utils";


export default function GameOver({ gameOverRef }) {

    const dispatch = useDispatch();
    const rightAnswerCount = useSelector((state) => state.main.rightAnswerCount)
    const maxRoundCount = useSelector((state) => state.main.maxRoundCount);

    return (
        <>
            <dialog className="modal" ref={gameOverRef} >
                <div className="modal-box text-center pt-0 px-0">
                    <h2 className="font-bold text-xl py-3 bg-limeGreen">
                        Game Over
                    </h2>
                    <p className="py-6">
                        You scored: {rightAnswerCount} / {maxRoundCount-1}
                    </p>
                    <div className="modal-action flex justify-center w-full">
                        <form method="dialog">
                            <button
                                className="btn text-lg"
                                onClick={() => resetGame(dispatch)}
                                aria-label="Reset Game Button"
                            >
                                Restart
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}