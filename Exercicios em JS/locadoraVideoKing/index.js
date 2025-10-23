//GET
async function getMovies(){
    // fetch('http://localhost:3000/movies')
    // .then(response => response.json())
    // .then(data => console.log(data))
    try{
        const response = await fetch('http://localhost:3000/movies')
        const data = await response.json()
        console.log(data)
        
    }catch(e) {
        console.log('Erro: ', e)
    }
}
getMovies()
