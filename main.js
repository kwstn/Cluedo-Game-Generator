function generateRandomNumber(num)  {
    // Get # (index) from random number between 0 and num - 1
    return Math.floor(Math.random() * num)
}

const cluedoCards = { // possible cluedo response cards
    characters: ['Mr. Green', 'Miss Peacock', 'Professor Plum', 'Mrs. Scarlett', 'Dr. Orchid'],
    rooms: ['hall', 'study', 'ballroom', 'billiards room', 'dining room', 'kitchen', 'lounge', 'conservatory', 'library'],
    weapons: ['candlestick', 'wrench', 'lead pipe', 'rope', 'dagger', 'revolver'],
}

// store answers in an array
let cluedoAnswer = []

// generate card for each message in the answer
for (let clue in cluedoCards)   {
    let index = generateRandomNumber(cluedoCards[clue].length)

    switch(card)    {
        case 'characters':
            cluedoAnswer.push(`${cluedoCards[clue][index]} was killed`)
            break
        case 'rooms':
            cluedoAnswer.push(`in the ${cluedoCards[clue][index]}`)
            break
        case 'weapons':
            cluedoAnswer.push(`with the ${cluedoCards[clue][index]}`)
            break
        default:
            cluedoAnswer.push('I think it was you!')
    }
}

function formatClueAnswer(answers)  {
    const formatted = cluedoAnswer.join(' ')
    console.log(formatted)
}

formatClueAnswer(cluedoAnswer);