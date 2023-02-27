import inquirer from 'inquirer'
import chalk from 'chalk'

//Lista de propriedades pré definidas para fins de teste.
let array = ["align-items", "background-color", "border-radius", "justify-content", "color", "display"]

propriedadesCSS()
//Funcao para exibir o menu com as opçoes de escolha para o usuário.
function propriedadesCSS() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer? Utilize as setas UP e DOWN para navegar entre as opções e pressione ENTER para executar.',
        choices: [
          'Exibir a lista de propriedades CSS',
          'Adicionar novas propriedades CSS a lista',
          'Remover propriedades CSS da lista',
          'Encerrar/Sair',
        ],
      },
    ])
    .then((answer) => {
      let action = answer['action']

      if (action === 'Exibir a lista de propriedades CSS') {
        funcaoMostarLista()
      } else if (action === 'Adicionar novas propriedades CSS a lista') {
        funcaoAdicionar()
      } else if (action === 'Remover propriedades CSS da lista') {
        funcaoRemover()
      } else if (action === 'Encerrar/Sair') {
        console.log('Encerrar/Sair')
        funcaoEncerrar()

      }
    })
}
//Funcao para exibir a lista com os itens adicionados ou atualizada sem os itens removidos.
function funcaoMostarLista() {
  console.log("Confira abaixo a lista de propriedades CSS atualizada:", array.sort())
  funcaoVoltar()
}
//Funcao para adicionar os itens digitados pelo usuário na lista.
function funcaoAdicionar() {
  inquirer
    .prompt([
      {
        name: 'insert',
        message: 'Digite a propriedade que deseja adicionar:',
      },
    ])
    .then((answer) => {
      let propriedadeCSS = answer['insert']

      if (!array.includes(propriedadeCSS)) {
        array.push(propriedadeCSS)
        console.log(chalk.green('SUCESSO! Você adicionou uma nova propriedade CSS na lista.'))
        console.log("Confira abaixo a lista de propriedades CSS atualizada:", array.sort())
        return funcaoVoltar()
      }
      else {
        console.log(chalk.bgRed.black('FALHA! A propriedade digitada não pode ser removida. Confira os possíveis motivos: - A propriedade foi digitada incorretamente. - A propriedade não está na lista.'))
        funcaoAdicionar()
      }
    })
}
//Funcao remove da lista os itens digitados pelo usuário. Necessário que os itens estejam na lista senão retorna uma mensagem de FALHA.
function funcaoRemover() {
  inquirer
    .prompt([
      {
        name: 'remove',
        message: 'Digite a propriedade que deseja remover:',
      },
    ])
    .then((answer) => {
      let removeCSS = answer['remove']

      if (array.includes(removeCSS)) {
        let findFor = removeCSS
        let index = array.indexOf(findFor);
        while (index >= 0) {
          array.splice(index, 1);
          index = array.indexOf(findFor);
        }

        console.log(chalk.bgGreen.black('SUCESSO! Você adicionou uma nova propriedade CSS na lista.'))
        console.log("Confira abaixo a lista de propriedades CSS atualizada:", array.sort())
        return funcaoVoltar()
      }
      else {
        console.log(chalk.bgRed.black('FALHA! A propriedade digitada não pode ser removida. Confira os possíveis motivos: - A propriedade foi digitada incorretamente. - A propriedade não está na lista.'))
        console.log("Confira abaixo a lista de propriedades CSS atualizada:", array.sort())
        return funcaoVoltar()
      }
    })
}
//Funcao de retorno. Oferece a opção de voltar ao menu de inicio.
function funcaoVoltar() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'back',
        message: 'Deseja retornar ao menu incicial?',
        choices: [
          'Sim. Desejo voltar.',
          'Não. Desejo encerrar.',
        ],
      },
    ])
    .then((answer) => {
      let back = answer['back']

      if (back === 'Sim. Desejo voltar.') {
        propriedadesCSS()
      } else if (back === 'Não. Desejo encerrar.') {
        console.log('Encerrar/Sair')
        funcaoEncerrar()
      }
    })
}
//Funcao para sair e encerrar a aplicação.
function funcaoEncerrar() {
  console.log("Confira abaixo a lista de propriedades CSS atualizada:", array.sort())
  console.log(chalk.bgYellow.black('Encerrando a aplicação.'))
  process.exit()

}

