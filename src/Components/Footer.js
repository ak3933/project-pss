import { Link } from "react-router-dom"
import BottomBar from "./BottomBar";

export default function Footer() {
    return (
        <div className="bg-zinc-800 text-zinc-300 rounded-lg py-10">
            <div className="h-64 grid grid-cols-3 md:grid-flow-col">
                <div>logo</div>
                <div>
                    <h2 className="font-bold text-xl mb-4">Quick Links</h2>
                    <hr className="w-1/6 mb-8 border-red-600 border-2"></hr>
                    <ul>
                        <li className="my-1">
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li className="my-1">
                            <Link to={"/about"}>About</Link>
                        </li>
                        <li className="my-1">
                            <Link to={"/gallery"}>Gallery</Link>
                        </li>
                        <li className="my-1">
                            <Link to={"/team"}>Our Team</Link>
                        </li>
                        <li className="my-1">
                            <Link to={"/contact"}>Contact us</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold text-xl mb-4">Get in touch</h2>
                    <hr className="w-1/6 mb-8 border-red-600 border-2"></hr>
                    <ul>
                        <li className="my-2">
                            <div className="flex">
                                <span>
                                    <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                                </span>
                                <p className="pl-4">(+91) 96902 77767</p>
                            </div>
                        </li>
                        <li className="my-2">
                            <div className="flex">
                                <span>
                                    <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />  <polyline points="22,6 12,13 2,6"  /></svg>
                                </span>
                                <p className="pl-4">pssworld63@gmail.com</p>
                            </div>
                        </li>
                        <li className="my-2">
                            <div className="flex">
                                <span>
                                    <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="3.6" y1="9" x2="20.4" y2="9" />  <line x1="3.6" y1="15" x2="20.4" y2="15" />  <path d="M11.5 3a17 17 0 0 0 0 18" />  <path d="M12.5 3a17 17 0 0 1 0 18" /></svg>
                                </span>
                                <p className="pl-4">www.paridhee.org</p>
                            </div>
                        </li>
                        <li className="my-2">
                            <div className="flex">
                                <span>
                                    <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">  <path stroke="none" d="M0 0h24v24H0z"/>  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </span>
                                <p className="pl-4">Indra Colony Gali Number 2</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <BottomBar />

        </div>
    )
}