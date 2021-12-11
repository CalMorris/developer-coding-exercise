import React, {useState, useEffect} from "react";
import {getBlogPosts} from '../apis'
import { Link } from "react-router-dom";



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
    return <Link key={post.slug} to={`/${post.slug}`}><li>{post.title}</li></Link>
  })

  return ( <>
  <h1>Media Suite Blog Posts</h1>
  <p>{posts}</p>
  </>)
}