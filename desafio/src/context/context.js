import { createContext,  useState } from "react";
export const ArtistContext = createContext();

export const ArtistContextComponent = ({children})=>{
const [artist, setArtist]= useState('');
const [Albums , setAlbums]= useState([]); 
console.log(artist);

return <ArtistContext.Provider value={{setArtist,artist,setAlbums,Albums}}>
    {children}
    </ArtistContext.Provider>
}