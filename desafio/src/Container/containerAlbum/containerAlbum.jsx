import { useContext } from "react";
import { Album } from "../../Components/album/album";
import { ArtistContext } from "../../context/context";
export const AlbumContainer = () => {
  const stateContext = useContext(ArtistContext);
  const result = stateContext.Albums;
  console.log(result);
  return (
    <div className="cardU">
      {result.map((e, index) => {
        return <Album Albums={e} key={index} />;
      })}
    </div>
  );
};
