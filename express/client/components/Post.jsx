import React, {useState, useEffect} from 'react'
import {getBlogPost} from '../apis'
import { useParams } from "react-router-dom";



export default function Post () {
  const [post, setPost] = useState('')
  const params = useParams().post;
  console.log(params)

  // console.log(sear÷chParams)
  useEffect(() => {
    getBlogPost(params)
    .then (result => {
      console.log(result)
      setPost(result)})
    .catch(error => console.log(error))
  }, [])

  console.log(post)

  return (<> 
  <p>this is a post </p>
  <h2>{post}</h2>
  </>
  )
}