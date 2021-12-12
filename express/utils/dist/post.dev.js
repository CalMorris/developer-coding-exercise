"use strict";

var fs = require('fs');

var path = require('path');

var posts = '../../assets/posts/';

function readPost(postName) {
  var postLocation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : posts;
  var post = path.join(__dirname, postLocation, "".concat(postName));
  return fs.readFileSync(post, 'utf8');
}

function getTitle(post) {
  var getMetadata = post.split('===')[1];
  var getMetaHeaders = getMetadata.split('\n');
  return getMetaHeaders[1].replace('Title: ', '');
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
    var postContent = readPost(post);
    var title = getTitle(postContent);
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
  getContent: getContent,
  getTitle: getTitle,
  readPost: readPost
};