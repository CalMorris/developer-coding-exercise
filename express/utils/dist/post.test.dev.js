"use strict";

var _require = require('./post'),
    getPosts = _require.getPosts,
    getContent = _require.getContent,
    getTitle = _require.getTitle,
    readPost = _require.readPost;

describe('getTitle', function () {
  var posts = [['Im-betting-on-SPAs.md', "I’m betting on SPAs"], ['kiasuism-vs-no8-wire.md', 'Kiasuism vs No.8 Wire'], ['mediasuite-tech-stack.md', 'Media Suite Tech Stack']];
  test.each(posts)('return the title from the post file', function (postName, expected) {
    var postContent = readPost(postName);
    var actual = getTitle(postContent);
    expect(actual).toBe(expected);
  });
});
describe('getContent', function () {
  var posts = [['Im-betting-on-SPAs', "A brief history of the web"], ['mediasuite-tech-stack', 'React or Angular on the client']];
  test.each(posts)('return the title from the post file', function (postName, expected) {
    // const postContent = readPost(postName)
    var actual = getContent(postName);
    expect(actual).toContain(expected);
  });
});