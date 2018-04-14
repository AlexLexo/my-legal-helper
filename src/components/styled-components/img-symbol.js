import styled from 'styled-components';

const ImgSymbol = styled.img`
  padding-top: ${props => (props.t ? props.t : '0')};
  padding-bottom: ${props => (props.b ? props.b : '0')};
  padding-left: ${props => (props.l ? props.l : '0')};
  padding-right: ${props => (props.r ? props.r : '0')};
  width: 15%;
  max-width: 70px;
  min-width: 50px;
  margin-left: auto;
  margin-right: auto;
`;
export default ImgSymbol;
