import { useEffect, useState } from "react"
import { Link } from "react-router-dom" 
export default function Header() {
    const [y, setY] = useState(0);
    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", (e) => setY(window.scrollY));
      }, []);
    
    handleNavigation =()=>{

    }
    return (
        <div className={`flex justify-around items-center transition-all duration-200 bg-white fixed w-full z-[1] ${ y>100 ? " shadow-md" : "bg-opacity-20"}`}>
            <div className="flex items-center" >
                <img className="h-20 w-24" src={require("../Resources/images/logo-nobg.png")} alt="logo of the NGO"></img>
                <h1 className="text-xl pl-4 leading-5">Paridhee <br />Sewa <br />Sansthan</h1>
            </div>
            <div className="">
                <ul className="flex">
                    <li className="mx-3">
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className="mx-3">
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li className="mx-3">
                        <Link to={"/gallery"}>Gallery</Link>
                    </li>
                    <li className="mx-3">
                        <Link to={"/team"}>Our Team</Link>
                    </li>
                    <li className="mx-3">
                        <Link to={"/contact"}>Contact us</Link>
                    </li>
                    <li><button>Donate us</button></li>
                </ul> 
            </div>
        </div>
    )
}