import { useState } from 'react'
import styled from 'styled-components'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import InputField from './InputField'
const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  //   const InputContainer = styled.div`
  //     position: relative;
  //     display: flex;
  //     width: 60%;
  //     align-items: center;
  //     border: 1px solid #04072f66;
  //     border-radius: 8px;
  //     padding: 10px;
  //   `
  const Input = styled.input`
    /* flex: 1; */
    /* width: 70%; */
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    border: none;
    outline: none;
  `
  const ToggleBtn = styled.button`
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  `
  return (
    <InputField>
      <Input
        type={showPassword ? 'text' : 'password'}
        placeholder='Enter Password'
        defaultValue={password}
        onBlur={e => setPassword(e.target.value)}
      ></Input>
      <ToggleBtn onClick={togglePasswordVisibility}>
        {showPassword ? <FiEyeOff /> : <FiEye />}
      </ToggleBtn>
    </InputField>
  )
}
export default PasswordInput
