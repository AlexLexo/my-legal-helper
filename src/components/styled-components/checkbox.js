import styled from 'styled-components';

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  color: white;
  margin-left: 10px;
  @media (max-width: 599px) {
  }
  @media (min-width: 600px) {
    transform: scale(1.5);
  }
  @media (min-width: 900px) {
    transform: scale(1.5);
  }
  @media (min-width: 1200px) {
    transform: scale(1.5);
  }
  @media (min-width: 1800px) {
    transform: scale(1.5);
  }
`;

export default Checkbox;
