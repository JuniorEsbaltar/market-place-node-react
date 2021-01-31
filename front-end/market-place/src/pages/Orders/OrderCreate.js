import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import '../../styles/pages/orderCreate.css'
import { useHistory } from "react-router-dom";


export default function OrderCreate() {
  const history = useHistory();

  const [clients, setClients] = useState([])
  const [products, setProducts] = useState([])
  const [selectedProducts, setSelectedProducts] = useState([])
  const [selectedClientId, setSelectedClientId] = useState()
  const [amountPrice, setAmountPrice] = useState(0)

  useEffect(() =>{ 
    api.get(`clients/active`).then(response => {
      setClients(response.data)
    }) 
  },[])

  useEffect(() =>{ 
    api.get(`products/active`).then(response => {
      setProducts(response.data)
    }) 
  },[])

  const sendProduct = () => {
    if(!selectedProducts || !selectedClientId) {
      alert("Selecione um cliente e ao menos um produto")
      return 0;
    }

    const data = {
      products: selectedProducts
    }
    console.log(selectedClientId)
    api.post(`clients/${selectedClientId}/order`, data)
      .then(response => {
        console.log(response.data)
        history.push('/pedidos')
      }).catch(e => alert("Tente novamente mais tarde"))
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
      <button className="doOrder" onClick={sendProduct} >Relizar Pedido</button>
      <form className="create-order">
          <fieldset>
              <div className="options-card">
                <label>Selecione um Cliente:</label>
                <select 
                  onChange={(e)=>{setSelectedClientId(e.target.value)}}
                  name="options"
                >
                  <option value="">Selecione um cliente</option>
                  {clients?.map(showOptions)}
                </select>
              </div>
              
              <label>Selecione um o mais pedidos</label>
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
      
    </div>
  )
}