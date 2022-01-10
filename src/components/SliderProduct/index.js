import React from 'react'
import Slider from "react-slick"; 

export default function SliderProduct() {
    const options = {
        arrow: true,
        dots: false,
        margin: 10,
        speed: 500,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        centerPadding: "0",
        rows: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <Slider {...options} >
            <div className="bg-primary p-5">
                <h1>agsdjhagshdga</h1>
            </div>
            <div className="bg-primary p-5">
                <h1>agsdjhagshdga</h1>
            </div>
            <div className="bg-primary p-5">
                <h1>agsdjhagshdga</h1>
            </div>
            <div className="bg-primary p-5">
                <h1>agsdjhagshdga</h1>
            </div>
            <div className="bg-primary p-5">
                <h1>agsdjhagshdga</h1>
            </div>
        </Slider>
    )
}
