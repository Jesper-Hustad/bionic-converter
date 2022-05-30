const FIXATION_POINTS = [
    [0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7],
    [0, 0, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 6, 6, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 12, 12, 12, 13, 13],
    [0, 0, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19],
    [0, 1, 1, 2, 2, 3, 4, 5, 5, 6, 7, 7, 8, 8, 8, 9, 10, 10, 11, 12, 12, 14, 15, 15, 16, 17, 17, 18, 19, 19, 20, 21, 21, 22, 23, 23, 24, 25, 25, 26],
    [0, 1, 1, 2, 3, 3, 4, 5, 6, 7, 7, 8, 9, 10, 10, 11, 12, 12, 13, 13, 14, 15, 16, 16, 17, 18, 19, 20, 20, 21, 22, 23, 23, 24, 25, 26, 27, 27, 28, 29]
]

/**
 * Converts text to bionic reading
 * @param {String} str
 * @param {Number} fixationLength optional `1` to `5` (default `3`)
 * @param {String[]|String} separator optional `"markdown"`, `"latex"`, `"html"`, or array `["<b>","</b>"]` (default `"html"`)
 */
module.exports = function bionicConvert(str, fixationLength = 3, separator = 'html') {
    const sep = Array.isArray(separator) ? separator : { "html": ['<b>', '</b>'], "markdown": ['**', '**'], "latex": ['\\textbf{', '}'] }[separator.toLowerCase()]
    const matches = str.matchAll(/\p{L}(\p{L}|\p{Nd})*/ug)
    let result = "",
        prev = 0

    for (const match of matches) {
        const length = match[0].length
        const start = match.index
        const end = start + length - FIXATION_POINTS[fixationLength - 1][length]
        result += str.slice(prev, start) + ((start != end) ? (sep[0] + str.slice(start, end) + sep[1]) : "")
        prev = end
    }

    return result + str.slice(prev, str.length)
}