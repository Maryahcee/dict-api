import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Nav'
import SearchBar from './SearchBar'
import Body from './Body'
import WordMeaning from './WordMeaning'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <SearchBar />
    <Body />
    <WordMeaning />
  </React.StrictMode>,
)
