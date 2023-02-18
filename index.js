import inquirer from 'inquirer'
import chalk from 'chalk'


let array = ["align-items", "background-color", "border-radius", "justify-content", "color", "display"]

propriedadesCSS()

function propriedadesCSS() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'O que você deseja fazer?',
        choices: [
          'Exibir as propriedades CSS',
          'Adicionar propriedades CSS',
          'Remover propriedades CSS',
          'Sair',
        ],
      },
    ])
    .then((answer) => {
      let action = answer['action']

      if (action === 'Exibir as propriedades CSS') {
        showList()
      } else if (action === 'Adicionar propriedades CSS') {
        insertItens()
      } else if (action === 'Remover propriedades CSS') {
        removeItens()
      } else if (action === 'Sair') {
        console.log('Sair')
        sair()

      }
    })
}

function back() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'back',
        message: 'Retornar ao menu incicial?',
        choices: [
          'Sim',
          'Não',
        ],
      },
    ])
    .then((answer) => {
      let back = answer['back']

      if (back === 'Sim') {
        propriedadesCSS()
      } else if (back === 'Não') {
        console.log('Sair')
        sair()
      }
    })
}

function showList() {
  console.log("Propriedades CSS:", array.sort())
  back()

}

function insertItens() {
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
        console.log(chalk.green('A propriedade foi removida com sucesso.!'))
        console.log("Propriedades CSS:", array.sort())
        return back()
      }
      else {
        console.log(chalk.bgRed.black('A propriedade foi removida anteriormente. Por favor, selecione outra.'))
        insertItens()
      }
    })
}

function removeItens() {
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

        console.log(chalk.bgGreen.black('A propriedade foi removida com sucesso.'))
        console.log("Propriedades CSS:", array.sort())
        return back()
      }
      else {
        console.log(chalk.bgRed.black('A propriedade foi removida anteriormente. Por favor, selecione outra.'))
        console.log("Propriedades CSS:", array.sort())
        return back()
      }
    })
}
function sair() {
  console.log("Propriedades CSS:", array.sort())
  console.log(chalk.bgYellow.black('Encerrando a aplicação.'))
  process.exit()

}

