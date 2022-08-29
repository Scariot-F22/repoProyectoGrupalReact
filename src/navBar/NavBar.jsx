import { NavLink } from "react-router-dom";
import { HiChevronDown, HiOutlineUser, HiOutlineSearch, HiOutlineShoppingCart } from "react-icons/hi";

const NavBar = () => {

  let stylesLInk = "block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white delay-150 mr-4",
    stylesIcons = "inline-block text-xl px-3 py-3 leading-none  text-white border-white hover:border-transparent hover:rounded-full hover:text-teal-500 hover:bg-white delay-150 mt-4 lg:mt-0",
    iconChevronDown = <HiChevronDown className="lg:inline-block"/>;
  
    return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-emerald-600 p-6">
        <div className="flex items-center flex-shrink-0 text-lime-500 mr-6 pb-3">
          <span className="font-semibold text-xl tracking-tight">Farmazziti</span>
        </div>
        {/*boton hamburguesa*/}
        <div className="block lg:hidden">
          <button id='boton' className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        
        <div id='menu' className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="w-full flex flex-col-reverse  flex-wrap lg:flex-row lg:justify-end ">
              <div className="text-md pt-2 lg:flex-grow">
                <a href="#responsive-header" className={stylesLInk}>
                  Belleza {iconChevronDown}
                </a>
                <a href="#responsive-header" className={stylesLInk}>
                  Cuidado Personal {iconChevronDown}
                </a>
                <a href="#responsive-header" className={stylesLInk}>
                  Bebés y Mamás {iconChevronDown}
                </a>
                <a href="#responsive-header" className={stylesLInk}>
                  Cuidado Personal {iconChevronDown}
                </a>
                <a href="#responsive-header" className={stylesLInk}>
                  Salud y Farmacia {iconChevronDown}
                </a>
                <a href="#responsive-header" className={stylesLInk}>
                  Ofertas {iconChevronDown}
                </a>
              </div>
              <div>
                  <a href="#" className={stylesIcons}><HiOutlineUser /></a>
                  <a href="#" className={stylesIcons}><HiOutlineSearch /></a>
                  <a href="#" className={stylesIcons}><HiOutlineShoppingCart /></a>
              </div>
            </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar