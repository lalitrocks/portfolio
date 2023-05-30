import React, { useEffect, useRef, useState } from 'react'
import { Outlet, useLocation, } from 'react-router-dom'
import Navbar from './navbar.js'
import style from '../css/new.module.css'
import backPng from '../images/back.png';
import '../css/all.css'


const usercontext = React.createContext();

function PageLayout() {

  // states
  // imgdisplay:used to hide image 
  // divRef:ref to ball div
  // setphoto1000px:height of image
  const [ImgDisplay, setImgDisplay] = useState({display:"none"})
  const [photo1000px, setphoto1000px] = useState()
  var divRef = useRef(null)
  const l = useLocation();



  // movement of ball
  function ball(e) {
    var x = e.pageX;
    var y = e.pageY;
    var ballDiv = document.getElementsByClassName("ballDiv")[0];

    var height = ballDiv.getBoundingClientRect().height;
    var width = ballDiv.getBoundingClientRect().width;

    ballDiv.style.top = (y - (parseInt(height) / 2)) + `px`;
    ballDiv.style.left = (x - (parseInt(width) / 2)) + 'px';


  }

  useEffect(() => {

    // set image height w.r.t screen total height 
    if(window.screen.height > 1000){
      
      setphoto1000px({ height:"500px"})
    }else{
      setphoto1000px({})

    }

    // displaying image on only home page adn removing classes on contact div and adress div as they are going to hide on smalll scfreen as we have used different layout
    if (l.pathname === '/') {
      setImgDisplay({ display:"inline"})
      document.getElementsByClassName("backphoto")[0].classList.add("d-none","d-sm-none","d-md-block")
      document.getElementsByClassName("contact-remove")[0].classList.add("d-none","d-sm-none","d-md-block")
      document.getElementsByClassName("address-remove")[0].classList.add("d-none","d-sm-none","d-md-block")

    } else {
      setImgDisplay({ display:"none"})
      document.getElementsByClassName("backphoto")[0].classList.remove("d-none","d-sm-none","d-md-block")
      document.getElementsByClassName("contact-remove")[0].classList.remove("d-none","d-sm-none","d-md-block")
      document.getElementsByClassName("address-remove")[0].classList.remove("d-none","d-sm-none","d-md-block")


    }


  }, [l])

  
  

  // const displa = {
  //   display: ImgDisplay
  // }

  const displa = {...ImgDisplay,...photo1000px};
  

  return (
    <div className={`${style.bImage}`} onMouseMove={(e) => ball(e)}>

{/*  ball div */}

      <div className={` ballDiv  d-none d-sm-none d-md-block ${style.ball}`} ref={divRef}></div>

{/*  image */}
      <img src={backPng}  className={`backphoto ${style.backPhoto}`} style={displa}></img>



      <usercontext.Provider value={divRef}>
      <Navbar />
      <Outlet />
      </usercontext.Provider>


      {/* some fixed div */}
      <div className={`contact-remove ${style.fixedContact}`}>

        <div className={`${style.spanRotate}`} >Follow</div>
        <div className={`${style.spanRotate}`}>Me</div>

        <div className={`${style.whiteDiv}`}></div>
        <a href='./kk' className={`${style.fixedAnchor}`}>
          <i className={` fa-brands fa-facebook ${style.icons}`}></i>
        </a>
        <a href='./kk' className={`${style.fixedAnchor}`}>
          <i className={` fa-brands fa-instagram ${style.icons}`}></i>
        </a>

      </div>
      <p className={` address-remove ${style.address} ms-5`}>Email : lalits2828@gmail.com <br />Contact Me : +91-8556915521</p>

    </div>
  )
}

export default PageLayout
export {usercontext as uc}