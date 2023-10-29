import styled from 'styled-components'
import LottieAnimation from './components/LottieAnimation'

const App = () => {
  const Container = styled.div`
    display: flex;
    justify-content: between;
    align-items: center;
  `
  const LeftImg = styled.div`
    width: 400px;
    height: 400px;
  `
  const RightSideLoginSection = styled.div`
  width:90%,
  height:90%,
  
  `
  return (
    <Container>
      <LeftImg>
        <LottieAnimation />
      </LeftImg>
    </Container>
  )
}

export default App
