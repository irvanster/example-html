// Tipe Data
// const umur = 20 //number
// const nama = "Ferina" //string
// const menikah = false //boolean
// let simbol = Symbol('ardi')
// let simbol2 = Symbol('ardi') //timestamp
// if(simbol === simbol2) {
//     console.log('ya')
// }else{
//     console.log('nga')
// }
// const title= null

// let title
// console.log('title', title)
// const title
// const filmKesukaan = { //object (key&value)
//     cartoon: ['spongebob', 'avengers mini'], //array
//     fun:[
//         {title: 'Mortal Kombat The Movie', year: 2020, rating: 5},
//         {title: 'Kura-kura', year: 2021, rating: 5},
//     ] //array of object
// }
// const hobby = ['berkebun','bersepeda','nonton'] // array itu dimulai dari angka 0
// const film = [
//     {title: 'Mortal Kombat The Movie', year: "2020", rating: 5},
//     {title: 'Kura-kura', year: "2021", rating: 5},
// ]

// console.log(simbol)
// film.map((item, index)=> {
//     console.log('Film '+item.title,'direlease pada tahun ', item.year)
// })
// console.log(film[0].year)




// function name(params) {
    
// }

// let namaTeman = 'Vera'
// let books = {
//     name: namaTeman,
//     getData: function() {
//         fetch('api.com').get()
//     },
//     getDataById:function() {
//         namaTeman= 'Andi'
//         console.log(namaTeman)
//     },
//     getBySlug:function() {
//         namaTeman= 'Andi'
//         console.log(namaTeman)
//     },
// }

// books.getData()





//function

// function validateAge(age) {
//     if(age < 18) {
//         return 'ga bisa masuk'
//         // console.log('ga bisa masuk')
//     }else {
//         return 'BISA MASUK'
//     }
//     // return age
// }

// const validateAge = function (age) {
//     if(age < 18) {
//         return 'ga bisa masuk'
//         // console.log('ga bisa masuk')
//     }else {
//         return 'BISA MASUK'
//     } 
// }


//if dan else
// else: optional

// const validateAge = (age) => {
//     if (typeof(age) != 'number') {
//         return 'input bukan number'
//     }

//     if(age < 18) {
//         return 'ga bisa masuk'
//     }else {
//         return 'BISA MASUK'
//     } 
// }

const data = {
    name: 'Irvan',
    maried: false,
    age: 20,
    gender: 'l',
}

const validateAge = ({name, gender, age, maried}) => { //ini destructuring di function/params
    // let {name, gender, age, maried} = params // destructuring di variable
    // let {age} = params
    // if(gender ==='l')
    //     gender='Laki-laki'
    // if(age === 20 || gender =='l') {
    //     // &&: yang di jadikan disana harus benar semua
    //     // ||: jika salah satu dari value yang disebutkan sesuai maka benar
    //     return 'iya'
    // }else {
    //     return 'tidak'
    // }
    // if (typeof(age) != 'number') {
    //     return 'input bukan number'
    // }

    // if(age >= 15) {
    //     return 'BISA MASUK'
    // }else {
    //     return 'ga bisa masuk'
    // } 
    // return 'umurku '+age+' dan aku seorang '+ gender+' aku siapa'
    return  `Halo perkenalkan saya ${name}, saya seorang ${maried == false ? 'single':'maried'} umurku ${age} dan aku seorang ${gender}`
}

console.log(validateAge(data))
// console.log(validateAge(15, "l", "irvan",false))


//ternary operator
// age < 18 && 'anak-anak' //if tanpa else
// age < 18 ? 'anak-anak':'dewasa' //if dengan else
// age < 18 ? 
//     'anak-anak': age >= 18 ?
//      'dewasa':'kakek-nenek' //if dengan else

//if else & else if
// if(age < 18) {
//     return 'anak-anak'
// } else if(age >=18) {
//     return 'dewasa'
// } else {
//     return 'kakek-nenek'
// } 

//switch case
// switch (rekam_ktp) {
//     case 'suket':
//         "perempuan"
//         break;
//     case 'rekam_ektp':
//         "laki-laki"
//         break;
//     case 'sudah_rekam':
//         "laki-laki"
//         break;

//     default:
//         "belum"
//         break;
// }



/** 
 1. switch case itu untuk yang static
 2. if else, umur < 18, 15*3 =''
 * 
*/

// const listArticle = [
//     {
//         title: 'Sekarang Covid makin turun',
//         content: 'apa aja',
//     },
//     {
//         title: 'Sekarang Covid makin turun',
//         content: 'apa aja',
//     },
// ]

// const {title, content} = listArticle[0] //destructuring
// const detailArticle = {
//     title,
//     content,
//     author: 'apa',
//     like: 'berapa'
// }
// // const detailArticle = listArticle[0]
// console.log(detailArticle)

// const hobby = ['memasak','berjemur','bermain','nonton']
// const hobbyBaru = [hobby[2], 'layangan','gasing']
// const hobbyBaru = ['layangan','gasing']
// // (...) = item

// const gabungHobby = [...hobby, ...hobbyBaru]
// console.log(gabungHobby)