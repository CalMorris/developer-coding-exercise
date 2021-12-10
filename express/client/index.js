import React from 'react';
import App from './components/App'
import { HashRouter as Router } from 'react-router-dom'


document.addEventListener('DOMContentLoaded', () => {
  render(
    <Router>
      <App />
    </Router>,
    document.getElementById('app')
  )
})
