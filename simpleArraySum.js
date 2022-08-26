// Sum of number of a array
console.log('Soma dos números de um Array')

const arrayNumber = [1, 2, 3, 4, 10, 11]

function simpleArraySum(ar) {
  let sum = 0
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i]
  }
  return sum
}

console.log('=> ', simpleArraySum(arrayNumber))
