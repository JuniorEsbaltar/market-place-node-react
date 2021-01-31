import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import '../../styles/pages/clientList.css'


export default function Order() {
  const [orders, setOrders] = useState([])

  useEffect(() =>{ 
    api.get(`orders`).then(response => {
      setOrders(response.data)
  })},[])

  const renderOrders = (order) => {
    return (
      <tr key={order.id}>
        <td>{order.order_number}</td>
        <td>{order.client_name}</td>
        <td>{order.date_order}</td>
        <td>{order.amount_price}</td>
        <td>{order.status}</td>

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
      <h3>Lista de Pedidos</h3>
      <Link to="orders/create">
          Realizar novo pedido
      </Link>
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