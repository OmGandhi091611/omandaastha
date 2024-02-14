import React, { useEffect, useRef, useState } from 'react'
import { childhood_images, childhood } from '../constants'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import song_2 from '../assets/LYRICAL _ I love You (Song)  Bodyguard  feat. Salman khan, Kareena Kapoor.mp3'
import { sound_off, sound_on } from "../assets/icons";
import CTA from '../components/CTA'
const Childhood = () => {
  const audioRef = useRef(new Audio(song_2))
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
          {childhood_images.map((child) => (
            <div className='block-container w-40 h-40' key={child.name}>
              <div className='btn-back rounded-xl'/>
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img 
                  src={child.imageUrl} 
                  alt={child.name} 
                  className='w-40 h-40 object-contain' 
                  />
                </div>
            </div>
          ))}
        </div>
      </div>
      <div className='py-16'>
        <h3 className='subhead-text'>
            My Mind (When I see these photos of us.)
        </h3>
            <div className='mt-5 flex flex-col gap-3'>
              <p>
                Jyare pan tane joov ne toh evu feel thaay that, hu bas aane koi divas hurt na kari daav🥺🥺🥺, Maare toh aa cutie ne etli khush rakhvi che ne that ee bhuli jaay enu badhu j past😁😁😁. By the way mara photos toh ignore j kar ee khali show na che because prachi ben pase bi tara bija photos na malya.😂😂😂😂
              </p>
            </div>
            <div className='mt-12 flex'>
              <VerticalTimeline>
                {childhood.map((childhood_description) =>(
                  <VerticalTimelineElement
                    key={childhood_description.name}
                    date={childhood_description.date}
                    icon={
                      <div className='flex justify-center items-center w-full h-full'>
                        <img src={childhood_description.icon} alt={childhood_description.name} className='w-[70%] h-[70%] object-contain' />
                      </div>
                    }
                    iconStyle={{background: childhood_description.iconBg}}
                    contentStyle={{
                      borderBottom: '8px',
                      borderStyle: 'solid',
                      borderBottomColor: childhood_description.iconBg,
                      boxShadow: 'none'
                    }}
                  >
                    <div>
                      <h3 className='text-black text-xl font-poppins font-semibold'>
                        {childhood_description.title}
                      </h3>
                      <p className='text-black-500 font-medium font-base' style={{margin: 0}}>
                        {childhood_description.name}
                      </p>
                    </div>
                    <ul className='my-5 list-disc ml-5 space-y-2'>
                      {childhood_description.points.map((point, index) => (
                        <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            </div>
        <div className="fixed bottom-2 left-2">
          <img 
            src={isPlayingMusic ? sound_off : sound_on} 
            alt="sound" 
            className="w-10 h-10 cursor-pointer object-contain"
            onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          />
        </div>
      </div>
      <hr className='border-slate-200' />
      <CTA />
    </section>
  )
}

export default Childhood
