import React from 'react'
import ReactDOM from 'react-dom'
// import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import { HashRouter as Router } from 'react-router-dom'

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//         // <BrowserRouter>
//         <Router>
//           <App />
//         </Router>
//         // {/* </BrowserRouter> */}
//     , document.getElementById('app')
//   )
// })

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
        <Router>
          <App />
        </Router>
    , document.getElementById('app')
  )
})