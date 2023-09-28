import React from 'react'
import './style.css'
import river from '../assets/img/river.png'
import sms from '../assets/img/sms.png'
import fleet from '../assets/img/fleet.png'
const Project = () => {
    return (
        <div>
            <span className='header'>Projects</span>
            <div className='card__wrapper'>
                <div className="card80">
                    <img className="img"
                        src={river} alt='driver' />
                    {/* <svg
                        className="img"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlSpace="preserve"
                        width="100%"
                        height="100%"
                        version="1.1"
                        shapeRendering="geometricPrecision"
                        textRendering="geometricPrecision"
                        imageRendering="optimizeQuality"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        viewBox="0 0 784.37 1277.39"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                    </svg> */}
                    <div className="textBox">
                        <p className="text head">Driver Service</p>
                        <span>Driver Services</span>
                        {/* <p className="text price">1.654,34€</p> */}
                    </div>
                </div>
                <div className="card80">
                    <img className="img"
                        src={sms} alt='driver' />
                    {/* <svg
                        className="img"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlSpace="preserve"
                        width="100%"
                        height="100%"
                        version="1.1"
                        shapeRendering="geometricPrecision"
                        textRendering="geometricPrecision"
                        imageRendering="optimizeQuality"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        viewBox="0 0 784.37 1277.39"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                    </svg> */}

                    <div className="textBox">
                        <p className="text head">Messaging Web Application</p>
                        <span>Contributed on Messaging Web Application</span>

                        {/* <p className="text price">1.654,34€</p> */}
                    </div>
                </div>
                <div className="card80">
                    <img className="img"
                        src={fleet} alt='driver' />
                    {/* <svg
                        className="img"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlSpace="preserve"
                        width="100%"
                        height="100%"
                        version="1.1"
                        shapeRendering="geometricPrecision"
                        textRendering="geometricPrecision"
                        imageRendering="optimizeQuality"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        viewBox="0 0 784.37 1277.39"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                    </svg> */}
                    <div className="textBox">
                        <p className="text head"> Fleet System</p>
                        <span>Fleet</span>
                        {/* <p className="text price">1.654,34€</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project