testNumber = 233

function isInFibonacci(num){

    var fibo = [0, 1] // Establece estado inicial de fibonacci
    var sum = 0 // Variável usada para adicionar novos número à sequencia

    while(true){

        var a = fibo[fibo.length - 1] // Último número da sequencia
        var b = fibo[fibo.length - 2] // Penúltimo número da sequencia
        sum = a + b // Soma dos dois últimos números da squencia
        fibo.push(sum) // Adicionando a soma no array original, padrão de fibonacci criado
        console.log(fibo) // Fazendo log da soma para verificar veracidade do programa

        if(fibo.includes(num)){ // Checando se o número inputado já está na sequência
            console.log(`O número ${num} está na sequencia`) // Informa que já está inserido e quebra o loop
            break
        }else{
            if(a > num){ // Checa se o número inserido é menor que o último número da sequência. Se for então o número não faz parte da sequência
                console.log(`O número ${num} não está na sequencia`)
                break
            }
        }
        
    }

    return `O número ${num} foi verificado`
}

isInFibonacci(testNumber)