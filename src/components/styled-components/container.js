import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => (props.dark ? props.theme.colors.color3 : props.theme.colors.color4)};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding-bottom: 50px;
  @media (max-width: 599px) {
  }
  @media (min-width: 600px) {
  }
  @media (min-width: 900px) {
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1800px) {
  }
`;

export default Container;
