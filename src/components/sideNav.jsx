import { Link } from "react-router-dom";

const SideNav = ({visible, onClose}) => {
    const navMenu = ['Our Tours', 'Location', 'Contact']
    return(
        <div
            className={`z-20 flex flex-col justify-between z-10 rounded-xl fixed top-0 right-0 h-full md:w-64 w-40 bg-neutral-300/40 backdrop-blur-md shadow-xl transform transition-transform duration-500 ease-in-out ${
                visible ? "translate-x-0" : "translate-x-full"
                }`}
        >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
                >
                    ✕
                </button>
               
                <ul className="flex flex-col items-center mt-20 space-y-8 text-lg font-medium text-gray-800">
                {navMenu.map(e => {              
                    return <li key={e}
                            onClick={onClose}>
                                <Link className="active:bg-teal-950 active:text-neutral-300 xl:hover:bg-teal-950 xl:hover:text-neutral-300 rounded p-2 transition-colors"
                                 to={`/${e.toLowerCase()}`}
                                >
                                    {e}
                                </Link>
                    </li>
                })}
                    <li className='active:bg-teal-950 active:text-neutral-300 xl:hover:bg-teal-950 xl:hover:text-neutral-300 rounded p-2 transition-colors' >Book Now</li>
                </ul> 
                <span className='text-center text-gray-900 text-sm'>  © {new Date().getFullYear()} Pucté. All rights reserved.</span>           
        </div>
    )
}

export default SideNav