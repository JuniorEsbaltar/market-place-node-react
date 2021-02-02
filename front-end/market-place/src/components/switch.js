import React from 'react'
import api from '../services/api'
import '../styles/components/switch.css'

export default function Switch(props) {
  
  const updateStatus =() => {
    api.put(`${props.route}/${props.person.id}`).then(response => {
      alert('Atualizado com sucesso')
    }).catch(e => alert('Erro ao alterar status'))
  }
  
  return (
    <label className="switch">
      <input 
        type="checkbox"
        defaultChecked={ props.person?.status === 'active' ? true : false } 
        onClick = {() =>{updateStatus()}}
      />
      <span className="slider round"></span>
    </label>
  )
}