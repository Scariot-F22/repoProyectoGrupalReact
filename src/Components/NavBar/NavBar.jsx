import { NavLink, Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineSearch,
  HiOutlineShoppingCart,
  HiMenu,
  HiX,
  HiChevronRight,
} from "react-icons/hi";
import { stylesNavBar } from "./StylesNav";
import { itemsLinksNavBar } from "../../Data/dataLinksNavbar";
import { useState } from "react";
import logo from "../../fotos/logo.png";

const {
  nav,
  img,
  buttonHamburger,
  iconsHamburger,
  stylesContainerItems,
  stylesIcons,
  stylesLInk,
  staylesItemsLinks,
  iconChevronDown,
  stylesLinkMobile, 
  categories
} = stylesNavBar;
const {
  itemsBelleza,
  itemsCuidadoPersonal,
  itemsMamasBebes,
  itemsSaludFarm,
} = itemsLinksNavBar;

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);

  const [visibleHamburger, setVisibleHamburger] = useState(false);

  const handleVisibleHamburger = () => {
    if (visibleHamburger) {
      setVisibleHamburger(false);
    } else {
      setVisibleHamburger(true);
    }
  };

  const handleVisible = () => {
    if (visible) {
        setVisible(false);
    } else {
      setVisible(true);
    }
  };

  const handleVisible2 = () => {
    if (visible2) {
        setVisible2(false);
    } else {
      setVisible2(true);
    }
  };

  const handleVisible3 = () => {
    if (visible3) {
        setVisible3(false);
    } else {
      setVisible3(true);
    }
  };

  const handleVisible4 = () => {
    if (visible4) {
        setVisible4(false);
    } else {
      setVisible4(true);
    }
  };

  return (
    <>
      <nav className={nav}>
        <div className={img}>
          <Link to="/">
            <img
              className="mr-5 md:w-32 md:mr-10"
              src={logo}
              alt="logo Farmazziti"
            />
          </Link>

          {/* iconos modo movile */}

          <div className="flex mx-auto tracking-tight md:ml-44 lg:hidden">
            <a href="#" className={stylesIcons}>
              <HiOutlineSearch />
            </a>
            <a href="#" className={stylesIcons}>
              <HiOutlineUser />
            </a>
            <Link to="/carro_compra" className={stylesIcons}>
              <HiOutlineShoppingCart />
            </Link>
          </div>
        </div>

        {/*boton hamburguesa*/}

        <div className="block lg:hidden">
          <button onClick={handleVisibleHamburger} className={buttonHamburger}>
            {visibleHamburger ? (
              <HiX className={iconsHamburger} />
            ) : (
              <HiMenu className={iconsHamburger} />
            )}
          </button>
        </div>

        <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
          <div className="flex flex-col-reverse flex-wrap w-full lg:flex-row lg:justify-end">
            
            {/* visibilidad modo mobile */}

            {visibleHamburger && (
              <div className="h-full pt-2 text-md">
                <NavLink to="Belleza" activeClassName="active" onClick={handleVisible} className={stylesLinkMobile}>
                    <span>Belleza y Perfumería</span> <HiChevronRight className="text-2xl" />
                </NavLink>
                {visible && (
                  <div className={stylesContainerItems}>
                    {itemsBelleza.map((i) => (
                      <Link
                        to={i.path}
                        key={i.id}
                        className={categories}
                        onClick={handleVisibleHamburger}
                      >
                        {i.item}
                      </Link>
                    ))}
                  </div>
                )}
              
                <NavLink to="Cuidado_Personal" activeClassName="active" onClick={handleVisible2} className={stylesLinkMobile}>
                  <span> Cuidado Personal</span><HiChevronRight className="ml-40 text-2xl" />
                </NavLink>
                {visible2 && (
                  <div className={stylesContainerItems}>
                    {itemsCuidadoPersonal.map((i) => (
                      <Link
                        to={i.path}
                        key={i.id}
                        className={categories}
                        onClick={handleVisibleHamburger}
                      >
                        {i.item}
                      </Link>
                    ))}
                  </div>
                )}
                <NavLink to="Bebes_y_Mamas" activeClassName="active" onClick={handleVisible3} className={stylesLinkMobile}>
                  Bebés y Maternidad<HiChevronRight className="ml-40 text-2xl" />
                </NavLink>
                {visible3 && (
                  <div className={stylesContainerItems}>
                    {itemsMamasBebes.map((i) => (
                      <Link
                        to={i.path}
                        key={i.id}
                        className={categories}
                        onClick={handleVisibleHamburger}
                      >
                        {i.item}
                      </Link>
                    ))}
                  </div>
                )}
                 
                <NavLink to="/Salud_y_Farmacia" activeClassName="active" onClick={handleVisible4} className={stylesLinkMobile}>
                    <span> Salud y Farmacia </span> <HiChevronRight className="ml-40 text-2xl"/>
                </NavLink>
                {visible4 && (
                  <div className={stylesContainerItems}>
                    {itemsSaludFarm.map((i) => (
                      <Link
                        to={i.path}
                        key={i.id}
                        className={categories}
                        onClick={handleVisibleHamburger}
                      >
                        {i.item}
                      </Link>
                    ))}
                  </div>
                )}
              <NavLink
                to="/contacto"
                activeClassName="active"
                className={stylesLinkMobile}
              >
                Contacto
              </NavLink>
              </div>
            )}

            {/* visibilidad modo desktop */}

            <div className="z-50 flex flex-grow invisible pt-2 justify-evenly lg:visible max-h-8">
              <button
                className={stylesLInk}
                onMouseOver={() => setVisible(true)}
                onMouseOut={() => setVisible(false)}
              >
                <NavLink to="Belleza" activeClassName="active">
                  Belleza y Perfumería{iconChevronDown}
                </NavLink>
                {visible && (
                  <div className={stylesContainerItems}>
                    {itemsBelleza.map((i) => (
                      <Link
                        to={i.path}
                        key={i.id}
                        className={staylesItemsLinks}
                      >
                        {i.item}
                      </Link>
                    ))}
                  </div>
                )}
              </button>
              <button
                className={stylesNavBar.stylesLInk}
                onMouseOver={() => setVisible2(true)}
                onMouseOut={() => setVisible2(false)}
              >
                <NavLink to="Cuidado_Personal" activeClassName="active">
                  Cuidado Personal{iconChevronDown}
                </NavLink>
                {visible2 && (
                  <div className={stylesContainerItems}>
                    {itemsCuidadoPersonal.map((i) => (
                      <Link
                        to={i.path}
                        key={i.id}
                        className={staylesItemsLinks}
                      >
                        {i.item}
                      </Link>
                    ))}
                  </div>
                )}
              </button>
              <button
                className={stylesLInk}
                onMouseOver={() => setVisible3(true)}
                onMouseOut={() => setVisible3(false)}
              >
                <NavLink to="Bebes_y_Mamas" activeClassName="active">
                  Bebés y Maternidad{iconChevronDown}
                </NavLink>
                {visible3 && (
                  <div className={stylesContainerItems}>
                    {itemsMamasBebes.map((i) => (
                      <Link
                        to={i.path}
                        key={i.id}
                        className={staylesItemsLinks}
                      >
                        {i.item}
                      </Link>
                    ))}
                  </div>
                )}
              </button>
              <button
                className={stylesLInk}
                onMouseOver={() => setVisible4(true)}
                onMouseOut={() => setVisible4(false)}
              >
                <NavLink to="/Salud_y_Farmacia" activeClassName="active">
                  Salud y Farmacia{iconChevronDown}
                </NavLink>
                {visible4 && (
                  <div className={stylesContainerItems}>
                    {itemsSaludFarm.map((i) => (
                      <Link
                        to={i.path}
                        key={i.id}
                        className={staylesItemsLinks}
                      >
                        {i.item}
                      </Link>
                    ))}
                  </div>
                )}
              </button>
              <NavLink
                to="/contacto"
                activeClassName="active"
                className={stylesLInk}
              >
                Contacto
              </NavLink>
            </div>

            {/* iconos modo desktop */}

            <div className="invisible lg:visible max-h-px">
              <a href="#" className={stylesIcons}>
                <HiOutlineSearch />
              </a>
              <a href="#" className={stylesIcons}>
                <HiOutlineUser />
              </a>
              <Link to="/carro_compra" className={stylesIcons}>
                <HiOutlineShoppingCart />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;