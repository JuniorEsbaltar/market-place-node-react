import React from 'react'
import api from '../services/api'
import '../styles/components/switch.css'

export default function Switch(props) {
  
  const updateStatus =(e) => {
    api.put(`${props.route}/${props.person.id}`).then(response => {
      console.log(response)
    }).catch(e => alert('Erro ao alterar statu'))
  }
  
  return (
    <label className="switch">
      <input 
        type="checkbox"
        defaultChecked={ props.person?.status === 'active' ? true : false } 
        onClick = {(e) =>{updateStatus(e)}}
      />
      <span className="slider round"></span>
    </label>
  )
}