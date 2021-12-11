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

  const splitMetadataContent = post.split('===')

  const splitByMetadataTitle = splitMetadataContent[1]?splitMetadataContent[1].split('\n') : null

  const postBody = marked.parse(splitMetadataContent[splitMetadataContent.length - 1]);

  console.log(splitByMetadataTitle)

  return (<> 
  <Link to='/'>Return Home</Link>

<h1></h1>
<h2></h2>
  <div dangerouslySetInnerHTML={{ __html: postBody }}
  />
  </>
  )
}