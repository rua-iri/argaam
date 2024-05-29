import { IconContext } from "react-icons";
import { TbSettings } from "react-icons/tb";


export default function Header({ settingsRef }) {

    return (
        <div className="w-full py-3 border-b border-slate-600 text-center bg-limeGreen">
            <div className="flex justify-between items-center">
                <div className="md:mx-3 md:w-12"></div>
                <div className="px-7 md:px-8 bg-splat1 bg-contain">
                    <h1 className="app-title select-none text-5xl md:text-7xl md:mx-3">
                        aRGaaM
                    </h1>
                </div>
                <div className="mr-3 md:px-3 bg-splat3 bg-cover p-3">
                    <button className="group" onClick={() => settingsRef.current.showModal()}>
                        <IconContext.Provider value={{ className: "h-12 w-12 text-black stroke-[1] group-hover:stroke-[1.25]" }}>
                            <TbSettings />
                        </IconContext.Provider>
                    </button>
                </div>
            </div>
        </div>
    )
}