import React from "react";
import Posts from './Posts'
import Post from './Post'
import { Route , Routes} from 'react-router-dom'

export default function App () {
return (<>
  <Routes>
    {/* <Route exact path='/' component={Posts}></Route>
    <Route exact path='/:post' component={Post}> */}
    <Route path='/' element={<Posts/>} />
    <Route path='/:post' element={<Post/>} />
    </Routes> 
  </>
)}
