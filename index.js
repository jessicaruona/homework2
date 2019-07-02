const readlineSync = require('readline-sync')

const bill = Number(readlineSync.question("How much is the bill?"))
const tipPercent = Number(readlineSync.question("What percent do you want to tip?"))
const partySize = Number(readlineSync.question("How many people are in your party?"))


console.log(`You said the bill was ${bill}...`)
console.log(`You said you wanted to tip ${tipPercent}%.`)
console.log(`You said there were ${partySize} people in your party.`)

if (partySize >= 6){
    tipPercent = 18
    console.log("We are applying a fixed 18% tip because your party is 6 or more.")
}else {
    console.log(`You said you wanted to tip ${tipPercent}%.`)
}

const tip = bill *  (tipPercent / 100)

console.log(`The tip should be $${tip.toFixed(2)}.`)

const total = bill + tip 

console.log(`The total check should $${total.toFixed(2)}.`)

const yourShare = total / partySize 

console.log(`Each person should pay $${yourShare.toFixded(2)}.`)

