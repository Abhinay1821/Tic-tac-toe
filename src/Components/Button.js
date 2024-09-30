import '../App.css'
import React from 'react'

export default function Button({value,onButtonClick}){
    return (
        <button onClick={onButtonClick} className='tic-button'>{value}</button>
    )
}