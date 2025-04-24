import React from 'react';
import './intro.css';
import bg from '../../assests/okay.png' 

const Intro = () => {
    return (
        <section id="intro">
            <div className="introcontent">
                <span className='hello'>Hey!</span>
                <span className='introText'>I am Meet Sharma</span>
                <span className='introText'>Prompt engineer, ML engineer</span>
                <p className='intropara'> I am a skilled prompt engineer with high experience in the field of Machine Learning.</p>
            </div>
            <img src={bg} alt="Monke" className='bg' />
        </section>
    );
};

export default Intro;