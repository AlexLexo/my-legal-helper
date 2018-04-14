import styled from 'styled-components';

const Title = styled.h1`
  color: ${props => (props.dark ? props.theme.colors.color2 : props.theme.colors.color3)};
  line-height: 1;
  text-align: center;
  font-weight: 600;
  padding-top: 30px;
  padding-bottom: 10px;
  @media (max-width: 599px) {
    font-size: 2rem;
  }
  @media (min-width: 600px) {
    font-size: 2.2rem;
  }
  @media (min-width: 900px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1200px) {
    font-size: 2.7rem;
  }
  @media (min-width: 1800px) {
    font-size: 3rem;
  }
`;

export default Title;
