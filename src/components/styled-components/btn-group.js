import styled from 'styled-components';

const BtnGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  padding-top: ${props => (props.t ? props.t : '0')};
  padding-bottom: ${props => (props.b ? props.b : '0')};
  padding-left: ${props => (props.l ? props.l : '0')};
  padding-right: ${props => (props.r ? props.r : '0')};
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

export default BtnGroup;
