import { useSelector } from "react-redux";


export default function Header() {
    const cRoundNum = useSelector((state) => state.main.roundNumberCount);
    const tRoundNum = useSelector((state) => state.main.totalRoundCount);


    return (
        <div>
            Round {cRoundNum}/{tRoundNum}
        </div>
    )
}