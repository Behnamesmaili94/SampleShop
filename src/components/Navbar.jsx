import {Link} from "react-router-dom";

export const Navbar = () => {
    return(
                <nav className={"flex flex-row text-lg font-sans h-8 mr-4 mt-4 gap-x-8 "}>
                    <div className={" hover:text-zinc-500 ease-in-out "}><Link to="/">Home</Link></div>
                    <div><Link to="/purchase">Purchase</Link></div>
                    <div><Link to="/contact">Contact</Link></div>

                </nav>)
}