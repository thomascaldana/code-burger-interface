import styled from 'styled-components'

export const Container = styled.div`
background: #E5E5E5;
min-height: 100vh;
`

export const ProductsImg = styled.img`
width: 100%;`

export const CategoriesMenu = styled.div`
display: flex;
justify-content: center;
gap: 50px;
margin: 25px 0;

`

export const CategoryButton = styled.button`
cursor:pointer;
background:none;
border: none;
border-bottom: ${props => props.isActiveCategory && '2px solid #9758A6'};
color: ${props => props.isActiveCategory ? '#9758A6' : '#9A9A9D'};
font-size: 17px;
font-weight: 500;
line-height: 20px;
text-align: left;
padding-bottom: 5px;;
`
export const ProductsContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 20px;
padding:20px;
justify-items: center;

`
