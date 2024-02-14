import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p>Kai pan kehvu or gossip karvi che?😁😁😁😁? <br className='sm:block hidden'/> Chalo toh aapda mail ID par! </p>
        <Link to="/alwaystogether" className='btn'>Hit me up mara parmeshwari ji❤️❤️</Link>
    </section>
  )
}

export default CTA
