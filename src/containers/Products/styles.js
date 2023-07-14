import styled from 'styled-components'

export const Container = styled.div`
background: #E5E5E5;
min-height: calc(100vh - 72px);
`

export const ProductsImg = styled.img`
width: 100%;
margin-top: 72px;
;`

export const CategoriesMenu = styled.div`
width: 100%;
display: flex;
flex-flow: row wrap;
justify-content: center;
gap: 30px;
margin: 25px 0;
padding: 0 8px;



@media screen and (max-width: 700px) {
gap: 20px;
}

@media screen and (max-width: 540px) {
  gap: 15px;
}

`

export const CategoryButton = styled.button`
cursor: pointer;
background: none;
border: none;
border-bottom: ${props => props.isActiveCategory && '2px solid #9758A6'};
color: ${props => props.isActiveCategory ? '#9758A6' : '#9A9A9D'};
font-size: 17px;
font-weight: 500;
line-height: 20px;
text-align: left;
padding-bottom: 5px;

@media screen and (max-width: 540px) {
  font-size: .9rem;
}

`
export const ProductsContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 20px;
padding:20px;
justify-items: center;

.sc-hKVryf{
  @media screen and (max-width: 850px) {
    width: 14.5rem;
    img{
      width: 5rem;
      height: 5rem;
    }
    p {
      font-size:.8rem;
      margin-top: 0px;
    }

    button{
      width: 5.5rem;
      height: 1.5rem;
      font-size: .8rem;
    }
}

}
@media screen and (max-width: 1250px) {
  grid-template-columns: repeat(2, 1fr);
}

@media screen and (max-width: 540px) {
  grid-template-columns: repeat(1, 1fr);
}

`
