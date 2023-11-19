import { useSelector } from "react-redux"


export default function SubmitResults() {

    const answer = useSelector((state) => state.main.answer);
    const userGuess = useSelector((state) => state.main.userGuess);

    return(
        <>
        {answer}
        <br />
        {userGuess}
        </>
    )
}