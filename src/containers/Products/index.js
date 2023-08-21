import React, { useState, useEffect } from 'react'
import HomeLogo from '../../assets/home-logo.jpg'
import { Container, ProductsImg, CategoryButton, CategoriesMenu, ProductsContainer } from './styles'
import { CardProduct } from '../../components/CardProduct'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import PropTypes from 'prop-types'

export function Products ({ location: { state } }) {
  let categoryId = 0
  if (state?.categoryId) {
    categoryId = state.categoryId
  }

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(categoryId)

  useEffect(() => {
    async function loadCategories () {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todas' }, ...data]
      setCategories(newCategories)
    }

    async function loadProducts () {
      const { data: allProducts } = await api.get('products')

      const newProducts = allProducts.map(product => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })
      console.log(newProducts)
      setProducts(newProducts)
    }
    loadCategories()
    loadProducts()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products)
    } else {
      const newFilteredProducts = products.filter(product => product.category_id === activeCategory)

      setFilteredProducts(newFilteredProducts)
    }
  }, [activeCategory, products])

  return (
    <Container>
      <ProductsImg src={HomeLogo} alt='logo da home' />
      <CategoriesMenu>
        {categories && categories.map(category => (
          <CategoryButton type='button' key={category.id}
            isActiveCategory={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}>
            {category.name}
          </CategoryButton>
        ))}
      </CategoriesMenu>
      <ProductsContainer>
        {filteredProducts && filteredProducts.map(product => (
          <CardProduct className='card-product' key={product.id} product={product} />

        ))}
      </ProductsContainer>
    </Container>
  )
}

Products.propTypes = {
  location: PropTypes.object
}
