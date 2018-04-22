import styled from 'styled-components';

const Btn = styled.button`
  display: flex;
  flex-direction: column;
  margin-top: ${props => (props.t ? props.t : '0')};
  margin-bottom: ${props => (props.b ? props.b : '0')};
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.color2};
  color: ${props => props.theme.colors.color3};
  border: none;
  cursor: pointer;
  white-space: nowrap;
  line-height: 1;
  font-family: 'Quicksand';
  user-select: none;
  &:focus {
    border: none;
    outline: none;
  }
  @media (max-width: 599px) {
    width: 310px;
    height: 50px;
    font-size: 1.05rem;
    border-radius: 30px;
    &:hover {
      background: ${props => props.theme.colors.color2};
      color: ${props => props.theme.colors.color3};
    }
    &:active {
      background: ${props => props.theme.colors.color1};
      color: white;
    }
  }
  @media (min-width: 600px) {
    width: 400px;
    height: 60px;
    font-size: 1.1rem;
    border-radius: 35px;
    &:hover {
      background: ${props => props.theme.colors.color2};
      color: ${props => props.theme.colors.color3};
    }
    &:active {
      background: ${props => props.theme.colors.color1};
      color: white;
    }
  }
  @media (min-width: 900px) {
    width: 450px;
    height: 60px;
    font-size: 1.2rem;
    border-radius: 40px;
    &:hover {
      background: ${props => props.theme.colors.color1};
      color: white;
    }
  }
  @media (min-width: 1200px) {
    width: 450px;
    height: 65px;
    font-size: 1.2rem;
    border-radius: 50px;
    &:hover {
      background: ${props => props.theme.colors.color1};
      color: white;
    }
  }
  @media (min-width: 1800px) {
    width: 700px;
    height: 80px;
    font-size: 1.7rem;
    border-radius: 50px;
    &:hover {
      background: ${props => props.theme.colors.color1};
      color: white;
    }
  }
`;

export default Btn;
