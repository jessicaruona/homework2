const readlineSync = require('readline-sync')

const getBill = () => {
  const bill = Number(readlineSync.question('How much was the check?'))
  if(isNaN(bill) || bill < 0){
    console.log("That's not a valid number!  Who are you trying to fool?")
    return getBill()
  } else {
    return bill
  }
}

const getTipPercent = () => {
  const tipPercent = Number(readlineSync.question('What percent do you want to tip?'))
  if (isNaN(tipPercent) || tipPercent < 0){
    console.log("That's not a valid number!  Who are you trying to fool?")
    return getTipPercent()
  }else{
    return tipPercent
  }
}

const getPartySize = () => {
  const partySize = Number(readlineSync.question('How many people are in your party?'))
  if( isNaN(partySize) || partySize < 1){
    console.log("That's not a valid number!  Who are you trying to fool?")
    return getPartySize()
  }else{
    return partySize
  }
}

const bill = getBill()
const tipPercent = getTipPercent()
const partySize = getPartySize()

console.log(`You said the bill is $${bill}.`)
console.log(`You said you wanted to tip ${tipPercent}%.`)
console.log(`You said there were ${partySize} people in your party.`)

const tip = bill * (tipPercent / 100)
console.log(`The tip should be $${tip.toFixed(2)}.`)

const total = bill + tip
console.log(`The total check should be $${total.toFixed(2)}.`)

const yourShare = total / partySize
console.log(`Each person should pay $${yourShare.toFixed(2)}.`)
