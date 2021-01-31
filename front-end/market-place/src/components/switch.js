import React from 'react'
import '../styles/components/switch.css'

export default function Switch(props) {
  return (
    <label className="switch">
      <input 
        type="checkbox"
        defaultChecked={ props.status === 'active' ? true : false } 
      />
      <span className="slider round"></span>
    </label>
  )
}