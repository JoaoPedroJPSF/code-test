function invertString(word){
    var inverted = '' // String que será substituída pela palavra invertida
    for(var i = word.length - 1; i >= 0; i--){ // Pegando o tamanho da palavra inserida e subtraindo 1 para começar a contagem invertida do Index certo
        inverted = inverted + word[i] // Concatenando na string a letra começando do fim
    }
    return inverted // Retornando a String invertida
}


