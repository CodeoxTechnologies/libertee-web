import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import ProductCard from "./ProductCard";
import { productsList } from "..";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
const ProductList = () => {
    const [products, setProducts] = useState(productsList)
    const [slidesPerView, setSlidesPerView] = useState(4);
    const [ navigationFlag, setNavigationFlag] = useState(false)
    useEffect = () => {
        if (window.innerWidth <= 768) {
            setSlidesPerView(1.5)
            setNavigationFlag(false)
        }
        else if (window.innerWidth <= 1024) {
            setSlidesPerView(2)
            setNavigationFlag(true)
        }
        else if (window.innerWidth <= 1280) {
            setSlidesPerView(3)
            setNavigationFlag(true)
        }
        else {
            setSlidesPerView(4)
            setNavigationFlag(true)
        }
    }
    return (
        <Swiper
            spaceBetween={40}
            slidesPerView={slidesPerView}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={navigationFlag}
            modules={[Navigation]}
        >
            {
                products.map((product, index) =>
                    <SwiperSlide key={index} >
                        <ProductCard product={product} />
                    </SwiperSlide>
                )
            }
        </Swiper>
    )
}
export default ProductList;