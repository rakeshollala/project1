// Function to reverse every word in a sentence
function reverseWords(sentence) {
    return sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);

// Sorting an array in descending order
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

numbers.sort((a, b) => b - a);
console.log("Sorted Array in Descending Order:", numbers);
