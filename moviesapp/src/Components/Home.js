import React, { useEffect,useState} from 'react'
import axios from 'axios'
import "./Home.css"
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
function Home() {
const [moviedetails,setMoviedetails] = useState(null)
 useEffect(()=>{
axios.get("https://api.tvmaze.com/search/shows?q=all").then(res=>setMoviedetails(res.data))
 },[])
 console.log("llll",moviedetails)
  return (
   <div>
{moviedetails && moviedetails?.map((movie)=>
<Link to={`/moviedetails/${movie.show.id}`} style={{textDecoration:"none"}}>
<div className="movie_card" key={movie.show.id}>
  <div className="info_section">
    <div className="movie_header">
      <img className="locandina" src={movie?.show.image?.original}/>
      <h1>{movie.show.name}</h1>
      <h4>{movie.show.premiered.substring(0, 4)},{movie?.show.name}</h4>
      <span className="minutes">{movie?.show.averageRuntime} min</span>
      <p className="type">
  {movie.show.genres.map((genre, index) => (
    <React.Fragment  key={genre}>
      <span>{genre}</span>
      {index !== movie.show.genres.length - 1 && <span>,</span>}
    </React.Fragment>
  ))}
</p>

    </div>
    <div className="movie_desc">
  <p className="text">
    {movie.show.summary.replace(/<\/?[^>]+>/g, "").slice(0,300)}............
  </p>
</div>

  </div>
  <div className="blur_back" style={{background:`url(${movie?.show.image?.original})`}}></div>
</div>
</Link>
)}
 </div>
  )
}

export default Home
