/** require */
// alt1
// exports.generateToken = (email, password)=> {
//     return {
//         email,
//         password
//     }
// }

// exports.generateEmail = ()=> {
//     return null
// }

//alt2
// const generateToken = (email, password)=> {
//     return {
//         email,
//         password
//     }
// }

// const generateEmail = ()=> {
//     return null
// }
// module.exports = {
//     generateToken,
//     generateEmail
// }

/** import/export (es6) */
import jwt from 'jsonwebtoken'
import {SECRET_KEY} from '../constant/variable.js'
const generateToken = (email, password)=> {
    if(email =='email@gmail.com' && password =='pw123') {
        const token = jwt.sign({email, password}, SECRET_KEY)
        // email = `aha${email}`
        // pass = `inipass${password}`
        // const merge = `${email}${password}`
        // if(email =='aha') {
        //     delete aha
        // }
        return {
            data: token
        }
    }
    return `${email} atau password salah.`
}
const verifyToken = (tokenFromUser)=> {
    let userData
    let books = [
        {title: 'gatot'},
        {title: 'kaca'},
    ]
    if(tokenFromUser !== '') {
        jwt.verify(tokenFromUser, SECRET_KEY, function(err, decoded) {
            if(!err) {
                userData = decoded
                console.log({
                    userLogginAs: userData.email,
                    books
                })
                
            }else{
                console.log(err)
            }
            
        })
    }else{
        return `Token Kosong`
    }
}

const generateEmail = ()=> {
    return null
}



export {
    generateEmail,
    generateToken,
    verifyToken
}




// export const generateToken = (email, password)=> {
//     return {
//         email,
//         password
//     }
// }

// export const generateEmail = ()=> {
//     return null
// }


