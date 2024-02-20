import { useSelector } from "react-redux";


export default function ScoreBoard() {
    const currentRoundNum = useSelector((state) => state.main.roundNumberCount);
    const totalRoundNum = useSelector((state) => state.main.totalRoundCount);
    const userScore = useSelector((state) => state.main.rightAnswerCount);

    return (
        <div className="flex justify-between mb-20 border-b">
            <div>
                Round: {currentRoundNum}
            </div>
            <div>
                Score: {userScore}/{totalRoundNum}
            </div>
        </div>
    )
}