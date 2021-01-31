import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
import '../../styles/pages/fieldTables.css'
import '../../styles/pages/orderShow.css'


export default function OrderShow() {
  const [order, setOrder] = useState()
  const params = useParams()

  useEffect(() =>{ 
    api.get(`orders/${params.id}`).then(response => {
      console.log(response.data)
      setOrder(response.data)
  })},[])

  const renderProductsCard = (product) => {
    return (
      <div key={product?.id} className="card">
        <label>Nome</label>
        <input value={product?.name} disabled={true}></input>

        <label>Preco</label>
        <input value={`R$ ${product?.price}`} disabled={true}></input>
      </div>
    )
  }

  return (
    <div className="section">
      <h3>Informações do pedido:</h3>

      <div className="order-container">
        <label>Numero do pedido:</label>
        <input value={order?.order_number} disabled={true}></input>

        <label>Valor:</label>
        <input value={`R$ ${order?.amount_price}`} disabled={true}></input>

        <label>Data :</label>
        <input value={order?.date_order} disabled={true}></input>

        <h3>Produtos:</h3>
        <div className="card-container">
          { order?.products.map(renderProductsCard) }
        </div>
      </div>
    </div>
  )
}