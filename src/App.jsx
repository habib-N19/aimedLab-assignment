import styled from 'styled-components'
import Label from './components/InputLabel'
import LottieContainer from './components/LottieAnimation'

import PasswordInput from './components/PasswordInput'
import Terms from './components/Terms'

const App = () => {
  const Container = styled.div`
    max-width: 100vw;
    display: flex;
  `
  const LeftImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 400px;
  `
  const RightSideLoginSection = styled.div`
    width: 60%;
    /* text-align: center; */
    margin: 0 auto;
  `
  const Heading = styled.h2`
    text-align: center;
    color: black;
    font-weight: bold;
  `

  const InputContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    border: 1px solid #04072f66;
    border-radius: 8px;
    padding: 10px;
  `
  const Input = styled.input`
    /* flex: 1; */
    width: 70%;
    border: none;
    outline: none;
  `
  const SubmitButton = styled.button`
    background-color: #1575a7;
    color: white;
    border-radius: 8px;
    font-weight: 500;
    padding: 10px;
  `
  co
  return (
    <Container>
      <LeftImg>
        <LottieContainer />
      </LeftImg>
      <RightSideLoginSection>
        <Heading>Login</Heading>
        <Label htmlFor='email'>Login ID</Label>
        <InputContainer>
          <Input type='email' placeholder='Enter Login ID'></Input>
        </InputContainer>
        <Label htmlFor='email'>Login ID</Label>
        <PasswordInput></PasswordInput>
        <Terms />
        <SubmitButton>Login</SubmitButton>
      </RightSideLoginSection>
    </Container>
  )
}

export default App
