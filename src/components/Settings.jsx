

export default function Settings() {

    return (
        <div className="absolute z-20 top-0 w-screen h-screen backdrop-blur-md">
                <div className="flex h-screen">
                    <div className="m-auto">
                        <div className='flex justify-center my-20 bg-white'>
                            <div className='flex-col items-center justify-center border border-slate-300 rounded-md'>
                                <div className="flex justify-center mb-12 border-b border-slate-300 bg-limeGreenpx-20 py-5">
                                    Game Over
                                </div>

                                <div className="px-20 pb-10">
                                    <div className="flex-none">
                                        <div className="mb-10">
                                            You scored: 
                                        </div>
                                        <div>
                                            <button
                                                className="py-2 px-4 bg-softOrange rounded-md border border-slate-300"
                                                onClick={() => alert("Close Settings")}>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}