import styled from 'styled-components'
import BackgroundImage from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('${BackgroundImage}');
  display: flex;
  justify-content: center;
  align-items: center;
`
export const RegisterImage = styled.img`
  height: calc(45rem + 5vw);
  min-height: 36rem;
  max-height: 45rem;
  margin: auto 0 auto calc(10rem - 7vw);


  @media screen and (max-width: 1200px) {
    width: 0px;
    height: 0px;
    border: transparent;
    background-color: transparent;
  }
  `

export const ContainerItens = styled.div`
background: #373737;
border-radius: 0 10px 10px 0;
height: calc(45rem + 5vw);

padding: calc(2vw) calc(5vw);
display: flex;
flex-flow: column nowrap;
justify-content: center;
margin: auto calc(10rem - 7vw) auto 0 ;
width:calc(10rem + 20vw);
max-height: 45rem;
max-width: 40rem;
min-width: 22rem;
min-height: 36rem;

@media screen and (max-width: 1200px) {
  border-radius: 10px;
  padding: 20px 40px;
 
  }

  @media screen and (max-width: 400px) {
  padding: 20px 20px;
  margin: auto calc(10rem - 7vw) auto 0;
  max-width: 34rem;
  min-width: 19rem;
  min-height: 36rem;
  }


form{
  display: flex;
  flex-flow: column nowrap;
}
h1{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #FFFFFF;
  text-align: center;
  margin-top:  calc(5rem - 2vw);
  
}

img{
  width: calc(5rem + 10vw);
  margin: 0 auto;
  min-width: 15rem;
}

.sign-up-buttton{
  align-self: center;

  @media screen and (max-width: 1500px) {
    width: 100%;
    min-width: 250px;
  }
  @media screen and (min-width: 1500px) {
    
  }

}
`

export const Label = styled.p`
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14px;
color: #FFFFFF;
margin-top: 28px;
margin-bottom: 5px;
`

export const Input = styled.input`
width: 20vw;
height: 1vw;
min-width: 250px;
max-width: 360.42px;
min-height: 38.32px;
background: #FFFFFF;
box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
border-radius: 5px;
padding-left: 10px;
border: ${props => (props.error ? '2px  solid #CC1717' : 'none')};

@media screen and (max-width: 1500px) {
  width: 100%;
  }
@media screen and (max-width: 400px) {

  }
`

export const SignInLink = styled.p`
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
align-self: center;


a {
  cursor: pointer;
  text-decoration: underline;
  color: white;
}
`
