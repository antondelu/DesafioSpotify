import './App.css';
import { Navbar } from './Components/navbar/navbar';
import { AlbumContainer } from '../src/Container/containerAlbum/containerAlbum.jsx';
import { ArtistContext, ArtistContextComponent } from './context/context';
import { useContext } from 'react';



function App() {
 const stateContext= useContext (ArtistContext)
  return (
    <ArtistContextComponent>
    <div className="App">
    <Navbar/>
    <AlbumContainer/>
    </div>
    </ArtistContextComponent>
  );
}

export default App;
