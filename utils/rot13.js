const rot13 = str => str.split('')
.map(char => String.fromCharCode(char.charCodeAt(0) + (char.toLowerCase() < 'n' ? 13 : -13)))
.join('');

module.exports = rot13;