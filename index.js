const fixationPoints = [
    [0, 4, 12, 17, 24, 29, 35, 42, 48],
    [1, 2, 7, 10, 13, 14, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49],
    [1, 2, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49],
    [0, 2, 4, 5, 6, 8, 9, 11, 14, 15, 17, 18, 20, 0, 21, 23, 24, 26, 27, 29, 30, 32, 33, 35, 36, 38, 39, 41, 42, 44, 45, 47, 48],
    [0, 2, 3, 5, 6, 7, 8, 10, 11, 12, 14, 15, 17, 19, 20, 21, 23, 24, 25, 26, 28, 29, 30, 32, 33, 34, 35, 37, 38, 39, 41, 42, 43, 44, 46, 47, 48]
]


function getWordFixationLength(word, fixationSize) {
    const wordSize = word.length,
        points = fixationPoints[fixationSize]

    for (let i = 0; i < points.length; i++)
        if (wordSize <= points[i]) return i
}

function bionicReading(str, fixationLength = 3, sep = ['<b>', '</b>'], ) {
    const matches = str.matchAll(/\p{L}(\p{L}|\p{Nd})*/ug)
    let result = ""
    let prev = 0

    for (const match of matches) {
        const start = match.index,
            end = start + match[0].length - getWordFixationLength(match[0], fixationLength + 1)
        result += str.slice(prev, start) + ((start != end) ? (sep[0] + str.slice(start, end) + sep[1]) : "")
        prev = end
    }
    return result + str.slice(prev, str.length)
}

console.log(bionicReading('Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points.'))


// console.log(testText.split(/[ -]+/).map(i => makeWordBionic(i)).join(" "))
// const rnd = (len, chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') => [...Array(len)].map(() => chars.charAt(Math.floor(Math.random() * chars.length))).join('')

// console.time();
// const longStr = rnd(10 ** 5)
// const len = longStr.length
// let result = ""

// for (let i = 0; i < len; i++)
//     result = longStr.charAt(i)

// console.timeEnd();
// console.log(longStr == result)


// console.time();
// const longStrr = rnd(10 ** 5)
// const lenn = longStrr.length
// let resultt = ""

// for (let i = 0; i < lenn; i += 5)
//     resultt += longStrr.substring(i, i + 5)

// console.timeEnd();
// console.log(longStrr == resultt)

// console.time();
// const longStrrr = rnd(10 ** 5)
//     // const lennn = longStr.length
// let resulttt = ""

// // for (let i = 0; i < lennn; i += 5)
// resulttt = longStrrr.split(" ").join(" ")

// console.timeEnd();
// console.log(longStrrr == resulttt)

// const testText = "Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth reading and understanding of written content."
// const testText = "Bionic Reading is a new, method-facilitating the reading-process by guiding the eyes through"