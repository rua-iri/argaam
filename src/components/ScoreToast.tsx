export default function ScoreToast() {
  const isAnswerCorrect = true;
  const answer = String(123);

  //   TODO: display toast for a number of seconds before deleting
  return (
    <ToastElement
      toastColour={isAnswerCorrect ? "success" : "danger"}
      toastMessage={answer}
    />
  );
}

type ToastElementProps = {
  toastColour: string;
  toastMessage: string;
};

export function ToastElement({ toastColour, toastMessage }: ToastElementProps) {
  return (
    <div className="toast toast-top toast-center">
      <div className={`alert alert-${toastColour}`}>
        <span>{toastMessage}</span>
      </div>
    </div>
  );
}
