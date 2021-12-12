const fs = require('fs')
const path = require('path')
const posts = '../../assets/posts/'
const { getTopWords } = require('./tags')

function readPost (postName, postLocation = posts) {
  const post = path.join(__dirname, postLocation, `${postName}`)
  return fs.readFileSync(post, 'utf8');
}

function getPost (postName, postLocation = posts) {
  const fileContent = readPost(`${postName}.md`)
  const seperateMetaContent = fileContent.split('===')
  const content = seperateMetaContent[seperateMetaContent.length - 1]
  const tags = getTopWords(content)
  return {post: {content, tags}}
}
  
function getPosts (postDir = posts) {
  const dir = path.join(__dirname, postDir)
  const postFiles = fs.readdirSync(dir)

  const titleSlug = postFiles.map(post => {
    const readPostFile = readPost(post)
    const getMetadata = readPostFile.split('===')[1]
    const splitMetadata = getMetadata.split('\n')
    const title = splitMetadata[1].replace('Title: ', '')
    const slug = post.replace('.md', '')
    return {title, slug}
  })

  return titleSlug
}

  module.exports = {
    getPosts,
    getPost
  }