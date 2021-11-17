//alt1
import {generateToken, verifyToken} from './modules/generate.js'
// import {generateToken as generateValidation, generateEmail} from './modules/generate.js'

const data = {email: 'email@gmail.com', password: 'pw123'}
const FormLogin = ({email, password}) => {
    return generateToken(email, password)
}

const GetBooks = (token) => {
    return verifyToken(token)
}

GetBooks(`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVtYWlsQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoicHcxMjMiLCJpYXQiOjE2MzcxMzk5ODF9.92PPHoLnhUIYLoSEFlhj3ODiXWbqnGGsmZxsIj6pzkk`)
// console.log(FormLogin(data))

// //alt2
// import generatePassword from './modules/generatePassword.js'

// const data = 'pw123'
// Generate.generateEmail
// const FormRegister = (data) => {
//     return generatePassword(data)
// }

// console.log(FormRegister(data))

// //alt3
// import Generate from './modules/generateAlt.js'

// const data = {email: 'email@gmail.com', password: 'pw123'}
// const FormLogin = ({email, password}) => {
//     return Generate.generateToken(email, password)
// }

// console.log(FormLogin(data))


/** require example */
//alt1
// const generate = require('./modules/generate.js') //bakend
// // import {generateToken as generateValidation, generateEmail} from './modules/generate.js'

// const data = {email: 'email@gmail.com', password: 'pw123'}
// const FormLogin = ({email, password}) => {
//     return generate.generateToken(email, password)
// }

// console.log(FormLogin(data))
//alt2
// const {generateToken} = require('./modules/generate.js') //bakend
// // import {generateToken as generateValidation, generateEmail} from './modules/generate.js'

// const data = {email: 'email@gmail.com', password: 'pw123'}
// const FormLogin = ({email, password}) => {
//     return generateToken(email, password)
// }

// console.log(FormLogin(data))
//alt3
// const {generateToken} = require('./modules/generate.js') //bakend
// const {generateToken: generateValidation} = require('./modules/generate.js') //bakend
// import {generateToken as generateValidation, generateEmail} from './modules/generate.js'

// const data = {password: 'pw123'}
// const FormLogin = ({email='irvan@gmail.com', password}) => {
//     /**
//      * destructuring tambahan
//      * ketika kita menbuat {email: mail} itu berarti kita melakukan alias, yang diambil mail
//      * ketika kita membuat {email='email@gmail.com'} itu berarti kita membuat default value
//      */
//     return generateValidation(email, password)
//     // return generateToken(email, password)
//     // return generateToken(email, password)
// }

// console.log(FormLogin(data))