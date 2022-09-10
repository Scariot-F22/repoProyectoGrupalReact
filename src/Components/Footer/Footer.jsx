import { stylesNavBar } from "../NavBar/StylesNav";
import { dataIconsFooter, itemsFooter } from "../../Data/dataFooter";

const Footer = () => {
    return (
        <footer className="bg-emerald-600">
            <div className="grid grid-cols-2 gap-8 px-6 py-6 md:grid-cols-4">
                <div className={sytlesFooter.divCol}>
                    <h2 className={sytlesFooter.h2}>institucional</h2>
                    <ul className="flex flex-col ">
                        {itemsFooter.institucional.map(item => <a href="#" className={sytlesFooter.anchor} key={item.id}>{item.title}</a>)}
                    </ul>
                </div>
                <div className={sytlesFooter.divCol}>
                    <h2 className={sytlesFooter.h2}>Contactos</h2>
                    <ul className="flex flex-col ">
                        {itemsFooter.contacto.map(item => <a href="#" className={sytlesFooter.anchor} key={item.id}>{item.title}</a>)}
                    </ul>
                </div>
                <div className={sytlesFooter.divCol}>
                    <h2 className={sytlesFooter.h2}>legales</h2>
                    <ul className="flex flex-col ">
                        {itemsFooter.legales.map(item => <a href="#" className={sytlesFooter.anchor} key={item.id}>{item.title}</a>)}
                    </ul>
                </div>
                <div className={sytlesFooter.divCol}>
                    <h2 className={sytlesFooter.h2}>Servicios</h2>
                    <ul className="flex flex-col ">
                        {itemsFooter.servicios.map(item => <a href="#" className={sytlesFooter.anchor} key={item.id}>{item.title}</a>)}
                    </ul>
                </div>
            </div>
            <div className="px-4 py-2 bg-emerald-600 flex flex-col md:flex-row md:items-center md:justify-evenly">
                <span className="text-sm text-slate-200 text-center">© 2022 <a href="https://flowbite.com/">Flowbite™</a>. All Rights Reserved.
                </span>
                <div className="mt-4 space-x-6 md:mt-0 text-center">
                    {dataIconsFooter.map(item => <a href="#" className={stylesNavBar.stylesIcons} key={item.id}>{item.icon}</a>)}
                </div>
            </div>
        </footer>
    )
}

export default Footer



const sytlesFooter = {
    divCol: "w-4/5 text-center capitalize",
    h2: "mb-6 text-md font-semibold text-black",
    anchor: "hover:underline hover: underline-offset-8 hover:decoration-slate-400 mb-4 text-gray-400"
}