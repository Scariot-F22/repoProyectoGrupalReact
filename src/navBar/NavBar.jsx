import { NavLink, unstable_HistoryRouter } from "react-router-dom";
import { HiChevronDown, HiOutlineUser, HiOutlineSearch, HiOutlineShoppingCart, HiMenu, HiX, HiChevronRight } from "react-icons/hi";
import { useState } from "react";

const NavBar = () => {

  let stylesLInk = "block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4",
    stylesIcons = "inline-block text-xl px-3 py-3 leading-none  text-white border-white hover:border-transparent hover:rounded-full hover:text-teal-500 hover:bg-white delay-150 mt-4 lg:mt-0",
    iconChevronDown = <HiChevronDown className="lg:inline-block" />,
    staylesItemsLinks = " text-gray-400 hover:text-white delay-150 border-b border-gray-100 h-16 mt-1 lg:mt-9 leading-5",
    stylesContainerItems = "flex flex-col justify-evenly bg-emerald-600 border-t mt-7 h-85 w-40";

  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
    
  const [visibleHamburger, setVisibleHamburger] = useState(false);
  
  const handleVisibleHamburger = ()=>{
    if (visibleHamburger) {
      setVisibleHamburger (false)
    }else{
      setVisibleHamburger(true)
    }
  }


  const itemsBelleza =[
    {item: "Perfumería", id: 1},
    {item: "Maquillaje", id: 2},
    {item: "Cuidado de la piel", id: 3},
    {item: "Electro belleza", id: 4}
  ]
  const itemsCuidadoPersonal = [
    {item: "Highiene Personal", id: 1},
    {item: "Cuidado Oral", id: 2},
    {item: "Cuidado Capilar", id: 3},
    {item: "Adultos", id: 4}
  ]

  const itemsMamasBebes = [
    {item: "Lactancia", id: 1},
    {item: "Post-maternidad", id: 2},
    {item: "Accesorios de bebé", id: 3},
    {item: "Higiene de bebé", id: 4},
    {item: "Nutrición Infalntil", id: 5}
  ]
  const itemsSaludFarm = [
    {item: "Medicamentos", id: 1},
    {item: "Farmacia", id: 2},
    {item: "Deportes y Nutrición", id: 3},
    {item: "Electrosalud", id: 4},
    {item: "Salud Sexual", id: 5}
  ]

  const itemsMovile = [
    {item:"Belleza", id: 1},
    {item:"Cuidado Personal", id: 2},
    {item:"Bebés y Mamás", id: 2},
    {item:"Salud y Farmacia", id: 4},
    {item:"Ofertas", id: 5},
  ]

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-emerald-600 p-6 mx-auto">
        <div className="w-4/5 lg:w-auto flex items-center justify-between flex-shrink-0 text-lime-500 mr-6 pb-3">
          <span className="font-semibold text-xl tracking-tight">Farmazziti</span>

        {/* iconos modo movile */}

          <div className="lg:hidden mx-auto flex tracking-tight">
            <a href="#" className={stylesIcons}><HiOutlineUser /></a>
            <a href="#" className={stylesIcons}><HiOutlineSearch /></a>
            <a href="#" className={stylesIcons}><HiOutlineShoppingCart /></a>
          </div>
        </div>

        {/*boton hamburguesa*/}
        <div className="block lg:hidden">
          <button id='boton' onClick={handleVisibleHamburger} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            {visibleHamburger ? <HiX className="fill-current h-3 w-3 delay-1000"/> : <HiMenu className="fill-current h-3 w-3 delay-1000"/>}
          </button>
        </div>

        <div id='menu' className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="w-full flex flex-col-reverse flex-wrap lg:flex-row lg:justify-end">
       
        {/* visibilidad modo movile(boton hamburguesa) */}

         {visibleHamburger && <div className="text-md pt-2 lg:flex-grow h-96">
              {itemsMovile.map(i => <button className="text-teal-200 hover:text-white w-full flex justify-between border-t border-gray-300 my-4">
                <span key={i.id} className="py-4">{i.item}</span>  <HiChevronRight className="text-2xl"/>
              </button>)}
            </div>}

          {/* visibilidad modo desktop */}

            <div className="pt-2 flex flex-grow justify-evenly invisible lg:visible max-h-8">
              <button className={stylesLInk} onMouseOver={()=>setVisible(true)} onMouseOut={()=>setVisible(false)}>
                Belleza y Perfumería{iconChevronDown}
                {visible && <div  className={stylesContainerItems}>
                {itemsBelleza.map(i => <a key={i.id} className={staylesItemsLinks}>{i.item}</a>)}
                </div>}
              </button>
              <button className={stylesLInk} onMouseOver={()=>setVisible2(true)} onMouseOut={()=>setVisible2(false)}>
                Cuidado Personal{iconChevronDown}
                {visible2 && <div className={stylesContainerItems}>
                {itemsCuidadoPersonal.map(i => <a key={i.id} className={staylesItemsLinks}>{i.item}</a>)}
                </div>}
              </button>
              <button className={stylesLInk} onMouseOver={()=>setVisible3(true)} onMouseOut={()=>setVisible3(false)}>
                Bebés y Mamás{iconChevronDown}
                {visible3 && <div className={stylesContainerItems}>
                {itemsMamasBebes.map(i => <a key={i.id} className={staylesItemsLinks}>{i.item}</a>)}
                </div>}
              </button>
              <button className={stylesLInk} onMouseOver={()=>setVisible4(true)} onMouseOut={()=>setVisible4(false)}>
                Salud y Farmacia{iconChevronDown}
                {visible4 && <div className={stylesContainerItems}>
                {itemsSaludFarm.map(i => <a key={i.id}className={staylesItemsLinks}>{i.item}</a>)}
                </div>}
              </button>
              <a href="#responsive-header" className={stylesLInk}>
                Ofertas
              </a>
            </div>

          {/* iconos modo desktop */}

            <div className="invisible lg:visible max-h-px">
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