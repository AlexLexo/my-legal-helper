import styled from 'styled-components';

const Header = styled.h3`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  text-align: ${props => (props.center ? 'center' : props.justify ? 'justify' : 'left')};
  padding-top: ${props => (props.t ? props.t : '0')};
  padding-bottom: ${props => (props.b ? props.b : '0')};
  padding-left: ${props => (props.l ? props.l : '0')};
  padding-right: ${props => (props.r ? props.r : '0')};
  line-height: 1;
  font-weight: 400;
  font-family: 'Quicksand';
  color: ${props => (props.dark ? 'white' : props.theme.colors.color3)};
  @media (max-width: 599px) {
    font-size: 1.4rem;
    max-width: 95%;
  }
  @media (min-width: 600px) {
    font-size: 1.9rem;
    max-width: 500px;
  }
  @media (min-width: 900px) {
    font-size: 2rem;
    max-width: 700px;
  }
  @media (min-width: 1200px) {
    font-size: 2.2rem;
    max-width: 700px;
  }
  @media (min-width: 1800px) {
    font-size: 2.5rem;
    max-width: 700px;
  }
`;

export default Header;
