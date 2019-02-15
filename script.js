let arrOfFruits = ['APPLE', 'ORANGE', 'PEAR', 'BANANA', 'PINEAPPLE']
let word = ''


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

$('.grid-item').on('click', function(){
  $(this).css('color', 'lightgray')
  let letterThis = $(this)[0].textContent
  console.log(letterThis)
  $(`.${letterThis}`).text(letterThis)
})
  
  

// arrayOfFruits.indexOf(event.currentTarget.innerHTML)


// console.log(arrOfFruits[getRandomWord(arrOfFruits)])