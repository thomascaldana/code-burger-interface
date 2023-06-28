import styled from 'styled-components'

export const Container = styled.div`
background: #ffffff;
border-radius: 20px;
box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
padding: 10px;
width: max-content;
`
export const Header = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
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
grid-template-columns: repeat(5, 1fr);
padding: 10px;
width: max-content;
grid-gap: 10px 15px;

img {
  width: 130px;
  height: 130px;
  border-radius: 10px;;
}

p{
  font-size: 16px;
  color: #000000
}
`
export const EmptyCart = styled.p`
padding: 20px;
text-align: center;
font-weight: bold;
`
