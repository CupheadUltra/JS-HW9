
function logItems(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(`${i + 1} - ${array[i]}`);
    }
  }
  logItems(['Mango', 'Poly', 'Ajax']);
  

  function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(' ');
    return words.length * pricePerWord;
  }
  console.log(calculateEngravingPrice('JavaScript для початківців', 10)); 


  function findLongestWord(string) {
    const words = string.split(' ');
    let longestWord = words[0];
  
    for (let word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
  }
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); 
  

  function formatString(string) {
    if (string.length <= 40) {
      return string;
    }
    return string.slice(0, 40) + '...';
  }
  console.log(formatString('Curabitur ligula sapien, tincidunt non.')); 
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.')); 


  function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
    return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
  }
  console.log(checkForSpam('Latest technology news')); 
  console.log(checkForSpam('Get best sale offers now!')); 


  let input;
  const numbers = [];
  let total = 0;
  
  while (true) {
    input = prompt('Введіть число:');
    
    if (input === null) {
      break;
    }
    
    input = Number(input);
    
    if (isNaN(input)) {
      alert('Було введено не число, попробуйте ще раз');
    } else {
      numbers.push(input);
    }
  }
  
  if (numbers.length > 0) {
    for (let number of numbers) {
      total += number;
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
  }
  