import { useDispatch, useSelector } from "react-redux"
import { generateAnswer } from "../app/mainSlice";
import { resetGame } from "../lib/utils";


export default function GameOver({ gameOverRef }) {

    const dispatch = useDispatch();
    const rightAnswerCount = useSelector((state) => state.main.rightAnswerCount)


    return (
        <>
            <dialog className="modal" ref={gameOverRef} >
                <div className="modal-box text-center">
                    <h3 className="font-bold text-xl">
                        Game Over
                    </h3>
                    <p className="py-4">
                        You scored: {rightAnswerCount}
                    </p>
                    <div className="modal-action flex justify-center w-full">
                        <form method="dialog">
                            <button
                                className="btn"
                                onClick={() => resetGame(dispatch)}
                            >
                                Restart
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
            {/* <div className="absolute z-20 top-0 w-screen h-screen backdrop-blur-md">
                <div className="flex h-screen">
                    <div className="m-auto">
                        <div className='flex justify-center my-20 bg-white'>
                            <div className='flex-col items-center justify-center border border-slate-300 rounded-md'>
                                <div className="flex justify-center mb-12 border-b border-slate-300 bg-limeGreenpx-20 py-5">
                                    Game Over
                                </div>

                                <div className="px-20 pb-10">
                                    <div className="flex-none">
                                        <div className="mb-10">
                                            You scored: {rightAnswerCount}
                                        </div>
                                        <div>
                                            <button
                                                className="py-2 px-4 bg-softOrange rounded-md border border-slate-300"
                                                onClick={() => reset()}>
                                                Restart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}