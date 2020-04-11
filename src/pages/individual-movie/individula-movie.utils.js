/* ADD ICONS DEPENDING ON GENRE ARRAY */

export const switchGenre = (img) => {
    var genre = "";
  switch(img) {
    case 'Drama':
      genre = 'https://img.icons8.com/color/48/000000/drama.png'
      break;
    case 'History':
      genre= 'https://img.icons8.com/color/48/000000/coliseum.png'
      break;
    case 'Romance':
      genre= 'https://img.icons8.com/offices/48/000000/romantic-movies.png'
      break;
    case 'Action':
      genre = 'https://img.icons8.com/doodle/48/000000/boom.png'
      break;
    case 'Horror':
      genre= 'https://img.icons8.com/color/48/000000/horror.png'
      break;
    case 'Comedy':
      genre= 'https://img.icons8.com/color/48/000000/popeye.png'
      break;
    case 'Crime':
      genre=    'https://img.icons8.com/color/48/000000/walter-white.png'
      break;
    case 'Animation':
      genre= 'https://img.icons8.com/color/48/000000/woody-woodpecker.png'
      break;
    case 'Family':
        genre= 'https://img.icons8.com/color/48/000000/family-two-women.png'
    break;
    case 'Music':
        genre= 'https://img.icons8.com/color/48/000000/us-music.png'
    break;
    case 'Thriller':
        genre= 'https://img.icons8.com/ultraviolet/40/000000/scream.png'
    break;
    case 'Mystery':
        genre= 'https://img.icons8.com/color/48/000000/sherlock-holmes.png'
    break;
    case 'Adventure':
        genre= 'https://img.icons8.com/color/48/000000/hot-air-balloon.png'
    break;
    default:
      genre= 'https://img.icons8.com/doodle/48/000000/documentary.png'
      break;
  }
    return genre;
  }