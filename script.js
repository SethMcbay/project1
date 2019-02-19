let arrOfFruits = ['APPLE', 'BANANA', 'PEAR', 'PINEAPPLE', 'ORANGE', 'KIWI', 'COCONUT', 'STRAWBERRY', 'BLUEBERRY'] 
let word = ''
let counter = 0
let score = 0
let limit = 6
let count = 0

function userScores() {
  counter += 1
  $('.scoreboard').html(counter)

}

$('#start').on('click', getRandomWord = () => {
  let ans = Math.floor(Math.random() * arrOfFruits.length)
  word = arrOfFruits[ans]
  let wordArr = word.split('')
  for (let i = 0; i < word.length; i++) {
    $(".underline-container").append(`<div class='underline ${wordArr[i]}'></div>`);
  }
})

resetFunc = () => {
  document.location.reload()
}
let loseCounter = 6

$('.grid-item').on('click', function () {
  $(this).css('color', 'lightgray')
  let letterThis = $(this)[0].textContent
  $(`.${letterThis}`).text(letterThis)
  let split = word.split('')
  
  
  for(let i = 0; i < split.length; i++){
    if(split[i] === letterThis){
      count ++
    }
  }
  checkForWin(letterThis)
})

function checkForWin(letter) {
  let amountOfTimesLetterIsNotInWord = 0
  let wordArr = word.split('')
  
  if(count === wordArr.length){
    alert('you win')
  }
  for (let i = 0; i < word.length; i++) {
    if (letter !== word[i]) {
      amountOfTimesLetterIsNotInWord += 1
      if (amountOfTimesLetterIsNotInWord === word.length) {
        limit -= 1
        
        $('.lives div').replaceWith(`<div>lives: ${limit}</div>`)
      }

    } else {
      score += 1
      
    }
   
    if (limit === 0)
      alert ('you lose')

  }

}



