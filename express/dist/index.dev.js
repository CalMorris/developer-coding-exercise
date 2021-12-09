"use strict";

var express = require('express');

var _require = require('./utils/tags'),
    getTopWords = _require.getTopWords;

var app = express();
var rootPostDir = './server/assets/posts'; // these are the blog files
// this is code that i have added

var fs = require('fs');

var path = require('path');

var posts = '../assets/posts/'; // reads a single post

function getPostContent(postName) {
  var postLocation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : posts;
  var post = path.join(__dirname, postLocation, "".concat(postName, ".md"));
  var postContent = fs.readFileSync(post, 'utf8');
  return postContent;
}

function getPosts() {
  var postDir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : posts;
  var dir = path.join(__dirname, postDir);
  var postFiles = fs.readdirSync(dir); // format the title and slug

  var slugTitle = postFiles.map(function (file) {
    var slug = file.replace('.md', '');
    var title = slug.split('-').join(' ');
    return {
      title: title,
      slug: slug
    };
  });
  return slugTitle;
}
/**
 *  Returns the detail of an individual post in json, formatted as:
 * {
 *  post: {
 *    content: <article's markdown content>,
 *    tags: <array of 5 top tags for the post>
 *  }
 * }
 */


app.get('/post/:slug', function (req, res) {
  var postName = req.params.slug;
  var postContent = getPostContent(postName);
  res.json('postContent');
});
app.get('/posts', function (req, res) {
  var postList = getPosts();
  res.json(postList);
});
app.listen(3000, function () {
  console.log('Dev app listening on port 3000!');
});