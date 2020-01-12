const dados = require('./dados')

exports.teste = function(){
  dados.tabuleiro.map(propriedade => {
    console.log(propriedade)
  })
}