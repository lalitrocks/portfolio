import React, { useContext, useEffect, useState } from 'react'
import contact from '../css/contact.module.css'
import Card from './Card.js'
import { bigBall, smallBall } from './hook/UseBallSize';
import { uc } from './PageLayout';


export default function Contact() {
  const [formdata, setformdata] = useState({
    name: "",
    companyName: "",
    details: ""
  })


  //scoll window on click
  const clickHandler = () => {
    var e = document.getElementsByClassName('second')[0].getBoundingClientRect().top;
    window.scrollBy(0, e - 70)
  }


  //scroll symbol display:none 
  window.addEventListener("scroll", function () {
    if (document.getElementsByClassName("contact-hscroll")[0].getBoundingClientRect().top < 0) {
      document.getElementsByClassName("symbol")[0].style.display = "none";

    } else {
      document.getElementsByClassName("symbol")[0].style.display = "block";

    }
  })

  useEffect(() => {
    var form = document.getElementById("form");
    var mainerrordiv = document.getElementsByClassName("main-error-div")[0];

    function submitbutton(e) {
      e.preventDefault();

      if (formdata.name && formdata.companyName && formdata.details) {
        mainerrordiv.style.display = "none";
        mainerrordiv.children[1].innerHTML = "";

        fetch('http://localhost/personalwebsite/formsubmit.php', { method: "POST", body: JSON.stringify(formdata), headers: { "Content-Type": "application/json", 'Accept': 'application/json' } })
          .then(res => res.json())
          .then(res => {
            if (res.status === 200) {
              mainerrordiv.style.display = "none";
              document.getElementById('form').insertAdjacentHTML('beforebegin', res.msg);
            } else if (res.status === 404) {
              mainerrordiv.style.display = "block";
              mainerrordiv.children[1].innerHTML = res.err;
            }
          })

      } else {
        mainerrordiv.style.display = "block";
        mainerrordiv.children[1].innerHTML = "<li class='errorforname'>Please fill all fields</li>";
      }
    }

    form.addEventListener("submit", submitbutton);

    return () => {
      form.removeEventListener("submit", submitbutton)
    };

  }, [formdata])

  //statechange in form field
  const formfieldhandler = (event) => {
    setformdata({ ...formdata, [event.target.name]: event.target.value })
  }
  const ballDiv = useContext(uc)

  return (

    <div className={`${contact.divContainer}`}>

      <div className={`${contact.firstContainer}`}>
        <h1 className={`${contact.h1} contact-hscroll`}>Contact</h1>
        <h4 className={`${contact.h3} d-none d-sm-none d-md-block`}>Home/Contact</h4>
        <div className={`${contact.downSymbol} d-none d-sm-none d-md-block symbol`} onClick={clickHandler} onMouseEnter={() => bigBall(ballDiv)} onMouseLeave={() => smallBall(ballDiv)}>
          <i className={`${contact.green} fa-solid fa-angles-down`}></i>
        </div>
      </div>

      <div className={`${contact.secondContainer} second`}>

        <h2 className={`${contact.h2}`}>Contact Info</h2>
        <div className={`${contact.cardDiv} `}>
          <div className={`${contact.left}`}><Card icon="fa-solid fa-phone" content="+91--8556915521" heading="Phone Number" /></div>
          <div className={`${contact.right}`}><Card icon="fa-solid fa-envelope" content="lalits2828@Gmail.Com" heading="Email" /></div>
          <div className={`${contact.clear}`}></div>
        </div>

        <div className={`${contact.cardDiv}`}>
          <div className={`${contact.left}`}><Card icon="fa-brands fa-instagram" content="Username: lalit.sharma_13" heading="Instagram" /></div>
          <div className={`${contact.right}`}><Card icon="fa-solid fa-location-dot" content="Sector-19 Panchkula, Haryana" heading="Address" /></div>
          <div className={`${contact.clear}`}></div>
        </div>

      </div>

      <div className={`${contact.thirdContainer}`}>

        <div className={`${contact.contactDiv}`}>
          <h2 className={`${contact.h2}`}>Hire Me</h2>
          <h5 className='text-center'>Please Fill the form below and I will Get in touch with you shortly.</h5>

          <form className={`${contact.form}`} id='form'>
            {/* error div */}
            <div className='main-error-div inValid'>
              <h2>Please Read Carefully</h2>

              {/* kkslmsklnklsjn */}
              <ul className='main-error-ul'>
                {/* error */}
              </ul>
            </div>

            <div className='row'>

              <div className='col-12 col-sm-12 col-md-6'>
                <label htmlFor='name'> Your Name</label><br></br>
                <input id="name" name='name' placeholder='Enter Your Good Name' onChange={(event) => formfieldhandler(event)} value={formdata.name} className={`${contact.inputContact}  fname`} required />
              </div>

              <div className='col-12 col-sm-12 col-md-6'>
                <label htmlFor='companyName'> Company Name</label>
                <input id="companyName" name='companyName' placeholder='Enter Company Name' onChange={(event) => formfieldhandler(event)} value={formdata.companyName} className={`${contact.inputContact} company `} />
              </div>
            </div>

            <label htmlFor='Detail' className={`${contact.detailLabel}`}> Detail About Job</label>
            <textarea id="Detail" name='details' className={`${contact.textarea}`} onChange={(event) => formfieldhandler(event)} value={formdata.details} required></textarea>

            <div className='row justify-content-center'>
              <button className={`${contact.button} submit`} type='submit'>HIRE ME</button>
            </div>

          </form>

        </div>
      </div>

    </div>
  )
}
