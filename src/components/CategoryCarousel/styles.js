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
gap: 15px;
`
export const Image = styled.img`
width: 200px;
height: 200px;
border-radius: 30px;

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
`
