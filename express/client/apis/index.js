import request from 'superagent'

export function getBlogPost (post) {
  return request
    .get(`/post/${post}`)
    .then(res => res.body)
    .catch(error => console.log(error))
  }
  
  export function getBlogPosts () {
    return request
    .get('/posts')
    .then(res => res.body)
    .catch(error => console.log(error))
}