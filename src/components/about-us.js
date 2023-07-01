import React, { Component } from 'react';
import style from '../styles/style.module.css';
import picture from '../images/pic_01.png'

class About_us extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <div className={style.about_container}>
                    <div className={style.about_contain}>
                        <h1>- About Me -</h1>

                        <h3>Name: <span>Hossein Sakkaki</span></h3>
                        <h3>Website: <span><a href="https://sakkaki.com">sakkaki.com</a></span></h3>
                    </div>
                    <div className={style.picture_container}>
                        <img src={picture} alt="" />
                    </div>
                </div>
            </>
        );
    }
}
 
export default About_us;