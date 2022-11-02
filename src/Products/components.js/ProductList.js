import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import ProductCard from "./ProductCard";
import prodImage1 from '../../assets/images/Tracys-Dog-22.jpg';
import prodImage2 from '../../assets/images/le-wand-massager-18.png';
import prodImage3 from '../../assets/images/28db68fe-69eb-43cb-bb30-ca9fe6ce3662._CR0,0,1200,1200_PT0_SX220__-30.jpg';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
const ProductList = () => {
    const [products, setProducts] = useState([
        {
            name: "Rabbit Vibrator",
            price: 2899,
            image: prodImage1,
            color: [{color: "#FF005C", active:true},{ color:"#5F008", active: false},{color:"#0060D1", active:false } ],
            activeColor: "#FF005C",
            features: ["waterproof", "5 patterns 5 intensities", "medical grade silicone"],
        },
        {
            name: "Rabbit Vibrator",
            price: 2899,
            image: prodImage2,
            color: [{color: "#FF005C", active:true},{ color:"#5F008", active: false},{color:"#0060D1", active:false } ],
            activeColor: "#FF005C",
            features: ["waterproof", "5 patterns 5 intensities", "medical grade silicone"],
        },
        {
            name: "Rabbit Vibrator",
            price: 2899,
            image: prodImage3,
            color: [{color: "#FF005C", active:true},{ color:"#5F008", active: false},{color:"#0060D1", active:false } ],
            activeColor: "#FF005C",
            features: ["waterproof", "5 patterns 5 intensities", "medical grade silicone"],
        },
        {
            name: "Rabbit Vibrator",
            price: 2899,
            image: prodImage1,
            color: [{color: "#FF005C", active:true},{ color:"#5F008", active: false},{color:"#0060D1", active:false } ],
            activeColor: "#FF005C",
            features: ["waterproof", "5 patterns 5 intensities", "medical grade silicone"],
        },
        {
            name: "Rabbit Vibrator",
            price: 2899,
            image: prodImage2,
            color: [{color: "#FF005C", active:true},{ color:"#5F008", active: false},{color:"#0060D1", active:false } ],
            activeColor: "#FF005C",
            features: ["waterproof", "5 patterns 5 intensities", "medical grade silicone"],
        },
        {
            name: "Rabbit Vibrator",
            price: 2899,
            image: prodImage3,
            color: [{color: "#FF005C", active:true},{ color:"#5F008", active: false},{color:"#0060D1", active:false } ],
            activeColor: "#FF005C",
            features: ["waterproof", "5 patterns 5 intensities", "medical grade silicone"],
        },
        {
            name: "Rabbit Vibrator",
            price: 2899,
            image: prodImage1,
            color: [{color: "#FF005C", active:true},{ color:"#5F008", active: false},{color:"#0060D1", active:false } ],
            activeColor: "#FF005C",
            features: ["waterproof", "5 patterns 5 intensities", "medical grade silicone"],
        },
    ])
    const [slidesPerView, setSlidesPerView] = useState(4);
    useEffect = () => {
        if (window.innerWidth <= 768) {
            setSlidesPerView(1)
        }
        else if (window.innerWidth <= 1024) {
            setSlidesPerView(2)
        }
        else if (window.innerWidth <= 1280) {
            setSlidesPerView(3)
        }
        else {
            setSlidesPerView(4)
        }
    }
    return (
        <Swiper
            spaceBetween={40}
            slidesPerView={slidesPerView}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={true}
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