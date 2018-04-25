import styled from 'styled-components';

const BtnGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: auto;
  padding-top: ${props => (props.t ? props.t : '0')};
  padding-bottom: ${props => (props.b ? props.b : '0')};
  padding-left: ${props => (props.l ? props.l : '0')};
  padding-right: ${props => (props.r ? props.r : '0')};
`;

export default BtnGroup;
