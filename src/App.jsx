import styled from 'styled-components'
import Label from './components/InputLabel'
import LottieContainer from './components/LottieAnimation'

import PasswordInput from './components/PasswordInput'
import Terms from './components/Terms'
import InputField from './components/InputField'

const App = () => {
  const Container = styled.div`
    @media screen and (min-width: 768px) {
      max-width: 70vw;
      height: 90vh;
      align-items: center;
      justify-content: space-between;
      display: flex;
    }
    width: 100%;
    max-width: 100vw;
    margin: 0 auto;
  `
  const LeftImg = styled.div`
    /* display: none; */
    /* width: 40%; */
    /* height: 400px; */
    padding: 20px;
    width: 40%;
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
    /* border: 1px solid black; */
    /* text-align: center; */
  `
  const Heading = styled.h2`
    text-align: center;
    color: black;
    font-weight: bold;
  `

  // const InputContainer = styled.div`
  //   position: relative;
  //   display: flex;
  //   align-items: center;
  //   border: 1px solid #04072f66;
  //   border-radius: 8px;
  //   padding: 10px;
  //   width: 60%;
  // `
  const Input = styled.input`
    /* flex: 1; */
    border: none;
    outline: none;
  `
  const SubmitButton = styled.button`
    background-color: #1575a7;
    color: white;
    border-radius: 8px;
    font-weight: 500;
    width: 45%;
    padding: 10px;
  `
  const CreateAccountLink = styled.div`
    text-align: center;

    margin-top: 20px;
  `
  return (
    <Container>
      <LeftImg>
        <LottieContainer />
      </LeftImg>
      <RightSideLoginSection>
        <Heading>Login</Heading>
        <Label htmlFor='email'>Login ID</Label>
        <InputField>
          <Input type='email' placeholder='Enter Login ID'></Input>
        </InputField>
        <Label htmlFor='password'>Password</Label>
        <PasswordInput></PasswordInput>
        <Terms />
        <SubmitButton>Login</SubmitButton>
        <CreateAccountLink>
          <p>
            Don&apos;t Have and account ?{' '}
            <a style={{ color: '#F78719' }} href='/create-account'>
              Register Here
            </a>
          </p>
        </CreateAccountLink>
      </RightSideLoginSection>
    </Container>
  )
}

export default App
