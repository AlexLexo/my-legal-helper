import styled from 'styled-components';

const Date = styled.input.attrs({ type: 'date' })`
  margin-left: auto;
  margin-right: auto;
  border: 1px solid ${props => props.theme.colors.color4};
  @media (max-width: 599px) {
    width: 200px;
    height: 50px;
    font-size: 1.2rem;
  }
  @media (min-width: 600px) {
    width: 200px;
    height: 50px;
    font-size: 1.2rem;
  }
  @media (min-width: 900px) {
    width: 250px;
    height: 60px;
    font-size: 1.5rem;
  }
  @media (min-width: 1200px) {
    width: 250px;
    height: 60px;
    font-size: 1.5rem;
  }
  @media (min-width: 1800px) {
    width: 250px;
    height: 60px;
    font-size: 1.5rem;
  }
`;

export default Date;
