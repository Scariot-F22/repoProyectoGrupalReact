import { NavLink } from "react-router-dom";
import { HiOutlineUser, HiOutlineSearch, HiOutlineShoppingCart, HiMenu, HiX, HiChevronRight } from "react-icons/hi";
import { stylesNavBar } from "./StylesNav";
import { itemsLInksNavBar } from "../../Data/dataLinksNavbar";
import { useState } from "react";
import logo from "../../fotos/logo.jpeg"


const { nav, containerNav, buttonHamburger, iconsHamburger, stylesContainerItems, stylesIcons, stylesLInk, staylesItemsLinks, iconChevronDown } = stylesNavBar;
const { itemsBelleza, itemsCuidadoPersonal, itemsMamasBebes, itemsMobile, itemsSaludFarm } = itemsLInksNavBar;


const NavBar = () => {

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
            <nav className={nav}>
                <div className={containerNav}>
                    <NavLink to="/"><img src={logo} alt="logo Farmazziti" width="150" /></NavLink>

                    {/* iconos modo movile */}

                    <div className="flex mx-auto tracking-tight lg:hidden">
                        <a href="#" className={stylesIcons}><HiOutlineSearch /></a>
                        <a href="#" className={stylesIcons}><HiOutlineUser /></a>
                        <a href="#" className={stylesIcons}><HiOutlineShoppingCart /></a>
                    </div>
                </div>

                {/*boton hamburguesa*/}

                <div className="block lg:hidden">
                    <button onClick={handleVisibleHamburger} className={buttonHamburger}>
                        {visibleHamburger ? <HiX className={iconsHamburger} /> : <HiMenu className={iconsHamburger} />}
                    </button>
                </div>

                <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
                    <div className="flex flex-col-reverse flex-wrap w-full lg:flex-row lg:justify-end">

                        {/* visibilidad modo mobile */}

                        {visibleHamburger && <div className="pt-2 text-md lg:flex-grow h-96">
                            {itemsMobile.map(i => <NavLink to={i.path} key={i.id} activeClassName="active" className="flex items-center justify-between w-full my-6 text-teal-200 border-b border-gray-300">
                                <span className="py-4">{i.item}</span>  <HiChevronRight className="text-2xl" /></NavLink>
                            )}
                        </div>}

                        {/* visibilidad modo desktop */}

                        <div className="flex flex-grow invisible pt-2 justify-evenly lg:visible max-h-8  z-50">
                            <button className={stylesLInk} onMouseOver={() => setVisible(true)} onMouseOut={() => setVisible(false)}>
                                <NavLink to="Belleza" activeClassName="active"> Belleza y Perfumería{iconChevronDown}</NavLink>
                                {visible && <div className={stylesContainerItems}>
                                    {itemsBelleza.map(i => <a key={i.id} className={staylesItemsLinks}>{i.item}</a>)}
                                </div>}
                            </button>
                            <button className={stylesNavBar.stylesLInk} onMouseOver={() => setVisible2(true)} onMouseOut={() => setVisible2(false)}>
                                <NavLink to="Cuidado_Personal" activeClassName="active"> Cuidado Personal{iconChevronDown}</NavLink>
                                {visible2 && <div className={stylesContainerItems}>
                                    {itemsCuidadoPersonal.map(i => <a key={i.id} className={staylesItemsLinks}>{i.item}</a>)}
                                </div>}
                            </button>
                            <button className={stylesLInk} onMouseOver={() => setVisible3(true)} onMouseOut={() => setVisible3(false)}>
                                <NavLink to="Bebes_y_Mamas" activeClassName="active"> Bebés y Maternidad{iconChevronDown}</NavLink>
                                {visible3 && <div className={stylesContainerItems}>
                                    {itemsMamasBebes.map(i => <a key={i.id} className={staylesItemsLinks}>{i.item}</a>)}
                                </div>}
                            </button>
                            <button className={stylesLInk} onMouseOver={() => setVisible4(true)} onMouseOut={() => setVisible4(false)}>
                                <NavLink to="/Salud_y_Farmacia" activeClassName="active"> Salud y Farmacia{iconChevronDown}</NavLink>
                                {visible4 && <div className={stylesContainerItems}>
                                    {itemsSaludFarm.map(i => <a key={i.id} className={staylesItemsLinks}>{i.item}</a>)}
                                </div>}
                            </button>
                            <NavLink to='/Ofertas' className={stylesLInk} activeClassName="active">
                                Ofertas
                            </NavLink>
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