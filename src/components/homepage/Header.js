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
                movies: res.data.results[2]
			});
		}).catch(err => console.error(err.message));
	}

    render () {
        const movies = this.state.movies;
		return (
		<Fragment>
            <header className = 'main-header' style= {{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movies.poster_path})`}}>
                 <div className = 'header-content'>
                     <h1 className='header-title'>Where <span className= 'slogan'>Movies</span> Are A Big Deal</h1>
                     <p>Browse through hundreds of movies or search for your favourites to find ones that are similar</p>
                 </div>
            </header>
		</Fragment>
        )
	}
}

export default Header;
