import { NavLink} from "react-router-dom";
import { HiOutlineUser, HiOutlineSearch, HiOutlineShoppingCart, HiMenu, HiX, HiChevronRight } from "react-icons/hi";
import { stylesNavBar } from "./StylesNav";
import { itemsLInksNavBar } from "../../Data/dataLinksNavbar";
import { useState } from "react";
import logo from "../../fotos/logo.jpeg"

const NavBar = () => {

  const { stylesContainerItems, stylesIcons, stylesLInk, staylesItemsLinks, iconChevronDown } = stylesNavBar;
  const { itemsBelleza, itemsCuidadoPersonal, itemsMamasBebes, itemsMovile, itemsSaludFarm } = itemsLInksNavBar;

  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);

  const [visibleHamburger, setVisibleHamburger] = useState(false);

  const handleVisibleHamburger = () => {
    if (visibleHamburger) {
      setVisibleHamburger(false)
    } else {
      setVisibleHamburger(true)
    }
  }

  return (
    <>
      <nav className="flex flex-wrap items-center justify-between p-6 mx-auto bg-emerald-600">
        <div className="flex items-center justify-between flex-shrink-0 w-4/5 pb-3 mr-6 lg:w-auto text-lime-500">
          <img src={logo} alt="logo Farmazziti" width="150"/>

          {/* iconos modo movile */}

          <div className="flex mx-auto tracking-tight lg:hidden">
            <a href="#" className={stylesIcons}><HiOutlineSearch /></a>
            <a href="#" className={stylesIcons}><HiOutlineUser /></a>
            <a href="#" className={stylesIcons}><HiOutlineShoppingCart /></a>
          </div>
        </div>

        {/*boton hamburguesa*/}
        <div className="block lg:hidden">
          <button onClick={handleVisibleHamburger} className="flex items-center px-3 py-2 text-teal-200 border border-teal-400 rounded hover:text-white hover:border-white">
            {visibleHamburger ? <HiX className="w-3 h-3 delay-1000 fill-current" /> : <HiMenu className="w-3 h-3 delay-1000 fill-current" />}
          </button>
        </div>

        <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
          <div className="flex flex-col-reverse flex-wrap w-full lg:flex-row lg:justify-end">

            {/* visibilidad modo movile */}

            {visibleHamburger && <div className="pt-2 text-md lg:flex-grow h-96">
              {itemsMovile.map(i => <button key={i.id} className="flex items-center justify-between w-full my-6 text-teal-200 border-b border-gray-300 hover:text-white">
                <span  className="py-4">{i.item}</span>  <HiChevronRight className="text-2xl" />
              </button>)}
            </div>}

            {/* visibilidad modo desktop */}

            <div className="flex flex-grow invisible pt-2 justify-evenly lg:visible max-h-8  z-50">
              <button className={stylesLInk} onMouseOver={() => setVisible(true)} onMouseOut={() => setVisible(false)}>
                Belleza y Perfumería{iconChevronDown}
                {visible && <div className={stylesContainerItems}>
                  {itemsBelleza.map(i => <a key={i.id} className={staylesItemsLinks}>{i.item}</a>)}
                </div>}
              </button>
              <button className={stylesNavBar.stylesLInk} onMouseOver={() => setVisible2(true)} onMouseOut={() => setVisible2(false)}>
                Cuidado Personal{iconChevronDown}
                {visible2 && <div className={stylesContainerItems}>
                  {itemsCuidadoPersonal.map(i => <a key={i.id} className={staylesItemsLinks}>{i.item}</a>)}
                </div>}
              </button>
              <button className={stylesLInk} onMouseOver={() => setVisible3(true)} onMouseOut={() => setVisible3(false)}>
                Bebés y Maternidad{iconChevronDown}
                {visible3 && <div className={stylesContainerItems}>
                  {itemsMamasBebes.map(i => <a key={i.id} className={staylesItemsLinks}>{i.item}</a>)}
                </div>}
              </button>
              <button className={stylesLInk} onMouseOver={() => setVisible4(true)} onMouseOut={() => setVisible4(false)}>
                Salud y Farmacia{iconChevronDown}
                {visible4 && <div className={stylesContainerItems}>
                  {itemsSaludFarm.map(i => <a key={i.id} className={staylesItemsLinks}>{i.item}</a>)}
                </div>}
              </button>
              <a href="#responsive-header" className={stylesLInk}>
                Ofertas
              </a>
            </div>

            {/* iconos modo desktop */}

            <div className="invisible lg:visible max-h-px">
              <a href="#" className={stylesIcons}><HiOutlineSearch /></a>
              <a href="#" className={stylesIcons}><HiOutlineUser /></a>
              <a href="#" className={stylesIcons}><HiOutlineShoppingCart /></a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar