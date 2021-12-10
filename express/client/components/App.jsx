import React from "react";
import Posts from './Posts'
import Post from './Post'
import { Route } from 'react-router-dom'

export default function App () {
return (<>
    <Route exact path='/' component={Posts}/>
    <Route exact path='/:post' component={Post} /> 
  </>
)}
