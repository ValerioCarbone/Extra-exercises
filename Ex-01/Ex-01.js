
const word = "Marco";

const lowerWord = word.toLowerCase();

let Arr = lowerWord.split("");

for (let i = 0; i < lowerWord.length; i++) {

    if (Arr[i] == 'a') {
        Arr.splice(i, 1, 'afa')
    } else if (Arr[i] == 'e') {
        Arr.splice(i, 1, 'efe')
    } else if (Arr[i] == 'i') {
        Arr.splice(i, 1, 'ifi')
    } else if (Arr[i] == 'o') {
        Arr.splice(i, 1, 'ofo')
    } else if (Arr[i] == 'u') {
        Arr.splice(i, 1, 'ufu')
    }
}

let new_word = Arr.join('')

console.log(new_word)


ABCDEABCDEABCDEABCDE