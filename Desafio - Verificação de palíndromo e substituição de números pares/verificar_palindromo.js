function verifica_plalindromo(string){
    if(!string) return "string inexistente";

    let tratamentoString = string.replace(" ","")
    let compara = tratamentoString.split("").reverse().join("") === tratamentoString;

    if(compara == true){
        return `Esta frase é um palíndromo`
    }

    return `Esta frase NÃO é um palíndromo`
}

console.log(verifica_plalindromo("subi no onibus"));