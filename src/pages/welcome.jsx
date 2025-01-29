import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { images } from '../common'

const Welcome = () => {
  const navigate = useNavigate()
  const [currentImage, setCurrentImage] = useState(0)
  const [timeLeft, setTimeLeft] = useState(50)

  useEffect(() => {
    // Image slider timer - changes every 5 seconds
    const sliderTimer = setInterval(() => {
      setCurrentImage(prev => prev === 0 ? 1 : 0)
    }, 5000)

    // Navigation timer
    const navigationTimer = setTimeout(() => {
      navigate('/welcome/demos')
    }, 50000)

    // Countdown timer
    const countdownTimer = setInterval(() => {
      setTimeLeft(prev => prev - 1)
    }, 1000)

    return () => {
      clearInterval(sliderTimer)
      clearTimeout(navigationTimer)
      clearInterval(countdownTimer)
    }
  }, [navigate])

  return (
    <div className='w-full h-full relative overflow-hidden'>
      <div className='flex transition-transform duration-1000 ease-in-out'
           style={{ transform: `translateX(-${currentImage * 100}%)` }}>
        <img 
          src={images.welcome} 
          alt="welcome" 
          className='!w-full shrink-0' 
        />
        <img 
          src={images.welcome1} 
          alt="welcome1" 
          className='!w-full shrink-0' 
        />
      </div>
      
      {/* Slide indicators */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2'>
        <button 
          className={`w-3 h-3 rounded-full ${currentImage === 0 ? 'bg-blue-500' : 'bg-gray-300'}`}
          onClick={() => setCurrentImage(0)}
        />
        <button 
          className={`w-3 h-3 rounded-full ${currentImage === 1 ? 'bg-blue-500' : 'bg-gray-300'}`}
          onClick={() => setCurrentImage(1)}
        />
      </div>

      {/* Countdown timer */}
      <div className='fixed bottom-4 right-4 bg-black/50 text-white px-4 py-2 rounded'>
        Redirecting in {timeLeft} seconds...
      </div>
    </div>
  )
}

export default Welcome