import { IconContext } from "react-icons";
import { IoSettings } from "react-icons/io5";


export default function Header() {

    return (
        <div className="w-full mb-3 pb-3 border-b border-slate-600 text-center mt-3">
            <div className="flex justify-between items-center">
                <div className="mx-3 w-12"></div>
                <h1 className="app-title select-none text-7xl mx-3">
                    aRGaaM
                </h1>
                <div className="mx-3">
                    <IconContext.Provider value={{ className: "h-12 w-12 text-slate-900 cursor-pointer" }}>
                        <IoSettings onClick={() => alert("This will open a menu")} />
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    )
}