import styled from 'styled-components'

export const Container = styled.div`
background: #e5e5e5;
min-height:  calc(100vh - 72px);

.wrapper{
    display: flex;
    background-color: red;
  
}

`

export const CartImg = styled.img`
margin-top: 72px; 
width: 100%;`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
  padding-bottom: 30px;

  @media screen and (max-width: 1200px) {
    flex-flow: column nowrap;
    align-items: center;
    gap: 1.2rem;

  }

`
