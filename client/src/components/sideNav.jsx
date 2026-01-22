import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'

const SideNav = ({visible, onClose}) => {
    const{ t, i18n }= useTranslation()

    const navMenu = [{path: '/tours', label: 'Tours'}, {path: '/location', label: t('sideNav.location')}]
    
    const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    }
    return(
        <div
            className={`flex flex-col justify-between rounded-xl z-30 fixed top-0 right-0 h-full md:w-64 w-40 bg-neutral-300/40 backdrop-blur-md shadow-xl transform transition-transform duration-500 ease-in-out ${
                visible ? "translate-x-0" : "translate-x-full"
                }`}
        >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl "
                >
                    ✕
                </button>
               
                <ul className="flex flex-col items-center mt-20 space-y-8 text-lg font-medium text-gray-800">
                {navMenu.map(e => {              
                    return <li key={e.path}
                            onClick={onClose}>
                                <Link className="active:bg-teal-950 active:text-neutral-300 xl:hover:bg-teal-950 xl:hover:text-neutral-300 rounded p-2 transition-colors"
                                 to={`${e.path}`}
                                >
                                    {e.label}
                                </Link>
                    </li>
                })}
                    <a href='https://www.instagram.com/sail.bacalar/' target='blank'><li className='active:bg-teal-950 active:text-neutral-300 xl:hover:bg-teal-950 xl:hover:text-neutral-300 rounded p-2 transition-colors' >Instagram</li></a>
                    <a href="https://wa.me/9831551313" target='blank'><li className='active:bg-teal-950 active:text-neutral-300 xl:hover:bg-teal-950 xl:hover:text-neutral-300 rounded p-2 transition-colors' >Whatsapp</li></a>
                </ul> 
                <div className="mt-6 text-center pt-4 text-sm">
                    <div className="mt-6 text-sm flex justify-center space-x-4">
                        <button onClick={()=>changeLanguage('en')}  className={i18n.language === 'en' ? 'underline font-semibold' : "cursor-pointer "}>EN</button>
                        <button onClick={()=>changeLanguage('es')}  className={i18n.language === 'es' ? 'underline font-semibold' : "cursor-pointer "} >ES</button>
                    </div>
                    <span className='text-center text-gray-900 text-sm'>  © {new Date().getFullYear()} Sail Bacalar. All rights reserved.</span>           
                </div>
        </div>
    )
}

export default SideNav