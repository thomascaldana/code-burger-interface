import styled from 'styled-components'

export const Container = styled.div`
background: #ffffff;
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

export const CategoryImg = styled.img`
`
export const ContainerItems = styled.div`
display: flex;
flex-flow: column;
gap: 10px;
`
export const Image = styled.img`
width: 200px;
height: 200px;
border-radius: 30px;

`
export const ProductName = styled.p`
width: 200px;
height: 200px;
text-align: center;
height: 20px;
color: #424242;
font-size: 1.1rem;
font-weight: 500;
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
`
export const Button = styled.button`
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
`
