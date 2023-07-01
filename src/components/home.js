import React from 'react';
import style from '../styles/style.module.css';
import Slider from './slider';

const Home = () => {
    return (
        <>
            <div className={style.home_page_container}>
                <Slider />
            </div>
        </>
    );
};
 
export default Home;