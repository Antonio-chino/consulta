const colors = require('colors')
const read = require('readline-sync')

class Automovil {
  constructor () {
    this.cilindros = 0
    this.marca = ''
    this.modelo = ''
    this.tipo = ''
    this.año = ''
    this.color = ''
  }

  agregar () {
    console.log(`Accediste al Metodo ${colors.yellow.bold('Agregar')}`)
    console.log(`El valor de la propiedad ${('Marca')} es ${this.marca} ${('Modelo')} es ${this.modelo} ${('Tipo')} es ${this.tipo} ${('Año')} es ${this.año} ${('Cilindros')} es ${this.cilindros} ${('Color')} es ${this.color}`)
  }
  consultar () {
    console.log(`Accediste al Metodo ${colors.yellow.bold('Consultar')}`)
  }
}

module.exports = Automovil
