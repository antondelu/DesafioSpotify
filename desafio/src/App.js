import './App.css';
import { Navbar } from './Components/navbar/navbar';
import { AlbumContainer } from '../src/Container/containerAlbum/containerAlbum.jsx';




function App() {
  return (
    <div className="App">
    <Navbar/>
    <AlbumContainer/>
    </div>
  );
}

export default App;
