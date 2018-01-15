import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
      <div id='app-title'>
      <Link to='/'><h1>Keep My (Words)</h1></Link>
        <Link to="/"><button>Booklists</button></Link>
        <Link to="/allwords"><button>Browse all vocabulary</button></Link>
        <div id='notes'> Demo version </div>
      </div>
  )
}

export default Header
