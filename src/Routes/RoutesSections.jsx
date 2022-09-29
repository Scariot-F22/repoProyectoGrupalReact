import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import { itemsLinksNavBar } from "../Data/dataLinksNavbar";
import { routesSections } from "../Data/dataRoutesSections";

const{itemsBelleza,itemsCuidadoPersonal,itemsMamasBebes,itemsSaludFarm} = itemsLinksNavBar

const RoutesSections = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                {routesSections.map(route => <Route path={route.path} element={route.element} key={route.id}/>)}
                {itemsBelleza.map(route => <Route path={route.path} element={route.element} key={route.id}/>)}
                {itemsCuidadoPersonal.map(route => <Route path={route.path} element={route.element} key={route.id}/>)}
                {itemsMamasBebes.map(route => <Route path={route.path} element={route.element} key={route.id}/>)}
                {itemsSaludFarm.map(route => <Route path={route.path} element={route.element} key={route.id}/>)}
            </Routes>
            <Footer />
        </Router>
    )
}

export default RoutesSections