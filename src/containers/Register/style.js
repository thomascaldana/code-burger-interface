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
  height: 85%; // i changed from 70 to 85
`

export const ContainerItens = styled.div`
background: #373737;
border-radius: 0 10px 10px 0;
height: 85%; // i changed from 70 to 85
padding: 25px 75px;
display: flex;
flex-flow: column nowrap;
justify-content: center;

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
margin-top: 10px;
}
`

export const Label = styled.p`
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14px;
color: #FFFFFF;
margin-top: ${props => (props.error ? '12px' : '28px')};
margin-bottom: 5px;
`

export const Input = styled.input`
width: 391.42px;
height: 38.32px;
background: #FFFFFF;
box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
border-radius: 5px;
padding-left: 10px;
border: none; // Here i need to call a props to turn red
border: ${props => (props.error ? '2px  solid #CC1717' : 'none')};
`

export const SignInLink = styled.p`
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;


a {
  cursor: pointer;
  text-decoration: underline;
}
`

export const ErrorMessage = styled.p`
font-size: 14px;
font-weight: 400;
line-height: 16px;
color: #fa8484;
margin-top: 3px;
`
