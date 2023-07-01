import React, { useState } from 'react'
import style from '../styles/style.module.css'
import slider_1 from '../images/slider_1.jpg'
import slider_2 from '../images/slider_2.jpg'
import slider_3 from '../images/slider_3.jpg'
import slider_4 from '../images/slider_4.jpg'

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1));
    };
    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? 3 : prevSlide - 1));
    };
    return (
        <div className={style.slider_container}>
            <div className={style.slider_track} style={{ transform: `translateX(-${currentSlide * 25}%)` }}>
                <div className={style.slide}>
                    <img src={slider_1} alt="Slide 1" />
                </div>
                <div className={style.slide}>
                    <img src={slider_2} alt="Slide 2" />
                </div>
                <div className={style.slide}>
                    <img src={slider_3} alt="Slide 3" />
                </div>
                <div className={style.slide}>
                    <img src={slider_4} alt="Slide 4" />
                </div>
            </div>
            <button className={`${style.slider_control} ${style.prev}`} onClick={prevSlide}>
                <i className="fa fa-chevron-left"></i>
            </button>
            <button className={`${style.slider_control} ${style.next}`} onClick={nextSlide}>
                <i className="fa fa-chevron-right"></i>
            </button>
        </div>
    );
};

export default Slider;