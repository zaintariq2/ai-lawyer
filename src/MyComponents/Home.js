import React from 'react'
import Rate from './Rate'
import UseEffectAPI from './useEffectAPI'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
      <h1 className='p-4 text-left'>The World's First Robot Lawyer</h1>
      <h5 className='p-4 pt-0 text-left'>The AI Lawyer is the home of the world's first robot lawyer. Fight corporations, beat bureaucracy and sue anyone at the press of a button.</h5>
      <div className='pl-5 text-left'>
        <h5>THINGS YOU CAN DO WITH DONOTPAY</h5>
        <ul>
          <li>Fight Corporations</li>
          <li>Beat Bureaucracy</li>
          <li>Find Hidden Money</li>
          <li>Sue Anyone</li>
          <li>Automatically Cancel Your Free Trials</li>
        </ul>
      </div>
      <Rate />

      <UseEffectAPI />

      <Footer />
    </div>
  )
}
