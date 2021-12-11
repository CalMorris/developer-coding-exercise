const fs = require('fs')
const path = require('path')
const posts = '../../assets/posts/' 

// reads a single post
function getPost (postName, postLocation = posts) {
  const post = path.join(__dirname, postLocation, `${postName}.md`)
  const content = fs.readFileSync(post, 'utf8');
  const tags = ['word1','word2','word3','word4','word5']
  return {post: {content, tags}}
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

  module.exports = {
    getPosts,
    getPost
  }