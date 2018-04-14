import styled from 'styled-components';

const Link = styled.button`
  background: none !important;
  border: none;
  padding: 0 !important;
  font: inherit;
  color: ${props => (props.dark ? props.theme.colors.color1 : props.theme.colors.color3)};
  &:hover {
    color: ${props => (props.dark ? props.theme.colors.color2 : props.theme.colors.color4)};
    cursor: pointer;
  }
`;
export default Link;
