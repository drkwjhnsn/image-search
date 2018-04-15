var dictionary = require('./resources/wordMap.json');

function isInDictionary(string) {
  return !!dictionary[string];
}

function variableVowelMatch(string) {
  return string;
}

module.exports = { isInDictionary, variableVowelMatch };
