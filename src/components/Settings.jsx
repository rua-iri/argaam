import { useDispatch } from "react-redux"


export default function Settings({ settingsRef }) {

    const dispatch = useDispatch();


    // TODO: include components which allow the user to control some/all of the following
    // - number of rounds
    // - max number
    // - voice speed
    

    // TODO: if the user clicks save then the values should be 
    // changed in the store and the game should be reset
    // otherwise the 
    

    return (
        <dialog className="modal" ref={settingsRef}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">
                    Settings
                </h3>
                <p className="py-4">Press ESC key or click the button below to close</p>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>


        // <div className="absolute z-20 top-0 w-screen h-screen backdrop-blur-md">
        //         <div className="flex h-screen">
        //             <div className="m-auto">
        //                 <div className='flex justify-center my-20 bg-white'>
        //                     <div className='flex-col items-center justify-center border border-slate-300 rounded-md'>
        //                         <div className="flex justify-center mb-12 border-b border-slate-300 bg-limeGreenpx-20 py-5">
        //                             Game Over
        //                         </div>

        //                         <div className="px-20 pb-10">
        //                             <div className="flex-none">
        //                                 <div className="mb-10">
        //                                     You scored: 
        //                                 </div>
        //                                 <div>
        //                                     <button
        //                                         className="py-2 px-4 bg-softOrange rounded-md border border-slate-300"
        //                                         onClick={() => alert("Close Settings")}>
        //                                         Close
        //                                     </button>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
    )
}