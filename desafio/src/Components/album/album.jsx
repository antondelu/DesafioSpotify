 import "./card.css"

 export const Album = (props) => {
     return(
    
      <div className="cardAlbum">
        <div className="card" >
        <img src={props.Albums.images[0].url} className="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title fontCard">{props.Albums.name}</h5>
          <p class="card-text fontCard">{props.Albums.release_date}.</p>
        </div>
      </div>
      </div>
    
     )
 }