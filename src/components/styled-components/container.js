import styled from 'styled-components';

const Container = styled.div`
  padding-top: ${props => (props.t ? props.t : '0')};
  padding-bottom: ${props => (props.b ? props.b : '0')};
  padding-left: ${props => (props.l ? props.l : '0')};
  padding-right: ${props => (props.r ? props.r : '0')};
  display: flex;
  flex-direction: column;
  ${props => !props.notFull && 'min-height: 100vh'};
  background-color: ${props => (props.dark ? props.theme.colors.color3 : props.theme.colors.color4)};
`;

export default Container;
