/**
 * async = asynchronous
 * sync = synchronous
 */

//  const async = 'asynchronous'
//  const sync = 'synchronous'
// console.log(sync)
// console.log('1')
// console.log('2')
// console.log('3')
// console.log('4')
// console.log('5')
// console.log(`end ${sync}`)

// console.log(async)
// // 2 detik = 2000
// // 500 = 50% dari 2 detik
// console.log('1')
// setTimeout(()=> {
//     console.log('2')
// }, 5000)

// console.log('3')
// console.log('4')
// console.log('5')
// console.log(`end ${async}`)






//kalo didalam javascript itu defaultnya adalah hybrid
// 1. urutan yang disajikan pertama melihat dari sisi barisnya
// 2. itu dari besar/kecil proses function nya


//setTimeout = analogi ketika kita fetch dari database..
// dimana setTimout itu berfungsi sebagai handler untuk agar nanti si datanya ada


//secara default javascript yang dibaca pertama kali adalah urutan kode

/**
 * 1. setTimout = digunakan membuat fungsi logic sederhana, generate Name, generateColor
 * 2. async Callback = function yang bisa kita lakukan prosesnya kalo dari data yang diambil itu sudah selesai diproses
 * 3. Promise = berkaitan dengan data apapun
 * 4. trycatch / async/await = berkaitan dengan data apapun
 */
let data = []
const booksFetched = ()=> {
    setTimeout(()=> {
        if(data[2].title == 'mtk') {
            console.log('kamu paling baik nilainya di matematika')
        }else{
            console.log('ahaaa')
        }
        console.log(`Jumlah Buku ada ${data.length}`)  //3
    },400)
}
const getBooks = ()=> {
    setTimeout(()=> {
        data = [{title: 'kimia'}, {title: 'ipa'}, {title: 'mtk'}] // 2
        console.log(data)
    },300)
}

const messageForBooks = ()=> {
    return `Daftar Buku yang telah tersedia:` //1
}



getBooks()
console.log(messageForBooks())
booksFetched()


















