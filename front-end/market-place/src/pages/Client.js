import React, { useEffect, useState } from 'react'
import api from '../services/api'
import '../styles/pages/clientList.css'
import Switch from '../components/switch'


export default function Client() {
  const [clients, setClients] = useState([])
  const [name, setName] = useState('')
  const [birth_date, setBirthDate] = useState('')
  const [phone, setPhone] = useState('')

  const getClients =() => {
    api.get(`clients`).then(response => {
      setClients(response.data)
    })
  }

  useEffect(() =>{ getClients() },[])

  

  const deleteUser = async (id) => {
    await api.delete(`clients/${id}`).then(a => {
      alert('Cliente deletado')
      getClients()
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    if(!name.trim() || !phone.trim()|| !birth_date.trim()) {
      alert("Preencha os Campos")
      return 0;
    }

    const data = {
      name, 
      phone, 
      birth_date,
      status: 'active'
    }

    await api.post('clients', data)
      .then(e => {
        alert('Cadastro Ok!');
        setName('')
        setBirthDate('')
        setPhone('')
        getClients()
      }).catch(e => {
        alert('Tente novamente mais tarde..')
      }) 
  }

  const renderClients = (client) => {
    return (
      <tr key={client.id}>
        <td>{client.name}</td>
        <td>{client.phone}</td>
        <td>{client.birth_date}</td>
        <td className="options">
          <Switch status={client.status} />
        </td>
      </tr>
    )
  }
  return (
    <div className="section">
      
      <h3>Clientes</h3>
      <form onSubmit={handleSubmit} className="create-client">
        <fieldset>
          <label> Nome do cliente:</label>
          <input 
            type="text" 
            value={name}
            onChange={e => setName(e.target.value) }
          />
          <label> Telefone: </label>
          <input 
            type="text" 
            value={phone}
            onChange={e => setPhone(e.target.value.replace(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g,'a')) }
          />      
          <label> Data de aniversario: </label>
          <input 
            type="date" 
            value={birth_date}
            onChange={e => setBirthDate(e.target.value) }
          />
          <button 
            className="save" 
            onClick={handleSubmit}
          >
            Salvar
          </button>
        </fieldset>
      </form>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Data de nascimento</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {clients?.map(renderClients)}
        </tbody>
      </table>    
    </div>
  )
}