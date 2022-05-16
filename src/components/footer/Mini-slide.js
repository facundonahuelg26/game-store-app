import React from "react";
import { useSliderTranslate } from "./hook";
import { ImageMiniSd, ItemSlideSd, MiniSlideWrapper } from "./styled-components";

const images = [
  "https://res.cloudinary.com/dwsmc6rqr/image/upload/v1652203350/slider-doce_mersdg.webp",
  "https://res.cloudinary.com/dwsmc6rqr/image/upload/v1652203330/slider-once_wrbduu.webp",
  "https://res.cloudinary.com/dwsmc6rqr/image/upload/v1652203283/slider-ocho_inh39b.webp",
  "https://res.cloudinary.com/dwsmc6rqr/image/upload/v1652203259/slider-siete_jnvvek.webp",
  "https://res.cloudinary.com/dwsmc6rqr/image/upload/v1652203087/slider-dos_afqzmj.webp",
  "https://res.cloudinary.com/dwsmc6rqr/image/upload/v1652203236/slider-seis_xrvtur.webp",
  "https://res.cloudinary.com/dwsmc6rqr/image/upload/v1652203199/slider-cinco_a26f5a.webp",
  "https://res.cloudinary.com/dwsmc6rqr/image/upload/v1652203176/slider-cuatro_lqtqq5.webp",
  "https://res.cloudinary.com/dwsmc6rqr/image/upload/v1652203140/slider-tres_r9flfh.webp",
  "https://res.cloudinary.com/dwsmc6rqr/image/upload/v1652203087/slider-dos_afqzmj.webp",
  "https://res.cloudinary.com/dwsmc6rqr/image/upload/v1652203199/slider-cinco_a26f5a.webp",
];

export const MiniSlide = ({ isInView}) => {
  const time = 2000;
  const { slideShow } = useSliderTranslate(time);
  
  return (
    <MiniSlideWrapper ref={slideShow}>
      {images.map((image, index) => (
       <ItemSlideSd key={index}>
         {isInView ? <ImageMiniSd src={image} alt="images" /> : <p>Cargando</p>}
        </ItemSlideSd>))}
    </MiniSlideWrapper>
  );
};


