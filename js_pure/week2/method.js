const str = 'kata ku word'
const word = {
    toUpperCase: function(){
        return str.toUpperCase()
    },
    toLowerCase: function(){
        return str.toLowerCase()
    },
    replaceAndUp: function(){
        return str.replace('word','rifai'), this.toUpperCase()
    }
}

console.log(word.replaceAndUp())


