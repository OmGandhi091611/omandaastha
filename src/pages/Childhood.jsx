import React from 'react'
import { skills } from '../constants'

const Childhood = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, Mara <span className='blue-gradient_text font-semibold drop-shadow'>Parmeshwari ji❤️❤️</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Actually tara and mara, beev na childhood photos che, vichar toh hato that khali tara j hase pan malyaj nai ne bau
        </p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>US both</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-40 h-40' key={skill.name}>
              <div className='btn-back rounded-xl'>
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img 
                  src={skill.imageUrl} 
                  alt={skill.name} 
                  className='w-40 h-40 object-contain' 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Childhood
