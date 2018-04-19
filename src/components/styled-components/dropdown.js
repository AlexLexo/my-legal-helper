import styled from 'styled-components';

export const DropdownGroup = styled.div`
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 599px) {
    width: 350px;
  }
  @media (min-width: 600px) {
    width: 450px;
  }
  @media (min-width: 900px) {
    width: 450px;
  }
  @media (min-width: 1200px) {
    width: 500px;
  }
  @media (min-width: 1800px) {
    width: 750px;
  }
`;

export const DropdownTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  background-color: ${props => props.theme.colors.color2};
  color: ${props => props.theme.colors.color3};
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.colors.color1};
    color: white;
  }
  &:focus {
    border: none;
    outline: none;
  }
  @media (max-width: 599px) {
    width: 330px;
    height: 50px;
    font-size: 1.05rem;
    border-radius: 30px;
  }
  @media (min-width: 600px) {
    width: 400px;
    height: 60px;
    font-size: 1.2rem;
    border-radius: 35px;
  }
  @media (min-width: 900px) {
    width: 450px;
    height: 60px;
    font-size: 1.3rem;
    border-radius: 40px;
  }
  @media (min-width: 1200px) {
    width: 450px;
    height: 65px;
    font-size: 1.2rem;
    border-radius: 50px;
  }
  @media (min-width: 1800px) {
    width: 700px;
    height: 80px;
    font-size: 1.7rem;
    border-radius: 50px;
  }
`;

export const DropdownMenu = styled.div`
  width: 100%;
  transition: height 0.3s;
  height: ${props => (props.dropdownOpen ? 'auto' : '0')};
  padding-bottom: ${props => (props.dropdownOpen ? '150px' : '0')};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  }
`;

export const DropdownItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 99%
  line-height: 1.1em;
  height: 2.2em;
  background-color: white;
  font-size: 1.1em;
  color: ${props => props.theme.colors.color3};
  &:hover {
    color: white;
    background-color: ${props => props.theme.colors.color1};
    cursor: pointer;
  }
`;

export default { DropdownGroup, DropdownTitle, DropdownMenu, DropdownItem };
