import styled from 'styled-components';

const BtnGetStarted = styled.button`
  background-color: ${props => props.theme.colors.color2};
  color: ${props => props.theme.colors.color3};
  font: inherit;
  border: none;
  cursor: pointer;
  vertical-align: middle;
  white-space: nowrap;
  line-height: 1;
  margin: 0.25rem 0;
  &:hover {
    background: ${props => props.theme.colors.color1};
    color: white;
  }
  &:focus {
    background: ${props => props.theme.colors.color1};
    color: white;
    border: none;
    outline: none;
  }
  @media (max-width: 599px) {
    width: 250px;
    height: 60px;
    font-size: 2rem;
    border-radius: 30px;
  }
  @media (min-width: 600px) {
    width: 350px;
    height: 65px;
    font-size: 2.2rem;
    border-radius: 35px;
  }
  @media (min-width: 900px) {
    width: 400px;
    height: 70px;
    font-size: 2.5rem;
    border-radius: 40px;
  }
  @media (min-width: 1200px) {
    width: 500px;
    height: 80px;
    font-size: 3rem;
    border-radius: 50px;
  }
  @media (min-width: 1800px) {
    width: 800px;
    height: 100px;
    font-size: 4rem;
    border-radius: 50px;
  }
`;

export default BtnGetStarted;