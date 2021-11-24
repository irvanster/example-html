let getBooks = new Promise((resolve, reject) => {

    /**
     * kita analogikan disini adalah sebuah permintaan request dari si servernya
     */
    let success = false
    if(success){
        resolve([{title: 'kimia'}, {title: 'ipa'}, {title: 'mtk'}])
    }else{
        reject(new Error('failed because server error'))
    }
})

getBooks.then((res)=> console.log(res) ) //fullfiled/success
.catch((err)=> console.log(err)) //rejectr

