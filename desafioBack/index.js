const express = require('express');
const app = express();
const mysql = require('mysql');
const myconn = require('express-myconnection');
const PORT = 4000
const SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi();

app.set(PORT, process.env.PORT || 4001)

const dbOption = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'desafio'
};

var spotifyApi = new SpotifyWebApi({
  clientId: '3d9e935cddc24839811de5ce7a4c2096',
  clientSecret: '5dbec82124684614b0a0a8f29a92a29a',
  redirectUri: 'localhost:4000'
});

spotifyApi.setAccessToken('BQDhR9osbO4Lvvc3qtVec_VDQya_OCLjlpBc05ncpc4w9Oi-Cf1-d60e88hHx8L56Ba2sFRsY8JgSZ1Wt77mzNyqKn_Jr8XGjOahyH9-PeGuxG9TR2htxoYFhzifyTrlq6VBZQCZInrzcLHhFZPKq7PWT6xO47aEMGsmkGN_irNw4PN3t9x6HaA');


//// middlewares ////
app.use(myconn(mysql, dbOption, "single"));
app.use(express.json());

/// Rutas ////
app.get('/:artista', async (req, res) => {
  const {
    artista
  } = req.params;
  const data = await spotifyApi.searchArtists(artista);
  const idArtist = data.body.artists.items[0].id;
  const dataArtist = await spotifyApi.getArtistAlbums(idArtist);
  await res.send(dataArtist.body.items);
});


// BD Connection
app.post('/', (request, response) => {
  request.getConnection((err, conn) => {
    !err ? response.send(err) :
      conn.query('INSERT INTO Registro set ?', [request.body], (err, rows) => {
        if (err) return response.send(err)

        response.send('registro inserted!')
      })
  })
})


app.listen(PORT, () => {
  console.log(`Servidor web escuchando en el puerto ${PORT}`)
})