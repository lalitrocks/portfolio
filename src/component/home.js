import React from 'react'
import style from '../css/new.module.css';
import image from '../images/lalit.png'

export default function home() {

  return (
    <div>
      <div className={`container-fluid d-none d-sm-none d-md-block ${style.divContainer}`} >
        <div className='outerAnimatedDiv'>
          <span className='outertext'>I am</span>
          <div className="animatedText">
            <li >
              <span>Lalit Bhardwaj</span>
            </li>
            <li >
              <span>Web Designer</span>
            </li>
          </div>
        </div>
        <p className={`${style.desc}`}>Hello, I’m <b className={`${style.green}`}>Lalit Bhardwaj</b>, Front-end Developer in Chandigarh building Elegent and Finest websites of all time.</p>
      </div>

      <div className={`container-fluid d-block d-sm-block d-md-none ${style.mobContainer}`}>
        <div className={`${style.mobImgdiv}`} >
          <img src={image} className={`${style.mobImg}`} alt="My photo" ></img>

        </div>
        <p className={`${style.descMob}`}>Hello, I’m <b className={`${style.green}`}>Lalit Bhardwaj</b>, Front-end Developer in Chandigarh building Elegent and Finest websites of all time.</p>
      </div>
    </div >
  )
}
