import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => (props.dark ? props.theme.colors.color3 : props.theme.colors.color4)};
  display: flex;
  flex-direction: column;

  min-height: 100vh;
`;

export default Container;
