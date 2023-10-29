import { useState } from 'react'
import styled from 'styled-components'

const Terms = () => {
  const [rememberMe, setRememberMe] = useState(false)
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const TermsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-top: 15px;
    margin-bottom: 15px;
    width: 80%;
  `
  const RememberMeCheckbox = styled.label`
    display: flex;
    align-items: center;
    margin-right: 15px;
    cursor: pointer;
  `
  const ResetPassword = styled.a`
    text-decoration: none;
    color: #f78719; ;
  `
  const AgreeToTermsCheckbox = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
  `
  const CheckboxInput = styled.input`
    margin-right: 5px;
  `
  return (
    <TermsContainer>
      <RememberMeCheckbox>
        <CheckboxInput
          type='checkbox'
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
        ></CheckboxInput>
        Remember Me
      </RememberMeCheckbox>
      <ResetPassword href='/reset-password'>Change Password</ResetPassword>
      <AgreeToTermsCheckbox>
        <CheckboxInput
          type='checkbox'
          checked={agreeToTerms}
          onChange={() => setAgreeToTerms(!agreeToTerms)}
        />
        I agree to{' '}
        <a href='/terms' style={{ color: '#F78719' }}>
          Terms and Conditions
        </a>
      </AgreeToTermsCheckbox>
    </TermsContainer>
  )
}

export default Terms
