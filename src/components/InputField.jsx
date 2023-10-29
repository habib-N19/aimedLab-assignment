import styled from 'styled-components'

const InputField = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  width: 85%;
  /* margin: 0 auto; */
  @media screen and (min-width: 768px) {
    max-width: 60%;
    margin: 0 auto;
  }
`
export default InputField
