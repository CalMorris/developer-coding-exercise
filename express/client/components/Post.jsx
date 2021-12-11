import React, {useState, useEffect} from 'react'
import {getBlogPost} from '../apis'
import { useParams, Link } from "react-router-dom";
import { marked } from 'marked'


export default function Post () {
  const params = useParams().post;
  const [post, setPost] = useState('')
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const [e, setE] = useState('')

  useEffect(() => {
    getBlogPost(params)
    .then (({post}) => {
      const {content, tags} = post

      // parses the content and assign's to react state
      const splitMetadataContent = content.split('===')
      const splitByMetadataTitle = splitMetadataContent[1]?.split('\n') 
      const postTitle = splitByMetadataTitle[1].replace('Title: ', '')
      const postAuthor = splitByMetadataTitle[2]
      const postBody = marked.parse(splitMetadataContent[splitMetadataContent.length - 1]);
      setTitle(postTitle)
      setAuthor(postAuthor)
      setPost(postBody)
      setE(content)
    })
    .catch(error => console.log(error))
  }, [])

  const test = e?.split('/n')

  return (<> 
    <Link to='/'>Return Home</Link>
    <h1>{title}</h1>
    <h3>{author}</h3>
    <div dangerouslySetInnerHTML={{ __html: post }}/>
  </>
  )
}