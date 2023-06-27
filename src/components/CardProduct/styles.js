import styled from 'styled-components'

export const Container = styled.div`
background: #ffffff;
box-shadow: 0px 30px 60px 0px rgba(57, 57, 57, 0.10);
display: flex;
gap: 12px;
padding: 16px;
border-radius: 20px;
width: max-content;
`
export const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 15px
`
export const ProductName = styled.p`
font-size: 18px;
font-weight: 500;
text-align: left;
line-height: 19px;
color: #000000;
text-align: center;
margin-top: 5px;
`
export const ProductPrice = styled.p`
text-align: center;
font-size: normal;
font-weight: 500;
line-height: 21px;
margin-top: 30px;
`
export const ContainerItems = styled.div`
display: flex;
flex-flow: column nowrap;
gap: 10px;
justify-content: space-between;
`
