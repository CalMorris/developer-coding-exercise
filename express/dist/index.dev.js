"use strict";

var path = require('path');

var express = require('express');

var app = express();

var _require = require('./utils/tags'),
    getTopWords = _require.getTopWords;

var rootPostDir = './server/assets/posts';

var _require2 = require('./utils/post'),
    getContent = _require2.getContent,
    getPosts = _require2.getPosts;

app.get('/post/:slug', function (req, res) {
  var slug = req.params.slug;
  var content = getContent(slug);
  var tags = getTopWords(content);
  var post = {
    post: {
      content: content,
      tags: tags
    }
  };
  res.json(post);
});
app.get('/posts', function (req, res) {
  var postList = getPosts();
  res.json(postList);
});
app.listen(3000, function () {
  console.log('Dev app listening on port 3000!');
});
app.use(express["static"](path.join(__dirname, './public')));