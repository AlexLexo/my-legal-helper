import styled from 'styled-components';

const P = styled.p`
  ${props => props.hide && 'display: none'};
  padding-top: ${props => (props.t ? props.t : '0')};
  padding-bottom: ${props => (props.b ? props.b : '0')};
  padding-left: ${props => (props.l ? props.l : '0')};
  padding-right: ${props => (props.r ? props.r : '0')};
  margin-left: auto;
  margin-right: auto;
  text-align: ${props => (props.center ? 'center' : props.justify ? 'justify' : 'left')};
  color: ${props => (props.dark ? 'white' : props.theme.colors.color3)};
  line-height: 1;
  @media (max-width: 599px) {
    width: 90%;
    font-size: 1.2rem;
    text-align: left;
  }
  @media (min-width: 600px) {
    width: 500px;
    font-size: 1.3rem;
  }
  @media (min-width: 900px) {
    width: 550px;
    font-size: 1.4rem;
  }
  @media (min-width: 1200px) {
    width: 550px;
    font-size: 1.6rem;
  }
  @media (min-width: 1800px) {
    width: 550px;
    font-size: 1.6rem;
  }
`;

export default P;
