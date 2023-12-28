
let word = "Aiuola";

let new_word = word.toLowerCase();
// let word = word;

if (new_word.includes('a')) {
    new_word = new_word.replaceAll('a', 'afa')
}
if (new_word.includes('e')) {
    new_word = new_word.replaceAll('e', 'efe')
}
if (new_word.includes('i')) {
    new_word = new_word.replaceAll('i', 'ifi')
}
if (new_word.includes('o')) {
    new_word = new_word.replaceAll('o', 'ofo')
}
if (word.includes('u')) {
    new_word = new_word.replaceAll('u', 'ufu')
}

console.log(new_word)


