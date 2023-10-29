import styled from 'styled-components'
import Label from './components/InputLabel'
import LottieContainer from './components/LottieAnimation'

const App = () => {
  const Container = styled.div`
    max-width: 100vw;
    display: flex;
  `
  const LeftImg = styled.div`
  display:flex;
  justify-content:center;
  align-items:center
    width: 40%;
    height:400px;
  `
  const RightSideLoginSection = styled.div`
  width:60%
  // border:1px, solid, black;
  text-align:center;
 margin:0 auto;
  height:90%,
  
  `
  const Heading = styled.h2`
    text-align: center;
    color: black;
    font-weight: bold;
  `
  return (
    <Container>
      <LeftImg>
        <LottieContainer />
      </LeftImg>
      <RightSideLoginSection>
        <Heading>Login</Heading>
        <Label htmlFor='email'>Login ID</Label>
      </RightSideLoginSection>
    </Container>
  )
}

export default App
