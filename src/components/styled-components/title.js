import styled from 'styled-components';

const Title = styled.h1`
  padding-top: ${props => (props.t ? props.t : '0')};
  padding-bottom: ${props => (props.b ? props.b : '0')};
  padding-left: ${props => (props.l ? props.l : '0')};
  padding-right: ${props => (props.r ? props.r : '0')};
  margin-left: auto;
  margin-right: auto;
  color: ${props => (props.dark ? props.theme.colors.color2 : props.theme.colors.color3)};
  text-align: ${props => (props.center ? 'center' : 'inherit')};
  line-height: 1;
  font-weight: 600;
  @media (max-width: 599px) {
    max-width: 90%;
    font-size: 2.5rem;
  }
  @media (min-width: 600px) {
    max-width: 500px;
    font-size: 2.5rem;
  }
  @media (min-width: 900px) {
    max-width: 600px;
    font-size: 2.7rem;
  }
  @media (min-width: 1200px) {
    max-width: 800px;
    font-size: 3rem;
  }
  @media (min-width: 1800px) {
    max-width: 900px;
    font-size: 3.3rem;
  }
`;

export default Title;
