import { useSelector } from "react-redux";


export default function Header() {
    const currentRoundNum = useSelector((state) => state.main.roundNumberCount);
    const totalRoundNum = useSelector((state) => state.main.totalRoundCount);
    const userScore = useSelector((state) => state.main.rightAnswerCount);


    return (
        <div>
            <div className="page-title">
                aRGaaM
            </div>
            Round: {currentRoundNum}
            <br />
            Score: {userScore}/{totalRoundNum}
            <br />
            <br />
        </div>
    )
}