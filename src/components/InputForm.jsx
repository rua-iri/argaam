

export default function InputForm() {

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event.target.userAnswer.value)
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <input name="userAnswer" />
            <button type="submit">Submit</button>
        </form>
    )
}