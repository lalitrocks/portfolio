import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from '../css/navbar.module.css'
import { bigBall ,smallBall} from './hook/UseBallSize';
import { uc } from './PageLayout';

function Navbar() {


    //background color changes on specific page position
    window.addEventListener("scroll", function () {
        const navbar = document.getElementsByClassName("navbar")[0];
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = " rgb(60 57 57)"

        }else{
            navbar.style.backgroundColor = "#0c0c0c"

        }
    })

   
    const ballDiv = useContext(uc)


    return (
        <><nav className={` navbar navbar-expand-lg  pt-5`} id={`${style.backgroundColor}`}>
            <div className="container-fluid mt-21px">

                <div className='ms-5 rollDiv cv'>
                    <Link className={`navbar-brand ms-5 rollTextAnchor `} id={`${style.backgroundColor}`} href="/">
                        <b onMouseEnter={() => bigBall(ballDiv)} onMouseLeave={() => smallBall(ballDiv)}>
                            <span className={`rollTextUp`}> <span className='active'>Lalit</span> Bhardwaj</span>
                            <span className={`rollTextDown`}>Download CV</span>
                        </b>
                    </Link>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa-solid fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto ">

                        <li className="nav-item me-4 rollDiv home" onMouseEnter={() => bigBall(ballDiv)} onMouseLeave={() => smallBall(ballDiv)}>
                            <NavLink className="nav-link rollTextAnchor" id={`${style.backgroundColor}`} to="/">
                                <span className={`rollTextUp`}>Home</span>
                                <span className="rollTextDown">Home</span>
                            </NavLink>
                        </li>

                        <li className="nav-item me-4 rollDiv"  onMouseEnter={() => bigBall(ballDiv)} onMouseLeave={() => smallBall(ballDiv)}>
                            <NavLink className="nav-link  rollTextAnchor about" id={`${style.backgroundColor}`} to="/about">
                                <span className={`rollTextUp`}>About Me</span>
                                <span className={`rollTextDown`}>About Me</span>
                            </NavLink>
                        </li>
                        <li className="nav-item me-4 rollDiv education"  onMouseEnter={() => bigBall(ballDiv)} onMouseLeave={() => smallBall(ballDiv)}>
                            <NavLink className="nav-link  rollTextAnchor" id={`${style.backgroundColor}`} to="/education">
                                <span className={`rollTextUp`}>Education</span>
                                <span className={`rollTextDown`}>Education</span>
                            </NavLink>
                        </li>
                        <li className="nav-item me-5 rollDiv contact"  onMouseEnter={() => bigBall(ballDiv)} onMouseLeave={() => smallBall(ballDiv)}>
                            <NavLink className="nav-link  rollTextAnchor" id={`${style.backgroundColor}`} to="/contact">
                                <span className={`rollTextUp`}>Contact Me</span>
                                <span className={`rollTextDown`}>Contact Me</span>
                            </NavLink>
                        </li>


                    </ul>

                </div>
            </div>
        </nav></>
    )
}

export default Navbar