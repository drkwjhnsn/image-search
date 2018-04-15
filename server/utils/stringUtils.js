function removeNonAlpha(str) {
  return str.replace(/(\W|\d)/g, '');
}

module.exports = { removeNonAlpha };
