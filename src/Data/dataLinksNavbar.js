import Perfumeria from "../Components/SubSections/belleza/Perfumeria";
import Maquillaje from "../Components/SubSections/belleza/Maquillaje";
import CuidadoPiel  from "../Components/SubSections/belleza/CuidadoPiel";
import ElectroBelleza from "../Components/SubSections/belleza/ElectroBelleza";
import Maternidad from "../Components/SubSections/bebesMamas/Maternidad";
import AccesoriosBebe from "../Components/SubSections/bebesMamas/AccesoriosBebe";
import HigieneBebe  from "../Components/SubSections/bebesMamas/HigieneBebe";
import Nutricion from "../Components/SubSections/bebesMamas/Nutricion";
import HigienePersonal from "../Components/SubSections/cuidadoPersonal/HigienePersonal";
import CuidadoOral from "../Components/SubSections/cuidadoPersonal/CuidadoOral";
import Pelo from "../Components/SubSections/cuidadoPersonal/Pelo";
import Adultos from "../Components/SubSections/cuidadoPersonal/Adultos";
import ElectroSalud from "../Components/SubSections/saludFarmacia/ElectroSalud";
import Farmacia from "../Components/SubSections/saludFarmacia/Farmacia";
import NutricionDeportes from "../Components/SubSections/saludFarmacia/NutricionDeportes";
import SaludSexual from "../Components/SubSections/saludFarmacia/SaludSexual";
import { ShoppingContext } from "../Cart/ShoppingReducer";


export const itemsLinksNavBar = {
    itemsBelleza: [
        { item: "Perfumería", id: 1, path: "perfumeria", element: <Perfumeria />},
        { item: "Maquillaje", id: 2, path: "maquillaje", element: <Maquillaje /> },
        { item: "Cuidado de la piel", id: 3, path: "cuidado_de_piel", element: <CuidadoPiel />},
        { item: "Electro belleza", id: 4, path: "electro_belleza", element: <ElectroBelleza />}
    ],
    itemsCuidadoPersonal: [
        { item: "Highiene Personal", id: 1, path: "higiene_personal", element: <HigienePersonal />},
        { item: "Cuidado Oral", id: 2, path: "cuidado_oral", element:<CuidadoOral /> },
        { item: "Cuidado Capilar", id: 3, path: "pelo", element: <Pelo /> },
        { item: "Adultos", id: 4, path: "adultos", element: <Adultos /> }
    ],
    itemsMamasBebes: [
        { item: "Post-maternidad", id: 2, path: "maternidad", element: <Maternidad /> },
        { item: "Accesorios de bebé", id: 3, path: "accesorios_bebes", element: <AccesoriosBebe /> },
        { item: "Higiene de bebé", id: 4, path: "higiene_bebe", element: <HigieneBebe /> },
        { item: "Nutrición Infalntil", id: 5, path: "nutricion", element: <Nutricion /> }
    ],
    itemsSaludFarm: [
        { item: "Farmacia", id: 2, path: "farmacia", element: <Farmacia /> },
        { item: "Deportes y Nutrición", id: 3, path: "deportes_nutricion", element: <NutricionDeportes /> },
        { item: "Electrosalud", id: 4, path: "electrosalud", element: <ElectroSalud /> },
        { item: "Salud Sexual", id: 5, path: "salud_sexual", element: <SaludSexual /> }
    ]
}