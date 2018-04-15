var express = require('express');
var router = express.Router();
var { removeNonAlpha } = require('../utils/stringUtils.js');
var { isInDictionary, variableVowelMatch } = require('../utils/dictionaryUtils.js');

router.post('/', (req, res) => {
  console.log(req.body);
  var editedPhrase = removeNonAlpha(req.body.searchPhrase);
  if (!isInDictionary(editedPhrase)) {
    console.log('not a word');
  }
  res.send({
    editedPhrase
  })
});

module.exports = router;
