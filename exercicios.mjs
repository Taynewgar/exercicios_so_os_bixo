import {personagens, ingredientes} from './dados.mjs'

console.log("* Exercício 1 *")
 /** ------------ 
 * Crie uma função que retorne o todos os personagens do tipo MYSTIQUE.
 */

    const misticos = personagens.filter(char => char.type === "MYSTIQUE")
    console.log(JSON.stringify(misticos, null, 3))
console.log()

console.log("* Exercício 2 *")
/**
  ------------ 
 * Crie uma função que retorne o todos os personagens POR um tipo. 
 */
console.log()

console.log("* Exercício 3 *")
/**
------------
 * Crie uma função que retorne apenas os personagens que possuam poderes cuja raridade LEGENDARY 
 */
const charsPoderesLendarios = personagens.filter(char => char.powers.reduce((possess, power) => {
    if(power.rarity === "LEGENDARY")
    {
        possess = true;
    }
    return possess
},false))
console.log(JSON.stringify(charsPoderesLendarios, null, 3))
console.log()

console.log("* Exercício 4 *")
/**
 * ------------
 * Crie uma função que retorne APENAS os poderes de todos os personages
 */
const soPoderes = personagens.map(char => {return{"Powers": char.powers}})
console.log(JSON.stringify(soPoderes, null, 3))
console.log()

console.log("* Exercício 5 *")
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
const charsPorTipo = personagens.reduce((obj, char) => {
    if (obj[char.type]){
        obj[char.type].push(char)
    }else {
        obj[char.type] = [char]
    }
    return obj
},{})
console.log(JSON.stringify(charsPorTipo, null, 3))
console.log()

 console.log("* Exercício 6")
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
const poderesPorRaridade = personagens.reduce((obj, char) => {
    char.powers.forEach(power => obj[power.rarity] ? obj[power.rarity].push(power) : obj[power.rarity] = [power])
    return obj;
},{})
console.log(JSON.stringify(poderesPorRaridade, null, 4))
console.log()

console.log("* Exercício 7 *")
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
const poderTotalDeCadaChar = personagens.map(char => {
    const totalPower = char.powers.reduce((soma, power) => { return soma += parseInt(power.power)},0)
    return {"name": char.full_name, "totalPower": totalPower}
})
console.log(JSON.stringify(poderTotalDeCadaChar,null, 3))
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
 *  2. Ingredientes cozidos(cooked) não precisarão serão os acompanhamentos(garnish)
 *  3. Ingredientes crus(raw) serão cozidos no ensopado
 *  4. Ingredientes que são para beber
 * Ex:
 *  {
 *    garnish: [todos os ingredientes cozidos],
 *    stew: [todos os ingredientes utilizados no ensopado],
 *    toDrink: [todas as bebidas da mesa]
 *  }
 */