import React, { Component } from 'react';
import style from '../styles/style.module.css';
import axios from 'axios';


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
        axios
            .get('../json/movies.json')
            .then(res => {
                // console.log('------------1-------------');
                this.setState({ movies: res });
            })
            .catch(error => this.setState({ isError: true }));
    };

    render() { 
        const {movies, isError} = this.state;
        return (
            <>
            <div className={style.movie}>
                
                {
                    isError ? (
                        <h1>Error...</h1>
                    ):(
                        movies.map(movie => (
                        <div key={movie.id}><h1>{movie.Title}</h1></div>   
                        ))
                    )
                }
            </div>
            </>
        );
    }
}
 
export default Movies;