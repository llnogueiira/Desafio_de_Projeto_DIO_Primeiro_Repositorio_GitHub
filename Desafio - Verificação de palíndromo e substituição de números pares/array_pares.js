function substituiPares(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
            console.log(`Este item já é zero! Não precisa ser alterado`);
        } else if(array[i] % 2 === 0){
            console.log(`Substituindo ${array[i]} por zero!`);
            array[i] = 0;
        }
    }
    return array
}

let input = [1, 3, 4, 6, 80, 33, 23, 90]
let output = [1, 3, 0, 0, 0, 33, 23, 0]

console.log(substituiPares(input))
console.log("\n")
console.log(substituiPares(output))