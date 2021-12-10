import React, {useState, useEffect} from "react";
import {getBlogPosts} from '../apis'

export default function Home () {
  const [blogPosts, setBlogPosts] = useState([])

  useEffect(() => {
    getBlogPosts()
    .then(posts => {
      console.log(posts)
      setBlogPosts(posts)})
    .catch(e => console.log(e))
  },[])

  const posts = blogPosts.map(post => {
    return <a key={post.title} href={`/post/${post.slug}`}><li>{post.title}</li></a>
  })

  return ( <><p>{posts}</p></>)
}