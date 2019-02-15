let arrOfFruits = ['APPLE', 'ORANGE', 'PEAR', 'BANANA', 'PINEAPPLE']
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
  // if(split.includes(letterThis)){

  //   winArr.push(letterThis)
  // }
  
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
  // if(winArr.length === wordArr.length) {
  //   alert('you win!')
  // }
  if(count === wordArr.length){
    alert('you win')
  }
  for (let i = 0; i < word.length; i++) {
    if (letter !== word[i]) {
      amountOfTimesLetterIsNotInWord += 1
      if (amountOfTimesLetterIsNotInWord === word.length) {
        limit -= 1
        console.log(limit)
      }
    } else {
      score += 1
      console.log(score)
    }
   
    if (limit === 0)
      alert ('you lose')

  }

}



// arrayOfFruits.indexOf(event.currentTarget.innerHTML)


// console.log(arrOfFruits[getRandomWord(arrOfFruits)])

// SCOREBOARD
// create a counter variable set to 0 by default
// when a player scores, increase the counter variable by 1
// then use the html() method to display the score in the browser
// for example

