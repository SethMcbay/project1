let arrOfFruits = ['Apple', 'Orange', 'Pear', 'Banana', 'Pineapple']
// let arrOfLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] 


$('#start').on('click', getRandomWord = () => {
    let ans = Math.floor(Math.random() * arrOfFruits.length)
    console.log(arrOfFruits[ans])
    return arrOfFruits[ans]
})



// console.log(arrOfFruits[getRandomWord(arrOfFruits)])


