


/**
 * Generate a random string
 * @param {Number} length the length of the random generated string
 * @return {String} random generated string
 */
export const randomString = (length = 0) => {
    let chars = [];
    let result = "";

    for(let char = 97; char < 123; ++char) chars.push(char);

    let characters = (
        String.fromCharCode(...chars) + 
        Array(9).fill().map((val, i) => i+1).join('')
    );

    Array.from(characters).forEach(() => {
        const position = Math.floor(Math.random() * characters.length);
        result += characters.charAt(position);
    });

    return (length && length < characters.length)
        ? result.slice(0, length) : result;
}

