import Lottie from 'lottie-react'
import login from '../assets/login.json'
import styled from 'styled-components'
const LottieContainer = () => {
  const LottieContainer = styled.div`
    max-width: 400px;
  `
  return (
    <LottieContainer>
      <Lottie loop={true} animationData={login}></Lottie>
    </LottieContainer>
  )
}

export default LottieContainer
