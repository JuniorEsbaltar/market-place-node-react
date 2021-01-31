import React, { useEffect, useState } from 'react'
import api from '../services/api'
import '../styles/pages/fieldTables.css'
import Switch from '../components/switch'


export default function Product() {
  const [products, setProducts] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const getProducts =() => {
    api.get(`products`).then(response => {
      setProducts(response.data)
    })
  }

  useEffect(() =>{ getProducts() },[])

  const renderProducts = (product) => {
    return (
      <tr key={product.id}>
        <td>{product.name}</td>
        <td>{`R$ ${product.price}`}</td>
        <td className="options">
          <Switch person={product} route='products' />
        </td>

      </tr>
    )
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(!name.trim() || !price.trim()) {
      alert("Preencha os Campos")
      return 0;
    }
    const data = {
      name, 
      price, 
      status: 'active'
    }

    await api.post('products', data)
      .then(e => {
        alert('Cadastro Ok!');
        setName('')
        setPrice('')
        getProducts()
      }).catch(e => {
        alert('Tente novamente mais tarde..')
      }) 
  }
  return (
    <div className="section">
      
      <h3>Lista de Clientes</h3>
      <form onSubmit={handleSubmit} className="create-client">
        <fieldset>
          <label> Nome: </label>
          <input 
            type="text" 
            value={name}
            onChange={e => setName(e.target.value) }
          />
          <label> Valor: </label>
          <input 
            type="number" 
            value={price}
            onChange={e => setPrice(e.target.value) }
          />      
          <button className="save" onClick={handleSubmit}>Salvar</button>
        </fieldset>
      </form>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Valor</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {products?.map(renderProducts)}
        </tbody>
      </table>    
    </div>
  )
}