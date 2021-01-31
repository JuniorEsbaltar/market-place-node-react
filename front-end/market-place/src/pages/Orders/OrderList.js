import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import '../../styles/pages/clientList.css'
import Switch from '../../components/switch'


export default function Order() {
  const [orders, setOrders] = useState([])

  useEffect(() =>{ 
    api.get(`orders`).then(response => {
      setOrders(response.data)
  })},[])

  const renderOrders = (order) => {
    return (
      <tr key={order.id}>
        <td>{order.name}</td>
        <td>{order.phone}</td>
        <td>{order.birth_date}</td>
        <td className="options">
          <Switch status={order.status} />
          <button onClick={()=> {console.log("aa")}}>X</button>
        </td>

      </tr>
    )
  }

  // const deleteUser = async (id) => {
  //   await api.delete(`orders/${id}`).then(a => {
  //     alert('Ordere deletado')
  //     getOrders()
  //   })
  // }

  return (
    <div className="section">
      <h3>Lista de Orders</h3>
      <table>
        <thead>
          <tr>
            <th>Numero do pedido</th>
            <th>Nome do cliente</th>
            <th>Data da compra</th>
            <th>Valor Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map(renderOrders)}
        </tbody>
      </table>    
    </div>
  )
}