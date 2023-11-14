
// let num = [5 ,8 ,2 ,9 ,3]
// num.sort()
// // num [3] =6
// // console.log(`Nosso vetor é o ${num}`)

// // let num = [5, 8, 2, 9, 3]
// // num.sort ()
// // num.push(1)
// // console.log (num)
// // console.log (`O vetor tem, ${num.length} posiçoes`)
// // console.log (`o primeiro valor do vetor é ${num[0]}`)
// // for (let pos=0; pos < num.length; pos++){
// //     console.log (num[pos])
// // }

// for (pos in num) {
//     console.log (num[pos])
// }
let num = [5, 8, 2, 9, 3]
let pos = num.indexOf (6)
console.log (`O valor 8 esta na posição ${pos}`)
if (pos -- -1) {
    console.log ("o valor não foi encontrado")
} else {
    console.log ("encontramos ")
}