import React from 'react'
import Fields from '../Fields/Fields'
import { Link } from 'react-router'

const Home = () => {
  return (
    <>
      <div>
      <Fields></Fields>
    </div>
    <div>
      <Link className='btn btn-accent btn-soft' to='/about'>about</Link>
    </div>  
    </>
  )
}

export default Home
