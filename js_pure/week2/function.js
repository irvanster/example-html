// const greetings = require('./greetings')
// //declaration function ✅

// function doStuff(params) {
    
// }
// //arrow function ✅

// const doStuff = ()=> {

// }


// //expression function
// const doStuff = function(params) {
    
// }

/**
 * function itu berkaitan erat dengan yang namanya parameter dan argument
 * parameter: const doStuff = (params, paramsLain)=> {} (saat function menerima argument = paramenter)
 * argument: doStuff(argument, argumentLain) (saat melakukan pemanggilan function = argument)
 */

//  const doStuff = (params, paramsLain)=> { 
//     //  \n = sama aja kayak <br/> (new line/break)

//      return `ini params: ${params}\nini paramsLain: ${paramsLain}`
//  }
//  console.log(doStuff('argument 1', 'argument Lain'))
//  console.log(doStuff(argument, argumentLain))


// contoh pertama

const inputName = (name) => {
    return name
}
const greetings = (quote) => {
    const tambahan = 'massel itu temen saya.'
    return `${quote}, ${tambahan} Senang bertemu kalian semua!`
}
// const greetings = 'ini fungsi greeting'
const sayHello = (name, cb) => {
    // console.log(cb)
    const hello = `Hello Saya ${name} dan umurku 12`
    return cb(hello)
}

console.log(sayHello(inputName('Ari Wibowo'),greetings))

// const boldFormat = (boldText) => {
//     return boldText.replace(boldText)
// }
// const boldFormat = (boldText) => {
//     return boldText.replace(boldText)
// }
// const boldFormat = (boldText) => {
//     return boldText.replace(boldText)
// }
// const wordFormat = (word)=> {
//  const bold = boldFormat(word)
//  const italic = italicFormat(bold)
//  const final = finalFormat(italic)

//  return final
// }


// wordFormat('aku coba untuk memformat kata')













