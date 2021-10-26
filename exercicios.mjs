import {personagens, ingredientes} from './dados.mjs'

const mistico = "MYSTIQUE"
const guerreiro = "WARRIOR"
const orc = "ORC"
const refeicao = {"garnish":[], "stew": [], "toDrink":[]}

const exercicio_1 = buscarTodosOsMisticos(personagens)
const exercicio_2 = buscarPersonagensPorTipo(personagens, orc)
const exercicio_3 = listarPersonagensComPoderLendario(personagens)
const exercicio_4 = buscarTodosOsPoderes(personagens)
const exercicio_5 = listarPersonagensPorTipo(personagens)
const exercicio_6 = listarPoderesPorRaridade(personagens)
const exercicio_7 = calcularPoderTotalDoPersonagem(personagens)
const exercicio_8 = buscarIngredientesCrusFrescos(ingredientes)
// da pra melhorar o 9
const exercicio_9 = listarIngredientesBonsERuins(ingredientes)
// da pra melhorar o 10
const exercicio_10 = preparandoRefeição(ingredientes, refeicao)

console.log(JSON.stringify(exercicio_1, null, 3))


/** ------------ 
 * Crie uma função que retorne o todos os personagens do tipo MYSTIQUE.
 */

function buscarTodosOsMisticos(array){return array.filter(char => char.type === "MYSTIQUE")}

/**
  ------------ 
 * Crie uma função que retorne o todos os personagens POR um tipo. 
 */

function buscarPersonagensPorTipo(array, type){return array.filter(char => char.type === type)}

/**
------------
 * Crie uma função que retorne apenas os personagens que possuam poderes cuja raridade LEGENDARY 
 */
function listarPersonagensComPoderLendario(array){
    return array.filter(char => char.powers.reduce((possess, power) => { return power.rarity === "LEGENDARY" ? possess = true : possess },false))}

/**
 * ------------
 * Crie uma função que retorne APENAS os poderes de todos os personages
 */

// function buscarTodosOsPoderes(array){return array.map(char => {return{"Powers": char.powers}})}
function buscarTodosOsPoderes(array){
    return {"Powers": array.reduce((newArray, char) => {char.powers.forEach(power => newArray.push(power)); return newArray},[])}}

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

function calcularPoderTotalDoPersonagem(array) { return array.map(char => {
    const totalPower = char.powers.reduce((soma, power) => { return soma += parseInt(power.power)},0)
    return {"name": char.full_name, "totalPower": totalPower}
})}

/**
 * Exercício 8
 * ------------
 * Crie uma função que retorne todos os ingredientes crus(raw) que não estejam podres(rotten)
 */

function buscarIngredientesCrusFrescos(array){
    return array.filter(item => item.status === "raw" && !item.isRotten)
}

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

function listarIngredientesBonsERuins(array){
    return array.reduce((obj, item) => {
        // item.isRotten ? obj["good"].push(item) : obj["rotten"].push(item);
        if (!item.isRotten){
            if(obj["good"]){
                obj["good"].push(item)
            }
            else{
                obj["good"] = [item]
            }
        }else{
            if(obj["rotten"]){
                obj["rotten"].push(item)
            }
            else{
                obj["rotten"] = [item]
            }
        }
        return obj },{})
}

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

function preparandoRefeição(array, obj){
    
    return array.reduce((newObj, item) => {
        if (!item.isRotten) {
            if(item.status === "cooked") {                         
                newObj.garnish.push(item)
                
            } else if (item.status === "raw") {                            
                newObj.stew.push(item)
                
            } else {
                newObj.toDrink.push(item)
            }
        }
        return newObj;
    },obj)
}