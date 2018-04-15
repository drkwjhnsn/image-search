function removeNonAlpha(string) {
  var editedString = string.replace(/(\W|\d)/g, '');
  if (editedString === '') return string;
  return editedString;
}

module.exports = { removeNonAlpha };
