import styled from 'styled-components';

const Btn = styled.button`
  position: fixed;
  bottom: 0;
  margin-top: ${props => (props.t ? props.t : '0')};
  margin-bottom: ${props => (props.b ? props.b : '10px')};
  margin-left: auto;
  margin-right: auto;
  vertical-align: middle;
  background-color: ${props => props.theme.colors.color2};
  color: ${props => props.theme.colors.color3};
  border: none;
  cursor: pointer;
  white-space: nowrap;
  line-height: 1;
  &:disabled {
    background-color: rgba(0, 0, 0, 0.2);
    cursor: default;
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
      color: ${props => props.theme.colors.color3};
    }
  }
  &:hover {
    background-color: ${props => props.theme.colors.color1};
    color: white;
  }
  &:focus {
    border: none;
    outline: none;
  }
  @media (max-width: 599px) {
    width: 45%;
    height: 50px;
    font-size: 1.05rem;
    border-radius: 30px;
    ${props => (props.right ? 'right: 2px' : 'left: 2px')};
    &:hover {
      background-color: ${props => props.theme.colors.color2};
      color: ${props => props.theme.colors.color3};
    }
    &:active {
      background-color: ${props => props.theme.colors.color1};
      color: white;
    }
  }
  @media (min-width: 600px) {
    width: 45%;
    height: 60px;
    font-size: 1.1rem;
    border-radius: 35px;
    ${props => (props.right ? 'right: 5px' : 'left: 5px')};
    &:hover {
      background-color: ${props => props.theme.colors.color2};
      color: ${props => props.theme.colors.color3};
    }
    &:active {
      background-color: ${props => props.theme.colors.color1};
      color: white;
    }
  }
  @media (min-width: 900px) {
    width: 400px;
    height: 60px;
    font-size: 1.2rem;
    border-radius: 40px;
    ${props => (props.right ? 'right: 50px' : 'left: 50px')};
    &:hover {
      background-color: ${props => props.theme.colors.color1};
      color: white;
    }
  }
  @media (min-width: 1200px) {
    width: 450px;
    height: 65px;
    font-size: 1.2rem;
    border-radius: 50px;
    ${props => (props.right ? 'right: 12%' : 'left: 12%')};
    &:hover {
      background-color: ${props => props.theme.colors.color1};
      color: white;
    }
  }
  @media (min-width: 1800px) {
    width: 700px;
    height: 80px;
    font-size: 1.7rem;
    border-radius: 50px;
    ${props => (props.right ? 'right: 15%' : 'left: 15%')};
    &:hover {
      background-color: ${props => props.theme.colors.color1};
      color: white;
    }
  }
`;

export default Btn;
