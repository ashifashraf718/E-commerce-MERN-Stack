import React from 'react'

const NewsletterBox = () => {
    const onSUbmitHandler=(e)=>{ 
        e.preventDefault()
    }
  return (
    <div className='text-center'>
        <p className='text-2xl text-gray-800 font-medium'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi id provident </p>
        <form onSubmit={onSUbmitHandler} className='w-ful sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input type="email" placeholder='Enter Your Email' className='w-full sm:flex-1 outline-none' required />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE NOW</button>
        </form>
    </div>
  )
}

export default NewsletterBox
