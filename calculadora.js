const loopOperacoesBasicas = ['1', '2', '3', '4']
const loopOperacoesAvancadas = ['5']

function Receber_Valor(){
let escolhaNumero 

    do{
        escolhaNumero = prompt('Tabela de operações:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Porcentagem\nDigite a opção desejada: ')
    
        if(!loopOperacoesAvancadas.includes(escolhaNumero) || !loopOperacoesBasicas.includes(escolhaNumero)){
            alert('O item selecionado é inválido!')
            escolhaNumero = prompt('Tabela de operações:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Porcentagem\nDigite a opção desejada: ')
        }
    } while(!loopOperacoesAvancadas.includes(escolhaNumero) || !loopOperacoesBasicas.includes(escolhaNumero))

    Efetuar_Operacoes(escolhaNumero)

}

function Efetuar_Operacoes(escolhaNumero){
    //variaveis base
    let numeroPrimeiro, numeroSegundo, resultado
   
    if(loopOperacoesBasicas.includes(escolhaNumero)){
        numeroPrimeiro = parseFloat(prompt('Digite o valor do primeiro número: '))
        numeroSegundo = parseFloat(prompt('Digite o valor do segundo número: '))
        
        switch(escolhaNumero){ 
            case '1':
                resultado = numeroPrimeiro + numeroSegundo
                alert(`A soma é igual à ${resultado.toFixed(2)}`)
                break
                
            case '2':
                resultado = numeroPrimeiro - numeroSegundo
                alert(`A subtração é igual à ${resultado.toFixed(2)}`)
                break
    
            case '3': 
                resultado = numeroPrimeiro * numeroSegundo
                alert(`A multiplicação é igual à ${resultado.toFixed(2)}`)
                break
    
            case '4':
                resultado = numeroPrimeiro / numeroSegundo
                alert(`A divisão é igual à ${resultado.toFixed(2)}`)
                break
        }
    }else if(loopOperacoesAvancadas.includes(escolhaNumero)){
        switch (escolhaNumero) {
            case '5':
                numeroPrimeiro = parseFloat(prompt('Digite o valor do número: '))
                let porcentagemTipo = prompt('Tabela de tipos:\n1 - Acréscimo\n2 - Decréscimo\nDigite a opção desejada: ')
                
                while (porcentagemTipo !== '1' && porcentagemTipo !== '2') {
                    alert('Seleção inválida. Digite um valor numérico')
                    porcentagemTipo = prompt('Tabela de tipos:\n1 - Acréscimo\n2 - Decréscimo\nDigite a opção desejada: ')
                }

                let porcentagem = parseFloat(prompt('Digite a porcentagem: '))

                while (isNaN(porcentagem)) {
                    alert('Porcentagem inválida. Digite um valor numérico.')
                    porcentagem = parseFloat(prompt('Digite a porcentagem: '))
                }

                if (porcentagemTipo === '1') {
                    resultado = (1 + porcentagem / 100) * numeroPrimeiro
                    alert(`O resultado com acréscimo é: ${resultado.toFixed(2)}`)
                } else if (porcentagemTipo === '2') {
                    resultado = (porcentagem / 100) * numeroPrimeiro
                    alert(`O resultado com decréscimo é: ${resultado.toFixed(2)}`)
                }
                break
        }
    }
}

Receber_Valor();