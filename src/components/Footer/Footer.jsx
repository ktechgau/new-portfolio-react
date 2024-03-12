import {Link, Outlet} from "react-router-dom";
import logo from "../../assets/NavBar/logo.png";

function Footer(){


return(
    <>
    <footer className="footer">
         <Link to="/"> 
            <img className="logo" src={logo} alt="Karla Gaudet's persoanl logo leading to homepage"/>
        </Link>
        <p> Copyright © 2024 Karla Gaudet</p>
    </footer>
    <Outlet/>
    </>
);
}
export default Footer;