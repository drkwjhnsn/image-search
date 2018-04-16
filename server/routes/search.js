var express = require('express');
var router = express.Router();
var axios = require('axios');
var { removeNonAlpha } = require('../utils/stringUtils.js');
var { isInDictionary, variableVowelMatch } = require('../utils/dictionaryUtils.js');

router.post('/', (req, res) => {

  // multi-word phrase implemenation
  var phraseArray = req.body.searchPhrase.split(' ');
  var editedPhrase = phraseArray.map((word) => {
    word = removeNonAlpha(word);
    if (!isInDictionary(word)) {
      word = variableVowelMatch(word);
    }
    return word;
  }).filter((word) => word !== '').join(' ');

  // // Original single word phrase implementation
  // var editedPhrase = removeNonAlpha(req.body.searchPhrase);
  // if (!isInDictionary(editedPhrase)) {
  //   editedPhrase = variableVowelMatch(editedPhrase);
  // }

  gettyApiCall(editedPhrase)
  .then(({ data }) => {
    res.send(Object.assign(data, { editedPhrase }));
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send(err);
  })
});

function gettyApiCall(phrase) {
  var imageSearchEndpoint = 'https://api.gettyimages.com/v3/search/images';
  return axios.get(imageSearchEndpoint, {
    headers: {
      'Api-Key': process.env.GETTY_API_KEY
    },
    params: {
      phrase,
      fields: ['display_set']
    }
  })
  .catch((err) => {
    return Promise.reject(new Error('search/images endpoint error'));
  });
}

module.exports = router;
