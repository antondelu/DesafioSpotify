 import "./card.css"
 import pic from "./pic.png"
 export const Album = () => {
     return(
        <div className="card" >
        <img src={pic} className="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title fontCard">Card title</h5>
          <p class="card-text fontCard">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
     )
 }