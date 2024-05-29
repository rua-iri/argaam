

export default function Toast() {


    // TODO: add toasts to an array whose oldest element should be popped 
    // when another arrives or when a timer expires

    return (
        <div className="toast toast-center toast-bottom md:my-32 ">
            <div className="alert alert-info">
                <span>
                    New message arrived.
                </span>
            </div>
            <div className="alert alert-info">
                <span>
                    New message arrived.
                </span>
            </div>
        </div>
    )
}