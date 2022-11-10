const episodios = require("./episodios.json")

const episodios1Breaking = episodios.filter(function(episodio) {
    return episodio.episode === '1' && episodio.series === 'Breaking Bad'
})

console.log(episodios1Breaking, episodios1Breaking.length)