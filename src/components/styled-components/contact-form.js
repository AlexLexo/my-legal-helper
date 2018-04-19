import styled from 'styled-components';

const Input = styled.input`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${props => (props.t ? props.t : '0')};
  margin-bottom: ${props => (props.b ? props.b : '0')};
  padding-left: ${props => (props.l ? props.l : '5px')};
  padding-right: ${props => (props.r ? props.r : '0')};
  border: 1px solid ${props => props.theme.colors.color4};

  @media (max-width: 599px) {
    width: 90%;
    font-size: 1.7rem;
    line-height: 2.5rem;
  }
  @media (min-width: 600px) {
    width: 80%;
    font-size: 1.7rem;
    line-height: 2.5rem;
  }
  @media (min-width: 900px) {
    width: 50%;
    font-size: 1.7rem;
    line-height: 2.5rem;
  }
  @media (min-width: 1200px) {
    width: 50%;
    font-size: 1.7rem;
    line-height: 2.5rem;
  }
  @media (min-width: 1800px) {
    width: 50%;
    font-size: 1.7rem;
    line-height: 2rem;
  }
`;

const TextArea = styled.textarea`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${props => (props.t ? props.t : '0')};
  margin-bottom: ${props => (props.b ? props.b : '0')};
  padding-top: ${props => (props.l ? props.l : '5px')};
  padding-bottom: ${props => (props.l ? props.l : '5px')};
  padding-left: ${props => (props.l ? props.l : '5px')};
  padding-right: ${props => (props.r ? props.r : '5px')};
  border: 1px solid ${props => props.theme.colors.color4};

  @media (max-width: 599px) {
    width: 90%;
    height: 7%;
    font-size: 1.2rem;
  }
  @media (min-width: 600px) {
    width: 80%;
    height: 10%;
    font-size: 1.2rem;
  }
  @media (min-width: 900px) {
    width: 50%;
    height: 10%;
    font-size: 1.5rem;
  }
  @media (min-width: 1200px) {
    width: 50%;
    height: 10%;
    font-size: 1.5rem;
  }
  @media (min-width: 1800px) {
    width: 50%;
    height: 10%;
    font-size: 1.5rem;
  }
`;

export default { Input, TextArea };
