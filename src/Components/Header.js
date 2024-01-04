import { Link } from "react-router-dom" 
export default function Header() {
    return (
        <div className="flex justify-around items-center bg-white bg-opacity-20 fixed w-full z-[1]">
            <h1 className="text-3xl">Paridhee Sewa Sansthan</h1>
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