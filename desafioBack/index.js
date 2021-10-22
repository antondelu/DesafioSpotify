const express = require('express');
const app = express();
const mysql = require('mysql');
const myconn = require( 'express-myconnection');
const PORT = 4000
var  SpotifyWebApi  =  require ( 'spotify-web-api-node' ) ;


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

spotifyApi.setAccessToken( 'BQBWj-XhKzfTtg0nOQlaIld6dXncst_qOlBw2oDybMopRqyu6ae0eswNLz_Vg2CQMVALu2rIer_3FcsBuybHyOOcc__NKIpab9Gc0nQWdOqDyeT6k6o5q5FAXPQY7OOZ2d-Y_TMWmyGWs5QrXNZ0bzrC9P_zijyBpsyLk4xUm6ieQd4bTe0LjGs' ) ;





// middlewares ////
app.use(myconn(mysql,dbOption,"single"));

// Rutas ////////////
app.get('/', (req ,res)=>{
    res.send(spotifyApi.searchArtists('El kuelgue')
   .then(function(data) {
     console.log('Search artists by "El kuelgue"', data.body.artists.items);
   }, function(err) {
     console.error(err);
   }));
  
});



app.listen(PORT, () => {
    console.log(`Servidor web escuchando en el puerto ${PORT}`)
})