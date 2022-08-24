import { NavLink } from "react-router-dom";
import { DiAndroid } from "react-icons/di";

const NavBar = () => {
  return (
    <>
        <nav className="flex items-center">
            <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKkjLVRPyEaJUPNXD2GWC3Taf2hw329my7wlWiNAY&s" alt="logo" /></li>
            <li><a href="#">Inicio</a></li>
            <li><a href="#"> Belleza </a></li>
            <li><a href="#"> Cuidado Personal </a></li>
            <li><a href="#"> Bebés y Mamás </a></li>
            <li><a href="#">Salud y Farmacia </a></li>
            <li><a href="#">Ofertas</a></li>
            <li><a hreff="#">Contacto <DiAndroid/></a></li>
        </nav>
    </>
  )
}

export default NavBar