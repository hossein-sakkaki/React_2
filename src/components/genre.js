import React, { Component } from 'react'
import style from '../styles/style.module.css'

class Genre extends Component {
    render() { 
        const {genre} = this.props;
        return (
            <>
                <button className={style.genre_box}>
                    {genre}
                </button>
            </>
        );
    }
}
 
export default Genre;