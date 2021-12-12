"use strict";

var stopWords = ['#', '##', 'a', 'about', 'above', 'after', 'again', 'against', 'all', 'am', 'an', 'and', 'any', 'are', 'aren\'t', 'as', 'at', 'be', 'because', 'been', 'before', 'being', 'below', 'between', 'both', 'but', 'by', 'can\'t', 'cannot', 'could', 'couldn\'t', 'did', 'didn\'t', 'do', 'does', 'doesn\'t', 'doing', 'don\'t', 'down', 'during', 'each', 'few', 'for', 'from', 'further', 'had', 'hadn\'t', 'has', 'hasn\'t', 'have', 'haven\'t', 'having', 'he', 'he\'d', 'he\'ll', 'he\'s', 'her', 'here', 'here\'s', 'hers', 'herself', 'him', 'himself', 'his', 'how', 'how\'s', 'i', 'i\'d', 'i\'ll', 'i\'m', 'i\'ve', 'if', 'in', 'into', 'is', 'isn\'t', 'it', 'it\'s', 'its', 'itself', 'let\'s', 'me', 'more', 'most', 'mustn\'t', 'my', 'myself', 'no', 'nor', 'not', 'of', 'off', 'on', 'once', 'only', 'or', 'other', 'ought', 'our', 'ours', 'ourselves', 'out', 'over', 'own', 'same', 'shan\'t', 'she', 'she\'d', 'she\'ll', 'she\'s', 'should', 'shouldn\'t', 'so', 'some', 'such', 'than', 'that', 'that\'s', 'the', 'their', 'theirs', 'them', 'themselves', 'then', 'there', 'there\'s', 'these', 'they', 'they\'d', 'they\'ll', 'they\'re', 'they\'ve', 'this', 'those', 'through', 'to', 'too', 'under', 'until', 'up', 'very', 'was', 'wasn\'t', 'we', 'we\'d', 'we\'ll', 'we\'re', 'we\'ve', 'were', 'weren\'t', 'what', 'what\'s', 'when', 'when\'s', 'where', 'where\'s', 'which', 'while', 'who', 'who\'s', 'whom', 'why', 'why\'s', 'with', 'won\'t', 'would', 'wouldn\'t', 'you', 'you\'d', 'you\'ll', 'you\'re', 'you\'ve', 'your', 'yours', 'yourself', 'yourselves'];
/**
 * This function returns a list of the top `tagCount` frequently used words in the blog post.
 * These words should not include any words from the `stopWords` array, and should also exclude
 * strings relating to markdown.
 *
 * @param {string} bodyText
 * @param {number} tagCount
 * @returns {[string]} - An array of the most frequently used non-Stopwords
 */
// function countWords(words) {
//   let wordCount = {}
//   for (let i = 0; i < words.length; i++) {
//     wordCount[words[i]] = 1 + (wordCount[words[i]] || 0)
//   }
//   return wordCount
// }

function getTopWords(bodyText) {
  var tagCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  // const words = bodyText.split(' ')
  // let wordCount = countWords(words)
  // const keyValueArr = Object.entries(wordCount)
  // const sortKeyValues = keyValueArr.sort((a,b) => b[1] - a[1])
  // const filterStopwords = sortKeyValues.filter(arr => {
  //   const isStopword = stopWords.find(stopWord => stopWord.toLowerCase() !== arr[0].toLowerCase())
  //   return isStopword
  // })
  // console.log(filterStopwords)
  // const topFiveTags = filterStopwords.slice(0, tagCount)
  // return topFiveTags.map(word => word[0])
  return ['tags', 'go', 'here'];
}

module.exports = {
  getTopWords: getTopWords
};