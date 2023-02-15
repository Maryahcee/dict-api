import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Components/Nav'
import SearchBar from './Components/SearchBar'
import Body from './Components/Body'
import WordMeaning from './Components/WordMeaning'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <SearchBar />
    <Body />
    <WordMeaning />
  </React.StrictMode>,
)
