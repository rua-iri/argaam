import { useSelector } from "react-redux"


export default function SubmitResults() {

    const answer = useSelector((state) => state.main.answer);
    const userGuess = useSelector((state) => state.main.userGuess);
    const answerResponse = useSelector((state) => state.main.answerResponse);

    return(
        <div>
            <br /><br />
            userGuess: "{userGuess}"
            <br />
            Response: {answerResponse}
        </div>
    )
}