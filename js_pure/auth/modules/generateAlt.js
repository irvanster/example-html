const generateToken = (email, password)=> {
    return {
        email,
        password
    }
}

export const generateEmail = (email, password)=> {
    return {
        email,
        password: 'aha'
    }
}

//method default
const Generate = {
    generateEmail,
    generateToken
}
export default Generate