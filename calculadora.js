// version 001

const loopOperacoesBasicas = ['1', '2', '3', '4']
const loopOperacoesAvancadas = ['5', '6', '7', '8']

function Receber_Valor() {
let escolhaNumero

escolhaNumero = prompt('Tabela de operações:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Porcentagem\n6 - Potenciação\n7 - Raíz Quadrada\n8 - Logaritimo\nDigite a opção desejada: ')
    
if(!loopOperacoesAvancadas.includes(escolhaNumero) && !loopOperacoesBasicas.includes(escolhaNumero)) {
    do {
    alert('Seleção inválida. Digite um valor numérico')
    escolhaNumero = prompt('Tabela de operações:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Porcentagem\n6 - Potenciação\n7 - Raíz Quadrada\n8 - Logaritimo\nDigite a opção desejada: ')
    } while (!loopOperacoesAvancadas.includes(escolhaNumero) && !loopOperacoesBasicas.includes(escolhaNumero))
}

Efetuar_Operacoes(escolhaNumero)
}

function Efetuar_Operacoes(escolhaNumero) {
    //variaveis base
    let numeroPrimeiro, numeroSegundo, resultado
   
    if(loopOperacoesBasicas.includes(escolhaNumero)) {
        numeroPrimeiro = Number(prompt('Digite o valor do primeiro número: '))

        while (isNaN(numeroPrimeiro)) {
            alert('Valor inválido. Digite um valor numérico.')
            numeroPrimeiro = Number(prompt('Digite o valor do primeiro número: '))
        }

        numeroSegundo = Number(prompt('Digite o valor do segundo número: '))

        while (isNaN(numeroPrimeiro)) {
            alert('Valor inválido. Digite um valor numérico.')
            numeroSegundo = Number(prompt('Digite o valor do segundo número: '))
        }

        
        switch(escolhaNumero) { 
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
    }else if(loopOperacoesAvancadas.includes(escolhaNumero)) {
        switch (escolhaNumero) {
            case '5':
                numeroPrimeiro = Number(prompt('Digite o valor do número: '))

                while (isNaN(numeroPrimeiro)) {
                    alert('Valor inválido. Digite um valor numérico.')
                    numeroPrimeiro = Number(prompt('Digite o valor do número: '))
                }

                let porcentagemTipo = prompt('Tabela de tipos:\n1 - Acréscimo\n2 - Decréscimo\nDigite a opção desejada: ')
                
                while (porcentagemTipo !== '1' && porcentagemTipo !== '2') {
                    alert('Seleção inválida. Digite um valor numérico')
                    porcentagemTipo = prompt('Tabela de tipos:\n1 - Acréscimo\n2 - Decréscimo\nDigite a opção desejada: ')
                }

                let porcentagem = Number(prompt('Digite a porcentagem: '))

                while (isNaN(porcentagem)) {
                    alert('Valor inválido. Digite um valor numérico.')
                    porcentagem = Number(prompt('Digite a porcentagem: '))
                }

                if (porcentagemTipo === '1') {
                    resultado = (1 + porcentagem / 100) * numeroPrimeiro
                    alert(`O resultado com acréscimo é: ${resultado.toFixed(2)}`)
                } else if (porcentagemTipo === '2') {
                    resultado = (1 - porcentagem / 100) * numeroPrimeiro
                    alert(`O resultado com decréscimo é: ${resultado.toFixed(2)}`)
                }
                break
            
            case '6':
                numeroPrimeiro = Number(prompt('Digite o valor número: '))

                while (isNaN(numeroPrimeiro)) {
                    alert('Valor inválido. Digite um valor numérico.')
                    numeroPrimeiro = Number(prompt('Digite o valor número: '))
                }

                let potenciaValor = Number(prompt('Digite a potência: '))
                
                while (isNaN(potenciaValor)) {
                    alert('Valor inválido. Digite um valor numérico.')
                    potenciaValor = Number(prompt('Digite a potência: '))
                }

                resultado = numeroPrimeiro ** potenciaValor

                alert(`${numeroPrimeiro} elevado à ${potenciaValor} é igual à: ${resultado.toFixed(2)}`)
                break

            case '7':
                    numeroPrimeiro = Number(prompt('Digite o valor do número: '))

                    while (isNaN(numeroPrimeiro)) {
                        alert('Valor inválido. Digite um valor numérico.')
                        numeroPrimeiro = Number(prompt('Digite o valor do número: '))
                    }
    
                    resultado = Math.sqrt(numeroPrimeiro)
    
                    alert(`A raiz quadrada de ${numeroPrimeiro} é: ${resultado.toFixed(3)}`)
                    break

            case '8':
                    numeroPrimeiro = Number(prompt('Digite o valor do número: '))

                    while (isNaN(numeroPrimeiro)) {
                        alert('Valor inválido. Digite um valor numérico.')
                        numeroPrimeiro = Number(prompt('Digite o valor do número: '))
                    }
    
                    resultado = Math.log(numeroPrimeiro)
    
                    alert(`O log de ${numeroPrimeiro} é: ${resultado.toFixed(3)}`)
                    break
        }
    }
}

Receber_Valor();