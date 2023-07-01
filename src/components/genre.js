import React, { Component } from 'react'
import style from '../styles/style.module.css'

class Genre extends Component {
    render() { 
        const {genre} = this.props;
        return (
            <>
                <div className={style.genre_box}>
                    {genre}
                </div>
            </>
        );
    }
}
 
export default Genre;