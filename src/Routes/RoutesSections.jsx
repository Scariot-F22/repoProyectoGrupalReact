import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from "../Components/NavBar/NavBar";
import Home from "../Components/Home/Home";
import BebesMamas from "../Components/Sections/BebesMamas";
import Belleza from "../Components/Sections/Belleza";
import CuidadoPersonal from "../Components/Sections/CuidadoPersonal";
import SaludFarm from "../Components/Sections/SaludFarm";
import Ofertas from "../Components/Sections/Ofertas";
import Footer from "../Components/Footer/Footer";

const RoutesSections = () => {
  return (
    <Router>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Belleza' element={<Belleza/>} />
            <Route path='/Bebes_y_Mamas' element={<BebesMamas/>} />
            <Route path='/Cuidado_Personal' element={<CuidadoPersonal/>} />
            <Route path='/Salud_y_Farmacia' element={<SaludFarm/>} />
            <Route path='/Ofertas' element={<Ofertas/>} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default RoutesSections