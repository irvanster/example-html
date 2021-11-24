//  let data = []
//  let success = true
//  const booksFetched = ()=> {
//          if(data[2].title == 'mtk') {
//              console.log('kamu paling baik nilainya di matematika')
//          }else{
//              console.log('ahaaa')
//          }
//          console.log(`Jumlah Buku ada ${data.length}`)  //3
//  }
//  const getBooks = (status, cb)=> {
//      console.log(messageForBooks())
//      if(status) {
//          data = [{title: 'kimia'}, {title: 'ipa'}, {title: 'mtk'}] // 2
//          cb({
//              dipostOleh: 'asda',
//              data
//          })
//      }else {
//          cb('data gagal terambil')
//      }
//  }
 
//  const messageForBooks = ()=> {
//      return `Daftar Buku yang telah tersedia:` //1
//  }
 
 
 
//  const fetcher = new Promise((resolve, reject)=> {
//      if(success) {
//          getBooks(success, resolve)
//      }else{
//          getBooks(success, reject)
//      }
//  })
 
//  fetcher
//  .then((res)=> console.log(res))
//  .then(()=>booksFetched())
//  .catch((err)=> console.log(err))



// const inputName = (name) => {
//     return name
// }


const getNameFromApi = ()=> {
    let name =''
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if(name != '') {
                resolve(name)
            }else{
                reject({
                    status: 500,
                    message: 'server tidak terkonek'
                })
            }
        },1000)
    })
}


const greetings = (quote) => {
    const tambahan = 'massel itu temen saya.'
    console.log(`${quote}, ${tambahan} Senang bertemu kalian semua!`)
}
// const greetings = 'ini fungsi greeting'
const sayHello = (name, cb) => {

    // let hello = `Hello Saya ${name} dan umurku 12`
    // return cb(hello)
    let hello
    name.then((res)=> {
        if(res == 'rivai') {
            console.log('benar kamu')
        }else{
            console.log('tidak diijin kan selain rivai')
        }
        hello = `Hello Saya ${res} dan umurku 12`
    })
    .then(()=> {
        return cb(hello)
    }).catch((err)=> {
        console.log(err)
    })
    
}

sayHello(getNameFromApi(),greetings)






















 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 