const path = require('path')
const express = require('express')
const app = express()
const { getTopWords } = require('./utils/tags')
const rootPostDir = './server/assets/posts' 
const {getContent, getPosts} = require('./utils/post')

app.get('/post/:slug', function (req, res) {
    const {slug} = req.params
    const content= getContent(slug)
    const tags = getTopWords(content)
    const post = { post: { content, tags } }
    res.json(post)
})

app.get('/posts', function (req, res) {
  const postList = getPosts()
  res.json(postList)
})

app.listen(3000, function () {
  console.log('Dev app listening on port 3000!')
})

app.use(express.static(path.join(__dirname, './public')))
