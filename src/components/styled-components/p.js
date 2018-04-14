import styled from 'styled-components';

const P = styled.p`
  color: ${props => (props.dark ? 'white' : props.theme.colors.color3)};
  line-height: 1;
  text-align: justify;
  margin-left: auto;
  margin-right: auto;

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
    width: 600px;
    font-size: 1.4rem;
  }
  @media (min-width: 1200px) {
    width: 700px;
    font-size: 1.6rem;
  }
  @media (min-width: 1800px) {
    width: 800px;
    font-size: 1.6rem;
  }
`;

export default P;
