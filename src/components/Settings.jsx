import { useDispatch, useSelector } from "react-redux"
import { saveSettings } from "../lib/utils";


export default function Settings({ settingsRef }) {

    const dispatch = useDispatch();

    const audioSpeed = useSelector((state) => (state.main.audioSpeed));


    const audioSpeedArray = [0.8, 0.9, 1, 1.1, 1.2];


    // TODO: include components which allow the user to control some/all of the following
    // - number of rounds
    // - max number


    // TODO: if the user clicks save then the values should be 
    // changed in the store and the game should be reset
    // otherwise the 








    return (
        <dialog className="modal" ref={settingsRef}>
            <div className="modal-box text-center pt-0 px-0">
                <h3 className="font-bold text-xl py-3 bg-limeGreen">
                    Settings
                </h3>

                <form method="dialog" onSubmit={(event) => { saveSettings(dispatch, event); }}>

                    <div className="divider"></div>

                    <div className="text-start px-5">
                        <h4 className="text-lg font-semibold my-3">
                            Voice Speed
                        </h4>

                        <input
                            type="range" className="range"
                            min={audioSpeedArray[0]}
                            max={audioSpeedArray[audioSpeedArray.length - 1]}
                            step={0.1}
                            name="audioSpeed"
                            defaultValue={audioSpeed}
                        />
                        <div className="w-full flex justify-between text-xs px-2">
                            {audioSpeedArray.map((speed, index) => (
                                <span key={index} className="text-center font-bold">
                                    |
                                    <div>{speed}x</div>
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="divider"></div>




                    <div className="modal-action px-5">
                        <button className="btn" type="button" onClick={() => settingsRef.current.close()}>
                            Close
                        </button>
                        <button className="btn" type="submit" >
                            Save
                        </button>
                    </div>
                </form>
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