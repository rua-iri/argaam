import { useSelector } from "react-redux";


export default function ScoreBoard() {
    const currentRoundNum = useSelector((state) => state.main.currentRoundNum);
    const totalRoundNum = useSelector((state) => state.main.totalRoundCount);
    const userScore = useSelector((state) => state.main.rightAnswerCount);

    return (
        <div className="flex justify-between mb-12 border-b border-slate-300 bg-gradient-to-b from-limeGreen from-50% to-softYellow px-5 py-2.5">
            <div>
                Round: {currentRoundNum}
            </div>
            <div>
                Score: {userScore}/{totalRoundNum}
            </div>
        </div>
    )
}