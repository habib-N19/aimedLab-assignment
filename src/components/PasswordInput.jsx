import { useState } from 'react'
import styled from 'styled-components'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import InputField from './InputField'
import Input from './Input'
const PasswordInput = () => {
  // Input component specifically for password fields, with a toggle able visibility feature.

  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
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
