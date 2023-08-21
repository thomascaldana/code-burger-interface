import styled from 'styled-components'
import BackgroundImage from '../../assets/background-burguer.jpg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${BackgroundImage});
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BeerImgTop = styled.img`
 position: absolute;
    left: 15px;
    top: 0;
    opacity: 0.6;

    @media screen and (max-width: 750px) {
      display: none;
    }

`
export const BurguerImgTop = styled.img`
 position: absolute;
    right: 15px;
    top: 0;
    opacity: 0.6;


    @media screen and (max-width: 750px) {
      display: none;
    }
`

export const BeerImgDown = styled.img`
 position: absolute;
    right: 15px;
    bottom: 0;
    opacity: 0.6;

    @media screen and (max-width: 750px) {
      display: none;
    }
`
export const BurguerImgDown = styled.img`
 position: absolute;
    left: 15px;
    bottom: 15px;
    opacity: 0.6;

      @media screen and (max-width: 750px) {
        display: none;
    }
`
export const LoginImage = styled.img`
  height: calc( 10rem + 40vw);
  min-height: 36rem;
  max-height: 40rem;
  margin: auto 0 auto calc(10rem - 7vw);


  @media screen and (max-width: 1000px) {
    width: 0px;
    height: 0px;
    border: transparent;
    background-color: transparent;
  }
  `

export const ContainerItens = styled.div`
background: rgb(245,224,186);
background: linear-gradient(0deg, rgba(245,224,186,1) 0%, rgba(249,212,146,1) 35%);
height: 100%;
margin: 0 auto;
padding: 1rem;
display: flex;
flex-flow: column nowrap;
justify-content: center;
width: calc(25rem + 20vw);
max-width: 40rem;
min-width: 22rem;
min-height: 36rem;
z-index: 2;
box-shadow: 0px 2px 10px 0px rgba(0,0,0,.75);


@media screen and (max-width: 1000px) {
  padding: 20px 40px;
 
  }

  @media screen and (max-width: 400px) {
  padding: 20px 20px;
  max-width: 34rem;
  min-width: 19rem;
  }


form{
  display: flex;
  flex-flow: column nowrap;

  .error-massage-div{
    
    @media screen and (min-width: 700px) {
      margin-left: 5rem;
    }
  }
}

h1{
  font-family: 'Preahvihear', sans-serif;;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #000;
  text-align: center;
  margin-top:  5rem;
  
}

img{
  width: calc(22rem + 5vw);
  margin: 0 auto;
  min-width: 15rem;
  max-width: 25rem;

  @media screen and (max-width: 430px) {
    width: 21rem;
  }
  @media screen and (max-width: 360px) {
    width: 19.5rem;
  }
  @media screen and (max-width: 340px) {
    width: 17.5rem;
  }
}

.sign-up-buttton{
  align-self: center;
  margin: 75px auto 25px auto;
}
`

export const Label = styled.p`
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14px;
color: #000;
margin-top: 28px;
margin-bottom: 5px;
margin-left: 5rem;
margin-right: 5rem;

@media screen and (max-width: 700px) {
  margin: 28px auto 0 auto;
  width: 100%;
  }
`

export const Input = styled.input`
height: 1vw;
min-width: 250px;
min-height: 38.32px;
background: #f1f1f1;
box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
border-radius: 5px;
padding-left: 10px;
border: ${props => (props.error ? '2px  solid #CC1717' : 'none')};
margin-left: 5rem;
margin-right: 5rem;

@media screen and (max-width: 700px) {
  margin: 0 auto;
  width: 100%
  }

`

export const SignInLink = styled.p`
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 16px;
color: #000;
align-self: center;


a {
  cursor: pointer;
  text-decoration: underline;
  color: #000;

}
`
