const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnCookie = document.querySelector('.screen1 img')
const btnBack = document.querySelector('.screen2 button')
const phrase = document.querySelector('.screen2 div p')

let luckyPhrases = ['No tempo certo, tudo dará certo.',
'Deixe que sua fé seja maior que seus problemas.',
'Todo dia é dia de alimentar o coração com boas energias.',
'Quando tudo for pedra, atire a primeira flor!',
'Não coloque limites nos seus sonhos, coloque fé.',
'Veja sempre o lado bom em todas as coisas!',
'Se você quer algo, você pode e você consegue!'
]
let randomPhrase = Math.floor(Math.random() * luckyPhrases.length)


// Eventos
btnCookie.addEventListener('click', function(){
    toggleScreen()
    phrase.innerText = `${luckyPhrases[(randomPhrase)]}`
    console.log(randomPhrase, luckyPhrases.length)
})

btnBack.addEventListener('click', function(){
    toggleScreen()
    randomPhrase = Math.floor(Math.random() * luckyPhrases.length)
})

//Funções
function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}