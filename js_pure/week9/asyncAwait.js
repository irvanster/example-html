/**
 * block trycatch itu penggunaannya umum, karena semua hal yang berkaitan dengan error apapun entah itu variable, undefined, dan apapun yang berkaitan dengan data yang tidak ada deklarasinya, kita bisa custom error
 
*/

// memakai callback Function
// import {getData} from './fetcher.js'
// const getUsers = async (cb)=> { //✅
//     try {
//         const result = await cb('https://jsonplaceholder.typicode.com/users')
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// } 
// getUsers(getData)


// tanpa memakai
import fetch from 'node-fetch'
const getUsers = async ()=> { //✅
    // async/await = data handling untuk asynchronous
    // tapi kalo kita hanya memakai try catch itu bisa semuanya
    try {
        const result = await new Promise((resolve, reject) => {
            let success = false
            if(success){
                resolve([{title: 'kimia'}, {title: 'ipa'}, {title: 'mtk'}])
            }else{
                reject(new Error('failed because server error'))
            }
        })
        console.log(result)
        // result.then().catch ❌
    } catch (error) {
        console.log(error, 'laryy ada error')
    }
} 
getUsers()

// metode pemanggilannya aja dari promise
// result.then.catch

//tryCatch
//handle error
// try {
//     nameAndini    //name andini itu undefined
// } catch (error) {
//     console.log('nameAndini itu ga ada definenya tuh')
// }