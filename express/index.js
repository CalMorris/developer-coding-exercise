const path = require('path')
const express = require('express')
const app = express()
const { getTopWords } = require('./utils/tags')
const rootPostDir = './server/assets/posts' 
const {getPost, getPosts} = require('./utils/post')

app.get('/post/:slug', function (req, res) {
    const postName = req.params.slug
    const postContent= getPost(postName.slice(1))
    res.json(postContent)
})

app.get('/posts', function (req, res) {
  const postList = getPosts()
  res.json(postList)
})

app.listen(3000, function () {
  console.log('Dev app listening on port 3000!')
})

app.use(express.static(path.join(__dirname, './public')))
