// Forma menos usual
// let newArray = new Array 

// console.log(newArray)



// Loop for   ===================================================
// const frutas = ['maçã', 'mamão', 'uva']
// const frutasarray = new Array('maçã')

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i])
// }




// ForEach =======================================================
// let frutas = ['maçã', 'banana', 'laranja', 'uva']

// frutas.forEach((fruta, indice) => {
//     console.log(`Fruta ${indice + 1}: ${fruta}`)
// })


// com While =====================================================
let frutas = ['maçã', 'banana', 'laranja', 'uva']
let i = 0

while (i < frutas.length) {
    console.log(`Fruta ${i + 1}: ${frutas[i]}`)
    i++ // incrementa o contador para evitar loop infinito
}