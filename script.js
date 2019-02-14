
let arrOfFruits = ['Apple', 'Orange', 'Pear', 'Banana', 'Pineapple']

getRandomNum = (apple) => {
  return Math.floor(Math.random() * apple.length)
}
console.log(arrOfFruits[getRandomNum(arrOfFruits)])
