import fetch from 'node-fetch'


/**
 * 
 * node js ❌ fetch = node-fetch✅
 */
let isLoading = true
const fetcher = (url, options)=> {
    return new Promise((resolve, reject)=> {
        fetch(url).then(response => response.json()) //kemudian/selanjutnya
        .then(data => {
            if(Object.keys(data).length === 0) {
                reject('Route Salah')
            }
            resolve(data)
        }).catch((error)=> {
            console.log('aha')
        })
    })
}


// const getBooks =  new Promise()

// async function name(params) {
//     const result = await getBooks()
//     console.log(result)
//     // output
//     /** 
//      * [
//      *  {title:'dassa}
//      *  {title:'dassa}
//      *  {title:'dassa}
//      * ]
//     */
// }


// promise = memakai chainning method


// 1. loading
//2. debugging 

/** 
* then = fullfiled
* catch = rejected
* finally = mau rejected, maupun fullfiled itu akan tetap di eksekusi
*/