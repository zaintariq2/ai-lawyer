import React from 'react'
import Rate from './Rate'
import UseEffectAPI from './useEffectAPI'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
      <h1 className='p-4 text-left'>The World's First Robot Lawyer</h1>
      <h4 className='p-4 pt-0 text-left'>The AI Lawyer is the home of the world's first robot lawyer. Fight corporations, beat bureaucracy and sue anyone at the press of a button.</h4>
      <Rate />

      <UseEffectAPI />

      <Footer />
    </div>
  )
}
