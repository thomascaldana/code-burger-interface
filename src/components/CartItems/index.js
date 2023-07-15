import React from 'react'
import TrashIcon from '../../assets/Trash-icon.png'
import { Container, Header, Body, EmptyCart } from './styles'
import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'

export function CartItems () {
  const { cartProducts, increaseProducts, decreaseProducts, deleteProductsFromCart } = useCart()
  console.log(cartProducts)
  return (
    <Container>
      <Header>
        <p></p>
        <p>Items</p>
        <p>Preço</p>
        <p>Quant.</p>
        <p>Total</p>
        <p></p>

      </Header>
      {cartProducts && cartProducts.length > 0
        ? cartProducts.map(product => (
          <Body key={product.id}>
            <img src={product.url} />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <div className='quantity-container'>
              <button onClick={() => decreaseProducts(product.id)}>-</button>
              <p>{product.quantity}</p>
              <button onClick={() => increaseProducts(product.id)}>+</button>
            </div>
            <p>{formatCurrency(product.quantity * product.price)}</p>
            <img src={TrashIcon} className='trash-icon' onClick={() => deleteProductsFromCart(product.id)}></img>
          </Body>
        ))
        : (<EmptyCart>Carrinho vazio</EmptyCart>)
      }

    </Container>

  )
}
