import styled from 'styled-components';

const BtnGroup = styled.div`
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

export default BtnGroup;
