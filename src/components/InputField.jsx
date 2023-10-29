import styled from 'styled-components'
// Container component for input fields, providing consistent spacing and alignment.

const InputField = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  width: 85%;
  /* margin: 0 auto; */
  @media screen and (min-width: 768px) {
    width: 60%;
    margin: 0 auto;
  }
`
export default InputField
