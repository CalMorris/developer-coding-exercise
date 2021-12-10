import React from "react";
import Posts from './Posts'
import Post from './Post'
import { Route , Routes} from 'react-router-dom'

export default function App () {
return (<>
  <Routes>
    <Route path='/' element={<Posts/>}></Route>
    <Route path='/post' element={<Post/>}></Route>
  </Routes>
  </>
)}
