
import { useNavigate } from "react-router-dom";
import react from "react";
import { Link } from "react-router-dom";





const Card=(movie)=>{



    let img_path="https://image.tmdb.org/t/p/w500";
    return(
        <>
       
            
            
       
             
                <div className="cards" >
                <Link to={`/movie/${movie.id}` } style={{textDecoration:"none", color:"white"}}>
                <img className="cards__img" src={img_path+movie.info.poster_path}  />
                <div className="cards__overlay">
                    <div className="card__title">{movie.info.title}</div>
                    <div className="card__runtime">
                        {movie?movie.release_date:""}
                        <span className="card__rating">{movie.info.vote_average}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{movie.info.overview}</div>
                </div>
                </Link>
            </div>
            
            
        </>
    )
}
export default Card;