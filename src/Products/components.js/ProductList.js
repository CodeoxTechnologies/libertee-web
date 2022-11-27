import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ProductCard from "./ProductCard";
import { productsList } from "..";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
const ProductList = ({ products }) => {
  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const handleResize = () => {
    console.log("handleResize", window.innerWidth);
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);
  console.log("width", dimensions);
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={
        dimensions.width <= 768
          ? 1.5
          : dimensions.width <= 1024
          ? 2
          : dimensions.width <= 1200
          ? 3
          : 4
      }
      navigation={dimensions.width <= 768 ? false : true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {products.map((product, index) => (
        <SwiperSlide key={index}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default ProductList;
