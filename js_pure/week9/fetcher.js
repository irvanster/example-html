import fetch from 'node-fetch'

export const getData = async (uri)=> {
    try {
        const users = await fetch(uri) //janjian
        .then(response => response.json()) //kemudian/selanjutnya
        if(Object.keys(users).length === 0) {
            return({
                message: "Data Belum ada"
            })
        }
        return users
    } catch (error) {
        console.log(error, 'ada error')
    }

}

