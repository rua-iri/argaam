export default function ScoreToast() {
  const isAnswerCorrect = true;
  const answer = 123;

//   TODO: display toast for a number of seconds before deleting
  return (
    <ToastElement
      toastColour={isAnswerCorrect ? "success" : "danger"}
      toastMessage={answer}
    />
  );
}

export function ToastElement({ toastColour, toastMessage }) {
  return (
    <div className="toast toast-top toast-center">
      <div className={`alert alert-${toastColour}`}>
        <span>{toastMessage}</span>
      </div>
    </div>
  );
}
