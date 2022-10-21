import perfumeria from "../../fotos/perfumeria.jpg";
import pantene_home from "../../fotos/pantene_home.jpg";
import rimmel_home from "../../fotos/rimmel_home.jpg";
import corrector_home from "../../fotos/corrector_home.jpg";
import pampers_home from "../../fotos/pampers_home.jpg"
import suplementos_home from "../../fotos/suplementos_home.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "../../index.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Home = () => {
  return (
      <Swiper
        spaceBetween={300}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide><img src={pantene_home} className={imgHome} alt="pantene"/></SwiperSlide>
        <SwiperSlide><img src={rimmel_home}  className={imgHome} alt="" /></SwiperSlide>
        <SwiperSlide><img src={perfumeria}  className={imgHome} alt="" /></SwiperSlide>
        <SwiperSlide><img src={corrector_home} className={imgHome} alt="" /></SwiperSlide>
        <SwiperSlide><img src={pampers_home}  className={imgHome} alt="" /></SwiperSlide>
        <SwiperSlide><img src={suplementos_home}  className={imgHome} alt="" /></SwiperSlide>
      </Swiper>
  );
};

export default Home;

const imgHome = "object-cover w-full h-screen";