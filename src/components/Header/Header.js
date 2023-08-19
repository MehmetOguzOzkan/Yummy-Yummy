import React from 'react'
import "./Header.scss"
import Navbar from './Navbar'
import SearchForm from './SearchForm'

const Header = () => {
  return (
    <header className='header'>
      <Navbar />
      <div className='header-content flex align-center justify-center flex-column text-center'>
        <SearchForm />
        <h1 className='text-light-yellow header-title ls-2'>What are you favorite cuisines?</h1>
        <p className='text-uppercase text-light-green my-3 ls-1'>personalize your experience</p>
      </div>
    </header>
  )
}

export default Header