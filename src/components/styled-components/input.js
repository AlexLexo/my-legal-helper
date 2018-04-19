import styled from 'styled-components';

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid ${props => props.theme.colors.color4};
  @media (max-width: 599px) {
    width: 250px;
    height: 50px;
    font-size: 1.2rem;
  }
  @media (min-width: 600px) {
    width: 250px;
    height: 50px;
    font-size: 1.2rem;
  }
  @media (min-width: 900px) {
    width: 300px;
    height: 60px;
    font-size: 1.5rem;
  }
  @media (min-width: 1200px) {
    width: 300px;
    height: 60px;
    font-size: 1.5rem;
  }
  @media (min-width: 1800px) {
    width: 300px;
    height: 60px;
    font-size: 1.5rem;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
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
