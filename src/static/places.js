const places = [
  {
    title: 'API The Movie Database',
    description:
      "En este sitio utilice la API The Movie Database. Usando para realizar la interfaz web, modulos de Css y la Api Fetch para manipular a la Api pública. Se trata de un buscador de peliculas, con una pequeña descripcion de las mismas. El Deploy es en la plataforma Netlify, que se encuentra vinculado a mi cuenta GitHub.",
    imageUrl: process.env.PUBLIC_URL + '/assets/MovieSearch.jpg',
    time: 1500,
    urlDirection:'https://api-movies-db-calderondev.netlify.app'
  },
  {
    title: 'CryptoCoin',
    description:
      'En este sitio utilice a API CoinGecko. Con la ayuda del framework Bootstrap, pude diseñar la interfaz grafica y la libreria Axios para manipular la api pública. Se trata de un sitio que muestra en tiempo real el valor de las diferentes cryptomonedas, como asi tambien, realizar busquedas especificas. El Deploy es en la plataforma Netlify.',
    imageUrl: process.env.PUBLIC_URL + '/assets/CryptoCoin.jpg',
    time: 1500,
    urlDirection:'https://cryptocoin-calderondev.netlify.app'
  },
];

export default places;
