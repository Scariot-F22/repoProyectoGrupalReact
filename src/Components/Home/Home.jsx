import React from "react";
import saludfarm from "../../fotos/saludfarm.jpg";
import bebes from "../../fotos/bebes.jpg";
import libreria from "../../fotos/libreria.jpeg";
import perfumeria from "../../fotos/perfumeria.jpg";
import cosmetica from "../../fotos/cosmetica.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className=" bg-neutral-200">
      <div>
        <input className="w-9/12 p-4 mx-auto bg-gray-200 focus:ring-1 focus:ring-indigo-500 rounded-3xl" type="text" placeholder="Buscar..." />
        <div className="">
          <button className="p-4 text-white transform w-60 bg-emerald-400 rounded-3xl hover:scale-110 motion-reduce:transform-none hover:bg-emerald-400">BUSCAR</button>
        </div>
        {/* EL BUSCADOR INTELIGENTE LO TENGO QUE HACER CUANDO YA TENGAMOS LOS PRODUCTOS (LA API) */}
      </div>
      <br />
      <br />
      <br />
      <h3 className="font-serif text-4xl text-center sm:ml-2">O selecciona la seccion de su interes:</h3>
      <div className="ml-14 gallery md:ml-28">
        <img src={saludfarm} alt="saludfarm" />
        <img src={bebes} alt="bebes" />
        <img src={libreria} alt="libreria" />
        <img src={perfumeria} alt="perfumeria" />
        <img src={cosmetica} alt="cosmetica" />
      </div>
    </div>
  );
};

export default Home;
