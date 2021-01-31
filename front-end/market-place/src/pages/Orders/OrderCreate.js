import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import '../../styles/pages/orderCreate.css'


export default function OrderCreate() {
  const [clients, setClients] = useState([])
  const [products, setProducts] = useState([])
  const [selectedProducts, setSelectedProducts] = useState([])
  const [selectedClientId, setSelectedClientId] = useState()
  const [amountPrice, setAmountPrice] = useState(0)

  useEffect(() =>{ 
    api.get(`clients`).then(response => {
      setClients(response.data)
    }) 
  },[])

  useEffect(() =>{ 
    api.get(`products`).then(response => {
      setProducts(response.data)
    }) 
  },[])

  const sendProduct = () => {
    const data = {
      products: selectedProducts
    }
    console.log(selectedClientId)
    api.post(`clients/${selectedClientId}/order`, data)
      .then(response => {
        console.log(response.data)
      })
  }

  const showOptions= (option) => {
    return (
      <option key={option.id} value={option.id}> 
        {option.name} 
      </option>
    )
  }

  const productOrders = (product, e) => {
    const allProduct= [...selectedProducts]
    const amountPriceNumber = Number(amountPrice)
    const productPrice = Number(product.price)

    if(e.target.checked === true) {
      allProduct.push(product)
      setAmountPrice((amountPriceNumber + productPrice).toFixed(2) )
    }else {
      allProduct.splice(allProduct.findIndex(prod => prod.id === product.id))
      setAmountPrice((amountPriceNumber - productPrice).toFixed(2) )
    }

    setSelectedProducts(allProduct)
  }

  const renderProducts = (product) => {
    return (
      <tr key={product.id}>
        <td>
          <input type="checkbox" 
            onChange={e => {productOrders(product,e)}}/>
        </td>
        <td> {product.name} </td>
        <td>R$ {product.price} </td>
      </tr>
    )
  }

  return (
    <div className="section">
      <h3>Novo Pedido</h3>
      <form className="create-order">
          <fieldset>
              <div className="options-card">
                <label>Selecione um Cliente:</label>
                <select onChange={(e)=>{setSelectedClientId(e.target.value)}} name="options">
                  {clients?.map(showOptions)}
                </select>
              </div>
              <label>Selecione um o mais pedidos</label>
              <a className="doOrder" onClick={sendProduct} >Relizar Pedido</a>
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {products?.map(renderProducts)}
                  <tr>
                    <td></td>
                    <td>Valor total</td>
                    <td>
                      R$ {amountPrice}
                    </td>
                  </tr>
                </tbody>
              </table>   
          </fieldset>
      </form>
      {/* <button onClick=>Teste</button> */}
    </div>
  )
}