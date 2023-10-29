import Lottie from 'lottie-react'
import login from '../assets/login.json'
import styled from 'styled-components'
const LottieContainer = () => {
  const LottieContainer = styled.div`
    max-width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* max-height: 100vh; */
    @media screen and (max-width: 768px) {
      display: none;
    }
  `
  return (
    <LottieContainer>
      <Lottie
        style={{ width: '100%', height: '100%' }}
        loop={true}
        animationData={login}
      ></Lottie>
    </LottieContainer>
  )
}

export default LottieContainer
