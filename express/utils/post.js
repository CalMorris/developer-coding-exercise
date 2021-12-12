const fs = require('fs')
const path = require('path')
const posts = '../../assets/posts/'

function readPost (postName, postLocation = posts) {
  const post = path.join(__dirname, postLocation, `${postName}`)
  return fs.readFileSync(post, 'utf8');
}

function getTitle (postFile) {
  const post = readPost(postFile)
  const getMetadata = post.split('===')[1]
  const getMetaHeaders = getMetadata.split('\n')
  return getMetaHeaders[1].replace('Title: ', '')
}

function getContent (postName, postLocation = posts) {
  const fileContent = readPost(`${postName}.md`)
  const seperateMetaFromContent = fileContent.split('===')
  const content = seperateMetaFromContent[seperateMetaFromContent.length - 1]
  return content
}

function getPosts (postDir = posts) {
  const dir = path.join(__dirname, postDir)
  const postFiles = fs.readdirSync(dir)
  const titleSlug = postFiles.map(post => {
    const title = getTitle(post)
    const slug = post.replace('.md', '')
    return {title, slug}
  })
  return titleSlug
}

  module.exports = {
    getPosts,
    getContent
  }