// Створення Map для підрахунку кількості входжень слів у рядку
function countWords(str) {
  let wordCount = new Map();
  let words = str.split(" ");

  for (let word of words) {
    let trimmedWord = word.toLowerCase().replace(/[.,]/g, ""); // Видалення розділових знаків
    let currentCount = wordCount.get(trimmedWord) || 0;
    wordCount.set(trimmedWord, currentCount + 1);
  }

  return wordCount;
}

let text = "This is a sample text. This text contains sample words.";
let result = countWords(text);

console.log(result); // Виведе 2
console.log(result.get("sample")); // Виведе 2
console.log(result.get("text")); // Виведе 2
