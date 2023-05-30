import React from 'react'
import contact from '../css/contact.module.css'


export default function Card(props) {
    return (
        <>
            <div className={`${contact.card}`}>
                
                <h4> <i className={props.icon}></i> {props.heading}</h4>
                <p>{props.content}</p>

            </div>
        </>
    )
}
