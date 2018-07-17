const colors = require('colors')
const read = require('readline-sync')
const Automovil = require('./automovil.js')
const menu = ['Agregar', 'Consultar']

console.log(`${colors.white.bold('================')}`)
console.log(`${colors.white.bold('MENU DE OPCIONES')}`)
console.log(`${colors.white.bold('================')}`)

let auto = new Automovil()

let opcion = 1
while (menu[opcion] !== undefined) {
  opcion = read.keyInSelect(menu, `${colors.yellow.bold('Elige una opcion del menu?')}`)
  console.log('Ok, tu seleccionste la opción ' + menu[opcion] + ' del Menu.')
  switch (menu[opcion]) {
    case 'Agregar':

      auto.marca = read.question('Marca: ')
      auto.modelo = read.question('Modelo: ')
      auto.tipo = read.question('Tipo: ')
      auto.año = read.question('Ano: ')
      auto.cilindros = read.question('Cilindros: ')
      auto.color = read.question('Color: ')
      auto.agregar()
      break

    case 'Consultar':
      auto.consultar()
      break
  }
}
read.question('Haz salido del sistema, presiona cualquier tecla para terminar !!!')
