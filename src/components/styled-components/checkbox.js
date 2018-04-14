import styled from 'styled-components';

export const Label = styled.label`
  background: red;
  display: block;
  padding: 1rem;
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

export const Box = styled.input.attrs({ type: 'checkbox' })`
&:checked + ${Label} {
  background: blue;
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
