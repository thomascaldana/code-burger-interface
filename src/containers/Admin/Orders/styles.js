import styled from 'styled-components'
import ReactSelect from 'react-select'
export const Container = styled.div`
  background: #efefef;
  min-height: 100vh;
`
export const ProductsImg = styled.img`
  width: 60px;
  border-radius: 5px;
`

export const ReactSelectStyle = styled(ReactSelect)`
  width: 250px;

  .css-13cymwt-control{
    cursor: pointer;
  }

`

export const Menu = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin: 20px 0;
`

export const LinkMenu = styled.a`
  color: #323D5D;
  cursor: pointer;
  padding-bottom: 7px;
  font-weight: ${props => props.IsActiveStatus ? '900' : '500'};
  border-bottom: ${props => props.IsActiveStatus && '2px solid #9758A6'}
/* 
  border-bottom: ${props => props.isActiveCategory && '2px solid #9758A6'};
color: ${props => props.isActiveCategory ? '#9758A6' : '#9A9A9D'}; */
`
