import styled from 'styled-components';

const OrderedList = styled.ol`
  color: ${props => (props.dark ? 'white' : props.theme.colors.color3)};
  margin-left: auto;
  margin-right: auto;
  line-height: 1.3;
  box-sizing: border-box;
  @media (max-width: 599px) {
    width: 90%;
    font-size: 1rem;
  }
  @media (min-width: 600px) {
    width: 500px;
    font-size: 1rem;
  }
  @media (min-width: 900px) {
    width: 550px;
    font-size: 1.2rem;
  }
  @media (min-width: 1200px) {
    width: 600px;
    font-size: 1.3rem;
  }
  @media (min-width: 1800px) {
    width: 650px;
    font-size: 1.4rem;
  }
  @media print {
    color: black;
    background-color: white;
  }
`;

const UnorderedList = styled.ul`
  color: ${props => (props.dark ? 'white' : props.theme.colors.color3)};
  margin-left: auto;
  margin-right: auto;
  line-height: 1.3;
  box-sizing: border-box;
  @media (max-width: 599px) {
    width: 90%;
    font-size: 1rem;
  }
  @media (min-width: 600px) {
    width: 500px;
    font-size: 1rem;
  }
  @media (min-width: 900px) {
    width: 550px;
    font-size: 1.2rem;
  }
  @media (min-width: 1200px) {
    width: 600px;
    font-size: 1.3rem;
  }
  @media (min-width: 1800px) {
    width: 650px;
    font-size: 1.4rem;
  }
  @media print {
    color: black;
    background-color: white;
  }
`;

const Item = styled.li`
  ${props => props.hide && 'display: none'};
  color: inherit;
  margin-bottom: 10px;
`;

export default { OrderedList, UnorderedList, Item };
