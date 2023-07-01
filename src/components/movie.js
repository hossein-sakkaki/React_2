import React, { Component } from 'react';
import style from '../styles/style.module.css'

class Movie extends Component {
    render() { 
        const {title, year, thumbnail, genre, director} = this.props;
        return (
            <>
                <div className={style.movie}>
                    <div>
                        <h2>{title}</h2>
                        <h5>[ {year} ]</h5>
                    </div>
                    <img src={thumbnail} alt={title} />
                    <div>
                        <div>
                            <span>Genres:</span>
                            <h4>{genre}</h4> 
                        </div>
                        <div>
                            <span>Director:</span>
                            <h4>{director}</h4>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
 
export default Movie;