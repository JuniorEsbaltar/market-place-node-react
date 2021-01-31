import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import '../../styles/pages/fieldTables.css'
import '../../styles/pages/order.css'

export default function Order() {
  const [orders, setOrders] = useState([])

  useEffect(() =>{ 
    api.get(`orders`).then(response => {
      setOrders(response.data)
  })},[])

  const renderOrders = (order) => {
    return (
      <tr key={order.id}>
        <td>
        <Link to={`pedido/${order?.id}`}>
          {order.order_number}
        </Link>
        </td>
        <td>{order.client_name}</td>
        <td>{order.date_order}</td>
        <td>{`R$ ${order.amount_price}`}</td>
        <td>{order.status}</td>
      </tr>
    )
  }

  return (
    <div className="section">
      <h3>Lista de Pedidos</h3>
      <Link className="button" to="pedidos/novo">
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