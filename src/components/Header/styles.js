import styled from 'styled-components'

export const Container = styled.div`
height: 72px;
background: #FFFFFF;
box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
display: flex;
align-items: center;
flex-flow: row nowrap;
justify-content: space-around;
position: fixed;
width: 100vw;
z-index: 2;



  @media screen and (max-width: 450px) {

  }

`
export const ContainerLeft = styled.div`
display: flex;
gap: 30px;

@media screen and (max-width: 380px) {
   gap: 1.3rem
}

`
export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.isActive ? '#9758A6' : '#555555'};
  font-size: 1rem;
  line-height: 19px;
  font-weight: ${props => props.isActive ? 'bold' : 'normal'};

  &:active{
    
  }

  
  @media screen and (max-width: 450px) {
    font-size: .9rem;

    img{
      width: 1.5rem;
    }
}
  
`
export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  @media screen and (max-width: 380px) {
    gap: 0.65rem;
  }
 
`
export const ContainerText = styled.div`

  p{
    color: #555555;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }

`
export const Line = styled.div`
height: 40px;
border-right: 1px solid #BABABA;
margin-left: 5px;
`
export const PageLinkExit = styled.a`
color: #9758A6;
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: normal;
cursor: pointer;
text-decoration: none;

`
