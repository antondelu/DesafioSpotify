import "./navbar.css";
import { useState, useContext } from "react";
import { ArtistContext } from "../../context/context";
import axios from "axios";

export const Navbar = () => {
  const [ArtistAlbum, setArtistAlbum] = useState();
  const stateContext = useContext(ArtistContext);
  async function getArtistAsync(album) {
    await axios
      .get("/:" + stateContext.artist, {})
      .then(async function (res) {
        let data = await res.data;
        stateContext.setAlbums(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async function sendData(album) {
    await axios
      .post("/:" + stateContext.artist, {})
      .then(async function (res) {
        let data = await res.data;
        stateContext.setAlbums(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const onChangeHandler = (event) => {
    setArtistAlbum(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    stateContext.setArtist(ArtistAlbum);
    getArtistAsync(ArtistAlbum);


  };

  return (
    <nav class="navbar navbar-light bg-dark">
      <div class="container-fluid">
        <p class=" nameNavbar">
          <b>SpotyHoulak.</b>
        </p>
        <form class="d-flex" onSubmit={onSubmitHandler}>
          <input
            onChange={onChangeHandler}
            nombre="artista"
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};
