import bebes from "../fotos/bebes.jpg";
import maternidad from "../fotos/maternidad.webp";
import accesoriosBebes from "../fotos/accesoriosBebes.webp";
import nutricioninfantil from "../fotos/nutricioninfantil.webp"
import perfumeria from "../fotos/perfumeria.jpg";
import maquillaje from "../fotos/maquillaje.webp";
import cremaCara from "../fotos/cremaCara.jpeg";
import electroBelleza from "../fotos/electroBelleza.webp";
import desodorantes from "../fotos/desodorantes.jpg";
import cepillos from "../fotos/cepillos.webp";
import cabello from "../fotos/cabello.webp";
import pañalesAdultos from "../fotos/pañalesAdultos.jpg";
import salud from "../fotos/salud.webp";
import preservativos from "../fotos/preservativos.jpg"
import electroSalud from "../fotos/electroSalud.webp";
import nutricionDeportes from "../fotos/nutricionDeportes.webp";

export const dataCardSections = {
    bebesMamas:[
        {id:2, img: maternidad, title: "post-maternidad", description: "protectores mamarios-apósitos-pezoneras-cremas",path: "maternidad"},
        {id:3, img: accesoriosBebes, title: "Accesorios de bebés", description: "mamaderas-chupetes-mordillos-sonajeros", path: "accesorios_bebes"},
        {id:4, img: bebes, title: "higiene de bebés", description: "pañales-toallas húmedas-jabones-shampoo-acondicionadores-cremas-óleos",path: "higiene_bebe"},
        {id:5, img: nutricioninfantil, title: "nutrición infantil", description: "Leches-fórmulas-alimentos",path: "nutricion"}
    ],
    belleza:[
        {id:1, img: perfumeria , title: "Perfumería", description: "hombres-mujeres-colonias-body splash"},
        {id:2, img: maquillaje, title: "Maquillaje", description: "ojos-rostro-labios-uñas"},
        {id:3, img: cremaCara, title: "Cuidado de la piel", description: "cremas faciales-cremas corporales-repelentes-protectores solares"},
        {id:4, img: electroBelleza, title: "Electro belleza", description: "afeitadoras y cortadoras de pelo-depiladoras eléctricas-planchas y bucleras-secadores de pelo-masajeadores y exfoliantes"}
    ],
    cuidadoPersonal:[
        {id:1, img: desodorantes, title: "Highiene Personal", description: "jabones-desodorantes-accesorios de afeitado y depilación-protección femenina"},
        {id:2, img: cepillos, title: "Cuidado Oral", description: "cepillos-hilos dentales-pastas dentales-enjuagues bucales-adhesivos dentales"},
        {id:3, img: cabello, title: "Cuidado Capilar", description: "shampoo y acondicionadores-tratamientos y reparaciones capilares-coloración"},
        {id:4, img: pañalesAdultos, title: "Adultos", description: "incontingencia-pañales y ropa interior-toallas húmedas"}
    ],
    saludFarmacia:[
        {id:1, img: nutricionDeportes, title: "nutricion y deportes", description: "suplementos dietarios,nutricionales y deportivos-fitnes"},
        {id:2, img: salud, title: "Farmacia", description: "primeros auxilios-pediculosis-"},
        {id:3, img: electroSalud , title: "Electro Salud", description: "termómetros-balanzas-tensiómetros-nebulizadores"},
        {id:4, img: preservativos, title: "Salud Sexual", description: "preservativos-lubricantes y geles íntimos"}
    ]
}
