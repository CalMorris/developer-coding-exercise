"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBlogPost = getBlogPost;
exports.getBlogPosts = getBlogPosts;

var _superagent = _interopRequireDefault(require("superagent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getBlogPost(post) {
  return _superagent["default"].get("/post/".concat(post)).then(function (res) {
    return res.body;
  })["catch"](function (error) {
    return console.log(error);
  });
}

function getBlogPosts() {
  return _superagent["default"].get('/posts').then(function (res) {
    return res.body;
  })["catch"](function (error) {
    return console.log(error);
  });
}