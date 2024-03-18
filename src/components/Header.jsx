import { IconContext } from "react-icons";
import { IoSettings } from "react-icons/io5";


export default function Header() {

    return (
        <div className="w-full mb-3 py-3 border-b border-slate-600 text-center bg-limeGreen">
            <div className="flex justify-between items-center">
                <div className="md:mx-3 md:w-12"></div>
                <h1 className="app-title select-none text-5xl md:text-7xl md:mx-3">
                    aRGaaM
                </h1>
                <div className="mr-3 md:mx-3">
                    <IconContext.Provider value={{ className: "h-12 w-12 md:h-12 md:w-12 text-slate-900 cursor-pointer" }}>
                        <IoSettings onClick={() => alert("This will open a menu")} />
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    )
}