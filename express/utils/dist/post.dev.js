"use strict";

var fs = require('fs');

var path = require('path');

var posts = '../../assets/posts/';

var _require = require('./tags'),
    getTopWords = _require.getTopWords;

function readPost(postName) {
  var postLocation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : posts;
  var post = path.join(__dirname, postLocation, "".concat(postName));
  return fs.readFileSync(post, 'utf8');
}

function getTitle(postName) {
  var postFile = readPost(post);
  var getMetadata = postFile.split('===')[1];
  var splitMetaHeaders = getMetadata.split('\n');
  return splitMetaHeaders[1].replace('Title: ', '');
}

function getContent(postName) {
  var postLocation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : posts;
  var fileContent = readPost("".concat(postName, ".md"));
  var seperateMetaFromContent = fileContent.split('===');
  var content = seperateMetaFromContent[seperateMetaFromContent.length - 1];
  return content;
}

function getPosts() {
  var postDir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : posts;
  var dir = path.join(__dirname, postDir);
  var postFiles = fs.readdirSync(dir);
  var titleSlug = postFiles.map(function (post) {
    var title = getTitle(post);
    var slug = post.replace('.md', '');
    return {
      title: title,
      slug: slug
    };
  });
  return titleSlug;
}

module.exports = {
  getPosts: getPosts,
  getContent: getContent
};