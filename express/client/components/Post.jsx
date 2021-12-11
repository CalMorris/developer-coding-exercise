import React, {useState, useEffect} from 'react'
import {getBlogPost} from '../apis'
import { useParams, Link } from "react-router-dom";
import { marked } from 'marked'


export default function Post () {
  const params = useParams().post;
  const [post, setPost] = useState('')
  const [keywords, setKeywords] = useState('')

  useEffect(() => {
    getBlogPost(params)
    .then (({post}) => {
      const {content, tags} = post
      setPost(content)
      setKeywords(tags)
      console.log(tags)
    })
    .catch(error => console.log(error))
  }, [])
  
  const postHTML = marked.parse(post);

  return (<> 
    <Link to='/'>Return Home</Link>
    <div dangerouslySetInnerHTML={{ __html: postHTML }}/>
    {/* <p>{keywords}</p> */}
  </>
  )
}