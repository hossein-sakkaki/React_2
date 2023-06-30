import React, { Component } from 'react';
import style from '../styles/style.module.css';
import axios from 'axios';
import Movie from './movie';

class Movies extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies : [],
            isError: false,
        };
    }

    componentDidMount(){
        this.getMoviesData();
    }
    getMoviesData = () => {
        axios.get('movies.json')
            .then(res => {this.setState({
                movies: res.data
            })})
            .catch(error => this.setState({ isError: true }));
    };

    render() { 
        const {movies, isError} = this.state;
        return (
            <>
                <div>
                    {
                        isError ? 
                        (
                            <div className={style.error}>
                                <h1>Error...</h1>
                            </div>
                        ):(
                            <div className={style.movie_container}>
                                <div className={style.search_bar}>
                                    <div className={style.search_box}>
                                        <input type="" name="" value="" />
                                    </div>
                                    <div className={style.genre_choice}>
                                        documentry
                                    </div>
                                </div>
                                <div className={style.movies}>

                                    {movies.map((movie) => (
                                        <Movie key={movie.Id} title={movie.Title} year={movie.Year} thumbnail={movie.Poster} genre={movie.Genre} actor={movie.Actors}/>
                                    ))}
                                </div>
                            </div>
                            
                        )
                    }
                </div>
            </>
        );
    }
}
 
export default Movies;