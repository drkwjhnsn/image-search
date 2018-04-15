var dictionary = require('./resources/wordMap.json');

function isInDictionary(string) {
  return !!dictionary[string.toLowerCase()];
}

function variableVowelMatch(string) {
  var patternString = '^' + string.replace(/(a|e|i|o|u)/gi, '(a|e|i|o|u)') + '$';
  var pattern = RegExp(patternString, 'i');
  for (var word in dictionary) {
    if (pattern.test(word)) return word;
  }
  return string;
}

module.exports = { isInDictionary, variableVowelMatch };
