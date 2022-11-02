import { Paper } from "@mui/material";
import React, { useState } from "react";



const ProductList = () => {
    const [products, setProducts] = useState([
        {
            name: "Rabbit Vibrator",
            price: 2899,
            image: '',
            color: ["red", "blue", "green"],
            features: ["waterproof", "5 patterns 5 intensities", "medical grade silicone"],
        },
        {
            name: "Rabbit Vibrator",
            price: 2899,
            image: '',
            color: ["red", "blue", "green"],
            features: ["waterproof", "5 patterns 5 intensities", "medical grade silicone"],
        },
        {
            name: "Rabbit Vibrator",
            price: 2899,
            image: '',
            color: ["red", "blue", "green"],
            features: ["waterproof", "5 patterns 5 intensities", "medical grade silicone"],
        },
        {
            name: "Rabbit Vibrator",
            price: 2899,
            image: '',
            color: ["red", "blue", "green"],
            features: ["waterproof", "5 patterns 5 intensities", "medical grade silicone"],
        },
        {
            name: "Rabbit Vibrator",
            price: 2899,
            image: '',
            color: ["red", "blue", "green"],
            features: ["waterproof", "5 patterns 5 intensities", "medical grade silicone"],
        },
        {
            name: "Rabbit Vibrator",
            price: 2899,
            image: '',
            color: ["red", "blue", "green"],
            features: ["waterproof", "5 patterns 5 intensities", "medical grade silicone"],
        },
        {
            name: "Rabbit Vibrator",
            price: 2899,
            image: '',
            color: ["red", "blue", "green"],
            features: ["waterproof", "5 patterns 5 intensities", "medical grade silicone"],
        },
    ])
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className="" style={{ display: 'flex', flexDirection: 'row' }}>
        </div>
    )
}
export default ProductList;