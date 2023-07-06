import styled from 'styled-components'
import { Button } from '../../../components/Button'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    background: #565656;
    border-radius: 10px;
    padding: 30px;
  }
`
export const Label = styled.p`
  font-size: 14px;
  color: #FFFFFF;
  margin-bottom: 3px;
`
export const Input = styled.input`
  height: 40px;
  border-radius: 8px;
  background: #FFF;
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.10);
  border: none;
  margin-bottom: 25px;
  width: 100%;
`
export const ButtonStyles = styled(Button)`
  width: 100%;
  margin-top: 25px;

`
