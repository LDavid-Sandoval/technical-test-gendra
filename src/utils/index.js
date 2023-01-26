export const randomNumbers = (min, max, numbersArray) => {
    const arrayNumbers = []
    for (let index = 0; index < numbersArray; index++) {
        arrayNumbers.push(Math.floor((Math.random() * (max - min + 1)) + min))
    }
    return arrayNumbers;
}

export const substractTempEpi = (str) => {
    const temp = str.substr(2,1)
    const episode = str.substr(4,2)
    return [temp,episode]
}