import React from 'react'
import './Aboutus.css'
import test from '../../assets/test.jpg'

function Aboutus() {
  return (
    <div className='whole'>
        <div className='mid'>
        <h3 style={{color:'#7620a1',fontWeight:'bold',marginTop:'4em'}}>Our mission</h3>
        <h1>We’re making home ownership simpler, faster — and most importantly, more accessible for all Americans.</h1>
        </div>
        <div className='upper'>
            <img src={test} alt='nothing'/>
            <div>
                <h3>The status quo is broken</h3>
                <p>The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.</p>
                <button>Read Vishal's Story</button>
            </div>
        </div>
        <div className='timeline'>
            <div className='contain left-cont'>
                <button>2014</button>
                <div className='text-box'>
                    <p>Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).</p>
                    <span className='left-cont-arrow'></span>
                </div>
            </div>
            <div className='contain right-cont'>
                <button>2017</button>
                <div className='text-box'>
                    <p>Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.</p>
                    <span className='right-cont-arrow'></span>
                </div>
            </div>
            <div className='contain left-cont'>
                <button>2020</button>
                <div className='text-box'>
                    <p>Better expands into the real estate market with Better Real Estate.</p>
                    <span className='left-cont-arrow'></span>
                </div>
            </div>
            <div className='contain right-cont'>
                <button>2023</button>
                <div className='text-box'>
                    <p>Better Mortgage partners with Ally Bank to build Ally powered by Better.</p>
                    <span className='right-cont-arrow'></span>
                </div>
            </div>
            <div className='contain left-cont'>
                <button className='today'>Today</button>
                <div className='text-box'>
                    <p>You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.</p>
                    <span className='left-cont-arrow'></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutus