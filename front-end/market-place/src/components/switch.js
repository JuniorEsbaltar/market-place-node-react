import React from 'react'
import api from '../services/api'
import '../styles/components/switch.css'

export default function Switch(props) {
  
  const updateStatus =() => {
    api.put(`${props.route}/${props.person.id}`).then(response => {
      console.log(response)
    })
  }
  
  return (
    <label className="switch">
      <input 
        type="checkbox"
        defaultChecked={ props.person?.status === 'active' ? true : false } 
        onChange = {() =>{updateStatus()}}
      />
      <span className="slider round"></span>
    </label>
  )
}