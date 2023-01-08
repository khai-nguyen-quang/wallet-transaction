import { HiMenuAlt4, HiOutlineMenuAlt4 } from "react-icons/hi";
import {AiOutlineClose} from 'react-icons/ai'
import logo from '../../images/logo.png'
import { useState } from "react";
 
const NavbarItem = ({title, classProps}) => {
    return (
        <li className={`cursor-pointer ${classProps}`}>
            {title}
        </li>
    );
}
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className="w-full flex justify-between items-center">
            <div className="flex-initial justify-center items-center p-4">
                <img src={logo} alt="logo" className="w-32 cursor-pointer"></img>
            </div>
            <ul className="text-white p-2 md:flex hidden md:justify-center">
                {["Market", "Exchange", "Tutorials", "Wallets"].map((item) => (
                    <NavbarItem title={item} classProps="w-32 h-4 text-s p-4"></NavbarItem>
                ))}
                <li className="bg-red-500
                            cursor-pointer
                            hover:bg-red-700
                            text-base text-center
                            w-24
                            rounded-full
                            m-4 py-2">
                    Login
                </li>
            </ul>
            <div className="flex">
                {toggleMenu
                    ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => (setToggleMenu(false))}></AiOutlineClose>
                    : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-point" onClick={() => (setToggleMenu(true))} ></HiMenuAlt4>
                }
                {toggleMenu && (
                    <ul 
                        className="flex flex-col p-4 mt-4" 
                    >
                        {["Market", "Exchange", "Tutorials", "Wallets"].map((item) => (
                            <NavbarItem title={item} classProps="w-32 h-4 text-s p-4"></NavbarItem>
                        ))}
                        <li className="bg-red-500
                            cursor-pointer
                            hover:bg-red-700
                            text-base text-center
                            w-24
                            rounded-full
                            m-4 py-2">
                            Login
                        </li>
                    </ul>
                )
                    
                }
            </div>
        </nav>
    );
}

export default Navbar;
 