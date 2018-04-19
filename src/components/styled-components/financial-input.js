import styled from 'styled-components';

const Input = styled.input`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid ${props => props.theme.colors.color4};
  @media (max-width: 599px) {
    width: 250px;
    height: 2rem;
    font-size: 1.2rem;
  }
  @media (min-width: 600px) {
    width: 250px;
    height: 2rem;
    font-size: 1.2rem;
  }
  @media (min-width: 900px) {
    width: 300px;
    height: 2rem;
    font-size: 1.5rem;
  }
  @media (min-width: 1200px) {
    width: 300px;
    height: 2rem;
    font-size: 1.5rem;
  }
  @media (min-width: 1800px) {
    width: 300px;
    height: 2rem;
    font-size: 1.5rem;
  }
`;

const Label = styled.label`
  display: flex;
  padding-top: 10px;
  margin-left: auto;
  margin-right: auto;
  &:before {
    content: '£';
    transform: translate(-20px, 20px);
    font-size: 2rem;
  }
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
