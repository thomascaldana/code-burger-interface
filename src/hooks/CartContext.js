import React, { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const updateLocalStorage = async (products) => {
    await localStorage.setItem('codeburguer:cartInfo', JSON.stringify(products))
  }

  const putProductInCart = async (product) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id)

    let newCartProducts = []
    if (cartIndex >= 0) {
      newCartProducts = cartProducts

      newCartProducts[cartIndex].quantity =
        newCartProducts[cartIndex].quantity + 1

      setCartProducts(newCartProducts)
    } else {
      product.quantity = 1
      newCartProducts = [...cartProducts, product]
      setCartProducts(newCartProducts)
    }

    await updateLocalStorage(newCartProducts)
  }

  const deleteProducts = async (productId) => {
    const newCart = cartProducts.filter((product) => product.id !== productId)

    setCartProducts(newCart)

    await updateLocalStorage(newCart)
  }

  const increaseProducts = async (productId) => {
    const newCart = cartProducts.map((product) => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    })

    setCartProducts(newCart)

    await updateLocalStorage(newCart)
  }

  const decreaseProducts = async (productId) => {
    const cartIndex = cartProducts.findIndex((pd) => pd.id === productId)

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((product) => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      })

      setCartProducts(newCart)

      await updateLocalStorage(newCart)
    } /* else if (cartProducts[cartIndex].quantity === 1) {
      deleteProducts(productId)
    } */
  }

  const deleteProductsFromCart = async (productId) => {
    const cartIndex = cartProducts.findIndex((pd) => pd.id === productId)

    if (cartProducts[cartIndex].quantity === 1) {
      deleteProducts(productId)
    }
  }

  useEffect(() => {
    const loadCartData = async () => {
      const clientCartData = await localStorage.getItem('codeburguer:cartInfo')

      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData))
      }
    }

    loadCartData()
  }, [])

  return (
    <CartContext.Provider
      value={{
        putProductInCart,
        cartProducts,
        increaseProducts,
        decreaseProducts,
        deleteProductsFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used with UserContext')
  }

  return context
}

CartProvider.propTypes = {
  children: PropTypes.node
}
