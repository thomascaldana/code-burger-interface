import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-flow: column nowrap;
background: #ffffff;
border-radius: 20px;
box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
padding: 10px;
width: max-content;
margin: 0 auto;
`
export const Header = styled.div`
display: grid;
grid-template-columns: repeat(6, 1fr);
gap: 0 20px;
padding: 10px;
border-bottom: 1px solid #B5B5B5;

p{
  font-size: 16px;
  color: #B5B5B5;
}
`
export const Body = styled.div`
display: grid;
grid-template-columns: repeat(6, 1fr);
padding: 10px;
align-items: center;
justify-content: center;
width: max-content;
grid-gap: 10px 15px;

img {
  width: 130px;
  height: 130px;
  border-radius: 10px;;
}

p{
  font-size: 16px;
  color: #000000;
}

.quantity-container{
    display: flex;
    gap: 20px;
    
    button{
      height: 30px;
      background: transparent;
      border: none;    
      font-size: 24px;
      cursor: pointer;
  }

  p{
    margin-top: 5px;
  }

  }

  .trash-icon {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  .trash-icon:hover{
    opacity: .8;
    background-color: #f1f1f0
  }
`
export const EmptyCart = styled.p`
padding: 20px;
text-align: center;
font-weight: bold;
`
