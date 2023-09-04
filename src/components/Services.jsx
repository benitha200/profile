import React from 'react'
import './style.css'
import { FaBeer, FaComputer } from 'react-icons/fa';
import { BsDisplay, BsPc, BsPcDisplay, BsTelephone} from 'react-icons/bs';


const Services = () => {
  return (
    <div>
        <div>
            <span className='header'>SERVICES</span>

            <div className='card-wrapper1'>
                <div className='card11'>
                    <div className='card-icon'>
                    <BsPcDisplay size="large"  className='cardicon'/>
                    </div>
                    <div className='card-body'>
                       <span className='card_text'>Front-End Development</span>
                    </div>

                </div>
                <div className='card12'>
                    <div className='card-icon'>
                    
                    <BsDisplay size="large"  className='cardicon'/>
                    </div>
                    <div className='card-body'>
                        <span className='card_text'>Back-End Development</span>
                    </div>

                </div>
                <div className='card13'>
                    <div className='card-icon'>
                    <BsPcDisplay size="large"  className='cardicon'/>
                    
                    </div>
                    <div className='card-body'>
                        <span className='card_text'>Website Maintenance and Support</span>
    
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Services