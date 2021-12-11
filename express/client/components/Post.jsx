import React, {useState, useEffect} from 'react'
import {getBlogPost} from '../apis'
import { useParams, Link } from "react-router-dom";

import { marked } from 'marked'
// import { Markup } from 'react-render-markup';


export default function Post () {
  const [post, setPost] = useState('')
  const params = useParams().post;

  useEffect(() => {
    getBlogPost(params)
    .then (result => {
      setPost(result)})
    .catch(error => console.log(error))
  }, [])

  const html = marked.parse(post);
  console.log(post)

  const splitMetadataParagraph = post.split('#')
  console.log(typeof html)



  return (<> 
  <Link to='/'>Return Home</Link>
  <p>{html}</p>
  {html}
  <div
  dangerouslySetInnerHTML={{ __html: html }}
  />
  </>
  )
}