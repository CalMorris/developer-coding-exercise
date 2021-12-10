const express = require('express')
const { getTopWords } = require('./utils/tags')
const app = express()
const rootPostDir = './server/assets/posts' // these are the blog files


// this is code that i have added
const fs = require('fs')
const path = require('path')
const posts = '../assets/posts/' 

// reads a single post
function getPostContent (postName, postLocation = posts) {
  const post = path.join(__dirname, postLocation, `${postName}.md`)
  const postContent = fs.readFileSync(post, 'utf8');
  return postContent
}
  
function getPosts (postDir = posts) {
  const dir = path.join(__dirname, postDir)
  const postFiles = fs.readdirSync(dir)

  const slugTitle = postFiles.map(file => {
    const slug = file.replace('.md', '')
    const splitSlug = file.split('-')
    const titleToUppercase = splitSlug.map(word => word[0].toUpperCase() + word.slice(1))
    const title = titleToUppercase.join(' ').replace('.md', '')
    return {title, slug}
  })

  return slugTitle
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
    const postName = req.params.slug
    const postContent= getPostContent(postName.slice(1))
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
