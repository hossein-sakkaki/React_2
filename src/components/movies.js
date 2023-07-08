import React, { Component } from 'react';
import style from '../styles/style.module.css';
import axios from 'axios';
import Movie from './movie';
// import Genre from './genre';
import error404 from '../images/error-4.jpeg'

class Movies extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies : [],
            selectMovies: [],
            genres : [],
            selectGenre: [],
            isError: false,
            searchValue: ""
        };
    }

    componentDidMount(){
        this.getMoviesData();
    }

    getMoviesData = () => {
        axios.get('movies.json')
        .then(res => {
            this.setState({
                movies: res.data,
                selectMovies: res.data
        }, () => {
            this.getGenreData();
            })
        })
        .catch(error => this.setState({
            isError: true
        }))
    }

    getGenreData = () => {
        var movies = this.state.movies;
        var genreArray = [];
        for (let i = 0; i < movies.length; i++) {
            const element = movies[i];
            const genre = element.Genre.split(', ');
            for (let j = 0; j < genre.length; j++) {
                const element = genre[j];
                if (!genreArray.includes(element)) {
                    genreArray.push(element);
                } 
            } 
        }

        this.setState({
            genres: genreArray
        })
    };


    
    genreBoxHandler(genre){
        var temp = this.state.selectGenre.indexOf(genre)
        if (temp === -1) {
            this.state.selectGenre.push(genre)
        } else {
            this.state.selectGenre.splice(temp ,1)
        }

    }

    selectGenreHandler = (genre) => {
        this.genreBoxHandler(genre);
        let temp = [];
        this.state.selectGenre.map((genre) => {
            const choiceMovie = this.state.movies.filter((movie) =>
                movie.Genre.includes(genre)
            );
            choiceMovie.map((movie)=> {
                if (temp.indexOf(movie) === -1) {
                    temp.push(movie);
                }
            });
        });

        this.setState({
            selectMovies: temp,
        });
    };

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            selectMovies: this.state.movies.filter((movie) =>
                movie.Title.toLowerCase().includes(event.target.value.toLowerCase())
            ),
        });
    };

    render() { 
        const {selectMovies, isError, genres, searchValue} = this.state;
        return (
            <>
                {
                    isError ? 
                    (
                        <div className={style.error_container}>
                            <div className={style.error_contain}>   
                                <h1>Error 404 - File Not Found</h1>
                                <div className={style.error_img_container}>
                                    <img src={error404} alt="Error 404" />
                                </div>
                            </div>
                        </div>
                    ):(
                        <div className={style.movie_container}>
                            <div className={style.search_bar}>
                                <div className={style.search_box}>
                                    <input 
                                        placeholder='Search' 
                                        type="text" 
                                        name="searchValue" 
                                        value={searchValue} 
                                        onChange={this.changeHandler}/>
                                </div>
                                <div className={style.genre_choice}>
                                    {genres.map((genre, index)=>(
                                        <button 
                                            className={style.genre_box} 
                                            key={index} 
                                            onClick={() => this.selectGenreHandler(genre)}
                                        >
                                            {genre}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className={style.movies}>
                                {selectMovies.map((movie) => (
                                    <Movie 
                                        key={movie.Id} 
                                        title={movie.Title} 
                                        year={movie.Year} 
                                        thumbnail={movie.Poster} 
                                        genre={movie.Genre} 
                                        director={movie.Director}
                                    />
                                ))}
                            </div>
                        </div>
                    )
                }
            </>
        );
    }
}
 
export default Movies;