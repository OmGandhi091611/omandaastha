import React, { useEffect, useRef, useState } from 'react'
import { us } from '../constants'
import { Link } from 'react-router-dom'
import CTA from '../components/CTA'
import song_3 from '../assets/Chedkhaniyaan - Bandish Bandits Shankar-Ehsaan-Loy,Shivam Mahadevan,Pratibha Baghel.mp3'
import { sound_off, sound_on } from '../assets/icons'
const Ustogether = () => {
  const audioRef = useRef(new Audio(song_3))
  audioRef.current.volume = 0.5
  audioRef.current.loop = true
  const [isPlayingMusic, setIsPlayingMusic] = useState(false)
  useEffect(() => {
    if(isPlayingMusic) {
      audioRef.current.play()
    }
    else {
      audioRef.current.pause()
    }
    return () => audioRef.current.pause()
  })
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Us <span className='blue-gradient_text font-semibold drop-shadow'>Moments❤️❤️</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Aa toh badha j photos mukvani icha che mane pan pachi website hang thayi jase😒😒. Kai nai enjoy our photos and my feelings that I wrote mara parmeshwari ji❤️❤️.        
        </p>
      </div>
      <div className='flex flex-wrap my-20 gap-16'>
        {us.map((date) => (
          <div className='lg:w-[400px] w-full' key={date.name}>
            <div className='block-container w-60 h-60'>
              <div className={`btn-back rounded-xl ${date.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={date.iconUrl} alt="Us" className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {date.name}
              </h4>
              <p className='mt-2 text-slate-500'>
                {date.description}
              </p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link 
                  to={date.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live che Photo😁😁😁
                </Link>
              </div>
            </div>
          </div>
        ))}
        <div className="fixed bottom-2 left-2">
          <img 
            src={isPlayingMusic ? sound_off : sound_on} 
            alt="sound" 
            className="w-10 h-10 cursor-pointer object-contain"
            onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          />
        </div>
      </div>
      <hr className='border-slate-200'/>
      <CTA />
      </section>
  )
}

export default Ustogether
