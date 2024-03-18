import {Link, Outlet} from "react-router-dom";
import logo from "../../assets/NavBar/logo.png";

function Footer(){


return(
    <>
    <footer className="flex justify-center items-center bg-black border-gray-200 text-white flex-col mx-auto p-4">
         <Link to="/"> 
            <img className="w-8 h-auto" src={logo} alt="Karla Gaudet's persoanl logo leading to homepage"/>
        </Link>
        <p className="mt-4"> Copyright © 2024 Karla Gaudet</p>
    </footer>
    <Outlet/>
    </>
);
}
export default Footer;