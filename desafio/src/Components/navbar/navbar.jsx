import './navbar.css'
import { useState } from "react";

  export const Navbar = ()=>{
    const [album, setAlbum]= useState ();
    
const onChangeHandler = (event)=>{
setAlbum(event.target.value);
}

const onSubmitHandler= (event)=>{
event.preventDefault();
console.log(`${album}`)

fetch('http:localhost:4000/',{
  method: 'Post',
  body: `${album}`
})
}

   return(      
<nav class="navbar navbar-light bg-dark">
  <div class="container-fluid">
    <p class=" nameNavbar"><b>Houlak.</b></p>
    <form class="d-flex" onSubmit={onSubmitHandler}>
      <input  onChange={onChangeHandler} nombre="artista"  class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
)};