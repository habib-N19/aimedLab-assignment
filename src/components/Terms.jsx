import { useState } from 'react'
import styled from 'styled-components'

const Terms = () => {
  const [rememberMe, setRememberMe] = useState(false)
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const TermsContainer = styled.div`
    display: grid;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    margin-top: 15px;
    margin-bottom: 15px;
    width: 100%;
    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      width: 60%;
      margin: 0 auto;
      margin-top: 15px;
      margin-bottom: 15px;
    }
  `
  const RememberMeCheckbox = styled.label`
    display: flex;
    align-items: center;
    margin-right: 15px;
    cursor: pointer;
    width: 100%;
  `
  const ResetPassword = styled.a`
    text-decoration: none;
    color: #f78719; ;
  `
  const AgreeToTermsCheckbox = styled.label`
    display: flex;
    align-items: center;
    width: 100%;
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
        I agree to{'  '}
        <a href='/terms' style={{ marginLeft: '4px', color: '#F78719' }}>
          Terms and Conditions
        </a>
      </AgreeToTermsCheckbox>
    </TermsContainer>
  )
}

export default Terms
