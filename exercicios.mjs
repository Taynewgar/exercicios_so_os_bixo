import {personagens, ingredientes} from './dados.mjs'

console.log("* Exercício 1 *")

const misticos = buscarTodosOsMisticos(personagens)
console.log(JSON.stringify(misticos, null, 3))

console.log()

console.log("* Exercício 2 *")

console.log()

console.log("* Exercício 3 *")

const charsPoderesLendarios = buscarPersonagensComPoderLendario(personagens)
console.log(JSON.stringify(charsPoderesLendarios, null, 3))

console.log()

/// Ajustar esse exercício
console.log("* Exercício 4 *")

const soPoderes = buscarTodosOsPoderes(personagens)
console.log(JSON.stringify(soPoderes, null, 3))

console.log()

console.log("* Exercício 5 *")

const charsPorTipo = listarPersonagensPorTipo(personagens)
console.log(JSON.stringify(charsPorTipo, null, 3))

console.log()

console.log("* Exercício 6")

const poderesPorRaridade = listarPoderesPorRaridade(personagens)
// console.log(JSON.stringify(poderesPorRaridade, null, 4))

console.log()

console.log("* Exercício 7 *")

const poderTotalDeCadaChar = calacularPoderTotalDoPersonagem(personagens)
console.log(JSON.stringify(poderTotalDeCadaChar,null, 3))

console.log()

console.log("* Exercício  8 *")

console.log()

console.log("* Exercício 9 *")

console.log()

console.log("* Exercício 10 *")

/** ------------ 
 * Crie uma função que retorne o todos os personagens do tipo MYSTIQUE.
 */

function buscarTodosOsMisticos(array){return array.filter(char => char.type === "MYSTIQUE")}

/**
  ------------ 
 * Crie uma função que retorne o todos os personagens POR um tipo. 
 */



/**
------------
 * Crie uma função que retorne apenas os personagens que possuam poderes cuja raridade LEGENDARY 
 */
function buscarPersonagensComPoderLendario(array){
    return array.filter(char => char.powers.reduce((possess, power) => { return power.rarity === "LEGENDARY" ? possess = true : possess },false))}

/**
 * ------------
 * Crie uma função que retorne APENAS os poderes de todos os personages
 */

function buscarTodosOsPoderes(array){return array.map(char => {return{"Powers": char.powers}})}

/** 
 * ------------
 * Crie uma função que retorne um objeto que contenha uma lista de personagens por tipo
 * * Ex:
 * { 
 *  MYSTIQUE: [todos os personagens desse tipo], 
 *  WARRIOR: [todos os personagens desse tipo], 
 *  ..., 
 * }
 */

function listarPersonagensPorTipo(array){
    return array.reduce((obj, char) => { obj[char.type] ? obj[char.type].push(char) : obj[char.type] = [char]; return obj },{})
}

 /**
    * ------------  
 * Crie uma função que retorne um objeto que contenha nome dos poderes por raridade 
 * Ex:  
 * { 
 *  COMMON: [todos os nomes dos poderes desse tipo], 
 *  UNCOMMON: [todos os nomes dos poderes desse tipo], 
 *  ..., 
 * } 
 */

 // Licença!!! me senti fódÃO :D
function listarPoderesPorRaridade(array){ return array.reduce((obj, char) => { 
    char.powers.forEach(power => obj[power.rarity] ? obj[power.rarity].push(power) : obj[power.rarity] = [power]); return obj;
},{})}

/**
 * ------------ 
 * Crie uma função que retorne uma lista de objetos que contenha a soma de todos os poderes de um personagem 
 * Ex:  
 * [ 
 *  { 
 *    name: Zezinho Espadeiro, 
 *    totalPower: 170, 
 *  }, 
 *  { 
 *   ... 
 *  } 
 * ] 
 */

function calacularPoderTotalDoPersonagem(array) { return array.map(char => {
    const totalPower = char.powers.reduce((soma, power) => { return soma += parseInt(power.power)},0)
    return {"name": char.full_name, "totalPower": totalPower}
})}

/**
 * Exercício 8
 * ------------
 * Crie uma função que retorne todos os ingredientes crus(raw) que não estejam podres(rotten)
 */

/**
 * Exercício 9
 * ------------
 * Crie uma função que retorne um objeto contendo os ingredientes bons e ruins
 * Ex:
 *  {
 *    good: [todos os ingredientes bons],
 *    rottens: [todos os ingredientes podres]
 *  }
 */

/**
 * Exercício 10
 * ------------
 * Crie uma função que retorne um objeto contendo os ingredientes que usaremos no ensopado(stew) e também os que serão usados como acompanhamento.
 * Condições:
 *  1. Ingredientes podres serão descartados
 *  2. Ingredientes cozidos(cooked) serão os acompanhamentos(garnish)
 *  3. Ingredientes crus(raw) serão cozidos no ensopado
 *  4. Ingredientes que são para beber
 * Ex:
 *  {
 *    garnish: [todos os ingredientes cozidos],
 *    stew: [todos os ingredientes utilizados no ensopado],
 *    toDrink: [todas as bebidas da mesa]
 *  }
 */