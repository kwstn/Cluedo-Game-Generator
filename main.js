function generateRandomNumber(num)  {
    // Get # (index) from random number between 0 and num - 1
    return Math.floor(Math.random() * num)
}

const cluedoCards = {
    characters: ['Mr. Green', 'Miss Peacock', 'Professor Plum', 'Mrs. Scarlett', 'Dr. Orchid'],
    weapons: ['candlestick', 'wrench', 'lead pipe', 'rope', 'dagger', 'revolver'],
    rooms: ['hall', 'study', 'ballroom', 'billiards room', 'dining room', 'kitchen', 'lounge', 'conservatory', 'library']
}