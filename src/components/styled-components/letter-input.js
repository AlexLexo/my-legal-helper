import styled from 'styled-components';

const LetterInput = styled.input`
  border: 1px solid ${props => props.theme.colors.color4};
  margin-bottom: 5px;
  @media (max-width: 599px) {
    width: 250px;
    height: 40px;
    font-size: 1.1rem;
  }
  @media (min-width: 600px) {
    width: 250px;
    height: 40px;
    font-size: 1.1rem;
  }
  @media (min-width: 900px) {
    width: 30px;
    height: 50px;
    font-size: 1.1rem;
  }
  @media (min-width: 1200px) {
    width: 30px;
    height: 50px;
    font-size: 1.1rem;
  }
  @media (min-width: 1800px) {
    width: 30px;
    height: 50px;
    font-size: 1.1rem;
  }
`;

export default LetterInput;
