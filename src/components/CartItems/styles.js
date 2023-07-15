import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-flow: column nowrap;
background: #ffffff;
border-radius: 20px;
box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
padding: 10px;
width: max-content;
//margin: 0 auto;

@media screen and (max-width: 515px ){
  width: 90vw;
}
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

@media screen and (max-width: 950px) {
    grid-template-columns: 1fr 1fr 0.5fr 0.5fr 0.6fr 0.2fr;
  }
  @media screen and (max-width: 650px) {
    grid-template-columns: 4rem 6rem 4rem 4rem 4.5rem 1rem;
    gap: 0 10px;
    p{
      text-align: center;
    }

    @media screen and (max-width: 515px){
      display: none;
    }
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

    @media screen and (max-width: 650px) {
      gap: 10px;
      
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

  @media screen and (max-width: 950px) {
    grid-template-columns: 1fr 1fr 0.5fr 0.5fr 0.6fr 0.2fr;
  }

  @media screen and (max-width: 650px){
    grid-template-columns: 4rem 6rem 4rem 4rem 4.5rem 1rem;
    grid-gap: 10px 10px;
    img{
      width: 3.8rem;
    }
    p{
      text-align: center;
      font-size: 0.8rem;
    }
  }

  @media screen and (max-width: 515px){
    width: 90vw;
    grid-template-columns: 4rem 6rem 4rem;
    grid-template-rows: 4rem 0.7rem;
    justify-items: center;

    
  .trash-icon {
    width: 17px;
    height: 17px;
    cursor: pointer;
  }
  }
`
export const EmptyCart = styled.p`
padding: 20px;
text-align: center;
font-weight: bold;
`
