import styled from 'styled-components'
import Label from './components/InputLabel'
import LottieContainer from './components/LottieAnimation'

import PasswordInput from './components/PasswordInput'
import Terms from './components/Terms'
import InputField from './components/InputField'
import Input from './components/Input'

const App = () => {
  const Container = styled.div`
    max-width: 80vw;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
      max-width: 70vw;
      height: 90vh;
      align-items: center;
      justify-content: space-between;
      display: flex;
    }
  `
  const LeftImg = styled.div`
    padding: 20px;
    max-width: 40%;
    @media screen and (max-width: 768px) {
      display: none !important;
    }
  `
  const RightSideLoginSection = styled.div`
    @media screen and (min-width: 768px) {
      width: 60%;
      padding: 40px;
      margin: 0 auto;
    }
    max-width: 100vw;
  `
  const Heading = styled.h2`
    text-align: center;
    color: black;
    font-weight: 700;
    font-size: 48px;
  `

  const SubmissionContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    text-align: center;
  `
  const SubmitButton = styled.button`
    background-color: #1575a7;
    color: white;
    border-radius: 8px;
    font-weight: 500;
    width: 50%;
    margin-left: auto;
    margin: 0 auto;
    padding: 10px;
  `
  const CreateAccountLink = styled.div`
    text-align: center;

    margin-top: 20px;
  `
  return (
    <Container>
      {/*Left section containing an animated image, hidden on smaller screens.
       */}
      <LeftImg>
        <LottieContainer />
      </LeftImg>
      {/*Right section containing the login form and related components.
       */}
      <RightSideLoginSection>
        <Heading>Login</Heading>
        <Label htmlFor='email'>Login ID</Label>
        <InputField>
          <Input type='email' placeholder='Enter Login ID'></Input>
        </InputField>
        <Label htmlFor='password'>Password</Label>
        <PasswordInput></PasswordInput>
        <Terms />
        <SubmissionContainer>
          <SubmitButton>Login</SubmitButton>
          <CreateAccountLink>
            <p>
              Don&apos;t Have and account ?{' '}
              <a style={{ color: '#F78719' }} href='/create-account'>
                Register Here
              </a>
            </p>
          </CreateAccountLink>
        </SubmissionContainer>
      </RightSideLoginSection>
    </Container>
  )
}

export default App
