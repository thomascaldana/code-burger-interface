import styled from 'styled-components'

export const Container = styled.div`
  background: #ffffff;
  padding: 15px;
  border-radius: 20px;
  background: #FFF;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  .container-top{
    display: grid;
    grid-gap: 10px 50px;
    grid-template-areas: 
    'title title'
    'items items-price'
    'delivery-tax delivery-tax-price';

    .title{
      grid-area: title;
      margin-bottom: 20px;
    }
    
    .items{
      grid-area: items;
    }
    .items-price{
      grid-area: items-price;
    }
    .delivery-tax{
      grid-area: delivery-tax;
    }
    .delivery-tax-price{
      grid-area: delivery-tax-price;
    }

  }
    
  .container-bottom {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    font-size: 24px;
    font-weight: 500;
    margin-top: 50px;
  }
`
