import styled from 'styled-components'

const InputField = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #04072f66;
  border-radius: 8px;
  padding: 10px;
  width: 85%;
  /* margin: 0 auto; */
  @media screen and (min-width: 768px) {
    max-width: 60%;
  }
`
export default InputField
