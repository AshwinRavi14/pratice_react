import React from 'react'
import Card from '../../Components/Card/Card';
import '../../Components/Card/Card.css'
import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
      <h1>Hello Welcome to React</h1>
      <div className='main'>
          <Card />
          <Card />
          <Card />
      </div>
  </div> 
  )
}

export default Home