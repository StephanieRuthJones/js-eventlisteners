document.addEventListener('DOMContentLoaded', function () {
    // alert('LOADED')

    // let ul = document.querySelector('ul')
    // ul.innerText = 'Ethan got it right!!'
    // console.log("title", title)

    // ul.addEventListener('click', function (event) {
    //     event.target.innerText = 'Elllooooo'
    // })

    fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(res => {
            showCharacters(res.results)
        })

})
function showCharacters(characters) {
    characters.forEach(createCharacter)
}

function createCharacter(character) {
    let h1 = document.createElement('h1')
    h1.innerHTML = character.name
    document.body.appendChild(h1)
    h1.addEventListener('click', function () {
        h1.innerHTML == character.status ? event.target.innerText = character.name : event.target.innerText = character.status
    })
}
//chain .then promises to make code synchronous
//High order function: function tht takes in a function