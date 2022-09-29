import BebesMamas from "../Components/Sections/BebesMamas";
import Belleza from "../Components/Sections/Belleza";
import CuidadoPersonal from "../Components/Sections/CuidadoPersonal";
import SaludFarm from "../Components/Sections/SaludFarm";
import Home from "../Components/Home/Home";

export const routesSections = [
    { path: "/", element: <Home />, id: 1 },
    { path: "/Belleza", element: <Belleza />, id: 2 },
    { path: "/Bebes_y_Mamas", element: <BebesMamas />, id: 3 },
    { path: "/Cuidado_Personal", element: <CuidadoPersonal />, id: 4 },
    { path: "/Salud_y_Farmacia", element: <SaludFarm />, id: 5 },
]