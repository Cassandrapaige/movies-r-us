import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

import './star-rating.styles.scss'

const StarRating = ({movie}) => {
    const avg = (num) => Math.round(num);
    
    return (
        <div>{avg(movie.vote_average) > 0 ? (
            <div>
                <StarRatingComponent 
                    name="rating" 
                    editing={false}
                    renderStarIcon={() => <span> ★ </span>}
                    starCount={10}
                    starColor={'#ffbb0b'}
                    value={avg(movie.vote_average)}
                />
            </div> ) : <p className = 'zero-rating'>This movie hasn't been rated yet</p>
        }  </div>
    )
}

export default StarRating;