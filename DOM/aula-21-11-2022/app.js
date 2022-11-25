const characters = []
let currentPosition = 0

async function getCharacters() {
  characters.push(...(await (await fetch('https://www.breakingbadapi.com/api/characters?limit=15')).json()))
  loadCharacter(currentPosition)
}

console.log(characters)

function loadCharacter(position) {
  const currentCharacter = characters[position]
  // const currentCharacter = characters.at(position)

  let occupations = '<ul>'
  let appearances = '<ul>'

  document.getElementById('image').src = currentCharacter.img
  document.getElementById('name').innerHTML = currentCharacter.name
  document.getElementById('birthday').innerHTML = currentCharacter.birthday

  currentCharacter.occupation.forEach(function (occupation) {
    occupations = occupations + `<li>${occupation}</li>`
  })

  occupations = occupations + '</ul>'

  document.getElementById('jobs').innerHTML = occupations
  document.getElementById('nickname').innerHTML = currentCharacter.nickname
  document.getElementById('actor').innerHTML = currentCharacter.portrayed

  currentCharacter.appearance.forEach(function (appearance) {
    appearances = appearances + `<li>${appearance}</li>`
  })

  appearances = appearances + '</ul>'
  document.getElementById('seasons').innerHTML = appearances
}

function next() {
  currentPosition = currentPosition + 1 >= characters.length ? 0 : currentPosition + 1
  loadCharacter(currentPosition)
}

function previous() {
  currentPosition = currentPosition - 1 < 0 ? characters.length - 1 : currentPosition - 1
  loadCharacter(currentPosition)
}