import React, {Component} from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import style from './styles/style.module.css';

import Home from './components/home';
import Movies from './components/movies';
import AboutUs from './components/about-us';

class App extends Component {
    render() { 
        return (
            <>
                <div className={style.navbar_container}>
                    <ul className={style.navbar}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/movies">Movies</Link></li>
                        <li><Link to="/about-us">About Me</Link></li>
                    </ul>
                </div>
                <div className={style.body}>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/movies' element={<Movies />}></Route>
                        <Route path='/about-us' element={<AboutUs />}></Route>
                    </Routes>
                </div>
            </>
        );
    }
}

export default App;