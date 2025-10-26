import { useSelector } from "react-redux";


export default function ScoreBoard() {
    const currentRoundNum = useSelector((state) => state.main.currentRoundNum);
    const maxRoundCount = useSelector((state) => state.main.maxRoundCount);
    const userScore = useSelector((state) => state.main.rightAnswerCount);

    return (
        <div className="border-b border-slate-300 bg-limeGreen px-5 py-2.5 rounded-t-md">
            <div className="flex justify-between">
                <span className="badge badge-neutral badge-lg">
                    Round: {currentRoundNum}
                </span>
                <span className="badge badge-neutral badge-lg">
                    Score: {userScore}/{maxRoundCount-1}
                </span>
            </div>
            <div className="mt-2">
                <progress
                    className="progress w-full"
                    value={currentRoundNum - 1}
                    max={maxRoundCount - 1}
                >
                </progress>
            </div>
        </div>
    )
}