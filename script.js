// Define the substitution cipher
const cipher = {
  'A': '0', 'B': '1', 'C': '2', 'D': '3', 'E': '4',
  'F': '5', 'G': '6', 'H': '7', 'I': '8', 'J': '9',
  'K': '10', 'L': '11', 'M': '12', 'N': '13', 'O': '14',
  'P': '15', 'Q': '16', 'R': '17', 'S': '18', 'T': '19',
  'U': '20', 'V': '21', 'W': '22', 'X': '23', 'Y': '24',
  'Z': '25'
};

// Define a function to encode a message
function encode() {
  const input = document.getElementById('input').value.toUpperCase();
  let encodedMessage = '';
  for (let letter of input) {
    if (cipher.hasOwnProperty(letter)) {
      encodedMessage += cipher[letter];
    }
  }
  document.getElementById('output').value = encodedMessage;
}

// Define a function to decode a message
function decode() {
  const input = document.getElementById('input').value;
  let decodedMessage = '';
  for (let i = 0; i < input.length; i += 2) {
    const digit = input.substr(i, 2);
    const letter = Object.keys(cipher).find(key => cipher[key] === digit);
    if (letter) {
      decodedMessage += letter;
    }
  }
  document.getElementById('output').value = decodedMessage;
}
