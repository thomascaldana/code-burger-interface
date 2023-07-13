import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
background: #efefef;
display: flex;
flex-flow: column nowrap;
align-items: center;
gap: 35px;
padding: 35px 0;

.rec.rec-arrow {
    background-color: #9758a6;
    color: #efefef;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: none;
    
    @media screen and (max-width: 400px) {
    scale: 70%;
    margin-left: -15px;
  }
}

.rec.rec-arrow:hover {
    border: 2px solid #9758a6;
    background-color: #efefef;
    color: #9758a6;
}

.rec.rec-arrow:disabled {
    border: none;
    background-color: #bebebf;
    color: #efefef;
}
`

export const OffersImg = styled.img`

 @media screen and (max-width: 850px) {
    height: 2.7rem;
  }
  @media screen and (max-width: 400px) {
    height: 2.2rem;
  } 
`
export const ContainerItems = styled.div`
display: flex;
flex-flow: column;
gap: 15px;

@media screen and (max-width: 650px) {
  gap: 5px;
  }
`
export const Image = styled.img`
width: 200px;

border-radius: 30px;

@media screen and (max-width: 650px) {
    width: 8rem;
    height: 8rem;
  }
@media screen and (max-width: 480px) {
    width: 6rem;
    height: 6rem;
    border-radius: 15px;
  }
@media screen and (max-width: 415px) {
  
    border-radius: 15px;
  }
`
export const ProductName = styled.p`
width: 200px;
text-align: center;
height: 20px;
color: #424242;
font-size: 1.1rem;
font-weight: 500;

@media screen and (max-width: 650px) {
width: 128px;
text-align: center;
font-size: .8rem;
  }

@media screen and (max-width: 480px) {
width: 96px;
color: #424242;
font-size: .8rem;
  }
`
export const ProductPrice = styled.p`
width: 200px;
height: 200px;
border-radius: 30px;
text-align: center;
height: 20px;
color: #000000;
font-size: 1.1rem;
font-weight: 500;

@media screen and (max-width: 650px) {
width: 128px;
text-align: center;
height: 20px;
color: #424242;
font-size: 0.8rem;
font-weight: 500;
  }
  @media screen and (max-width: 480px) {
width: 96px;
color: #424242;
font-size: 0.8rem;
  }
`
export const Button = styled(Link)`
background-color: rgba(151, 88, 166, 1);
height: 50px;
font-size: 1.3rem;
font-weight: 500;
color: #ffffff;
border: none;
border-radius: 10px;
cursor: pointer;


&:hover{
  opacity: 0.8;
}

&:active{
  opacity: 0.65;
}

text-decoration: none;
display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width: 650px) {
    width: 100%;
    height: 40px;
    font-size: 1rem;
  }
@media screen and (max-width: 485px) {
    width: 100%;
    height: 40px;
    font-size: 0.8rem;
  }
`
