
import Card from "./Components/Card/Card";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import BebesMamas from "./Components/Sections/BebesMamas";
import Belleza from "./Components/Sections/Belleza";
import CuidadoPersonal from "./Components/Sections/CuidadoPersonal";
import SaludFarm from "./Components/Sections/SaludFarm";

function App() {
  return (
    <>
      <NavBar />
      {/* <Card /> */}
      {/* <Home /> */}
      {/* <BebesMamas/> */}
      {/* <Belleza /> */}
      {/* <CuidadoPersonal /> */}
      <SaludFarm />
      <Footer />
    </>
  );
}

export default App;
