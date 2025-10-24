
//TRAZ FILME POR ID
// async function getMovieById(id) {
//     try {
//       const response = await fetch(`http://localhost:3000/movies/${id}`);
  
//       if (!response.ok) {
//         throw new Error(`Filme com ID ${id} não encontrado`);
//       }
  
//       const data = await response.json();
//       console.log('Filme encontrado:', data);
//       return data;
//     } catch (error) {
//       console.error('Erro ao buscar filme:', error.message);
//     }
//   }
  
//   getMovieById(4);


//TRAZ FILME POR DIRETOR
async function getMoviesByDirector(directorID) {
    try {
      const response = await fetch(`http://localhost:3000/movies`);
      if (!response.ok) {
        throw new Error('Erro ao buscar filmes');
      }
  
      const movies = await response.json();
      const filteredMovies = movies.filter(m => m.directorID === String(directorID));
  
      if (filteredMovies.length === 0) {
        console.log(`Nenhum filme encontrado para o diretor ID ${directorID}`);
        return [];
      }
  
      console.log(`Filmes do diretor ID ${directorID}:`);
      filteredMovies.forEach(movie => {
        console.log('======================');
        console.log(`Título: ${movie.title}`);
        console.log(`Duração: ${movie.duration} min`);
        console.log(`Rating: ${movie.rating}`);
        console.log('======================');
      });
  
      return filteredMovies;
  
    } catch (error) {
      console.error('Erro ao buscar filmes:', error.message);
    }
  }
  
  getMoviesByDirector(2);