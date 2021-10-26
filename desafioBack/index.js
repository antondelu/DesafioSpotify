const express = require('express');
const app = express();
const mysql = require('mysql');
const myconn = require( 'express-myconnection');
const PORT = 4000
const  SpotifyWebApi  =  require ( 'spotify-web-api-node' ) ;
var spotifyApi = new SpotifyWebApi();

app.set(PORT, process.env.PORT || 4001)

const dbOption= {
    host: 'localhost',
    port: 3306 ,
    user: 'root',
    password: '',
    database: 'desafio'
};

var  spotifyApi  =  new  SpotifyWebApi ( { 
    clientId : '3d9e935cddc24839811de5ce7a4c2096' , 
    clientSecret : '5dbec82124684614b0a0a8f29a92a29a' , 
    redirectUri : 'localhost:4000'
} ) ;

spotifyApi.setAccessToken( 'BQDtiVt7rtwduxQJM25gY3DkMMwPhH1MbiJtmG9KeQXm4rqiWaGOZ6dubks87wJV72o9-X-UFBqydjzxnoMHJGWNDFZ1Iu_aHS82QJGeD71Xig58sIKWvZApU34I1hzMjxiBkSu4odfAanSlxWTytneG4mo-Jd96gsqTj9JFp0iUjCvoyNkeUqY' ) ;


//// middlewares ////
app.use(myconn(mysql,dbOption,"single"));
app.use(express.json());

/// Rutas ////
app.get('/:artista', async (req,res)=>{
    const {artista} = req.params ;
      const data = await  spotifyApi.searchArtists(artista);
      console.log(data.body.artists.items);
      res.send(data.body);
}) ;


app.get('/', (req,res)=>{
    res.send('Houlak')
})

app.listen(PORT, () => {
    console.log(`Servidor web escuchando en el puerto ${PORT}`)
})