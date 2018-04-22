import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid ${props => props.theme.colors.color4};
  margin-bottom: 5px;
  @media (max-width: 599px) {
    width: 95%;
    height: 40px;
    font-size: 1.1rem;
  }
  @media (min-width: 600px) {
    width: 350px;
    height: 40px;
    font-size: 1.1rem;
  }
  @media (min-width: 900px) {
    width: 350px;
    height: 50px;
    font-size: 1.1rem;
  }
  @media (min-width: 1200px) {
    width: 350px;
    height: 50px;
    font-size: 1.1rem;
  }
  @media (min-width: 1800px) {
    width: 350px;
    height: 50px;
    font-size: 1.1rem;
  }
`;

const Label = styled.label`
  @media (max-width: 599px) {
    width: 250px;
    height: 1.2rem;
    font-size: 1.2rem;
  }
  @media (min-width: 600px) {
    width: 250px;
    height: 1.2rem;
    font-size: 1.2rem;
  }
  @media (min-width: 900px) {
    width: 300px;
    height: 1.5rem;
    font-size: 1.5rem;
  }
  @media (min-width: 1200px) {
    width: 300px;
    height: 1.5rem;
    font-size: 1.5rem;
  }
  @media (min-width: 1800px) {
    width: 300px;
    height: 1.5rem;
    font-size: 1.5rem;
  }
`;

export default { Input, Label };
