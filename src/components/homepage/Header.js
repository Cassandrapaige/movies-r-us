import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

	componentDidMount = () => {
		axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=70dcc58955640e84f5c3ea8e6d2b9ade')
			.then((res) => {
			this.setState({
				movies: res.data.results[0]
			});
		}).catch(err => console.error(err.message));
	}

    render () {
        const movies = this.state.movies;
		return (
			<Fragment>
            <header className = 'main-header'>
                 <img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} className='movie-header-img' alt={movies.original_title}/>
                 <div className = 'header-content'>
                     <h1 className='header-title'>Where <span className= 'slogan'>Movies</span> Are A Big Deal</h1>
					 <a href="#all-movies"><i className="fas fa-arrow-circle-down"></i></a>
                 </div>
            </header>
		    </Fragment>
        )
	}
}

export default Header;
