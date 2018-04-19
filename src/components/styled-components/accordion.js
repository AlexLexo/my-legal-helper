import styled from 'styled-components';

export const AccordionGroup = styled.div`
  padding-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 599px) {
    width: 90%;
  }
  @media (min-width: 600px) {
    width: 550px;
  }
  @media (min-width: 900px) {
    width: 600px;
  }
  @media (min-width: 1200px) {
    width: 600px;
  }
  @media (min-width: 1800px) {
    width: 600px;
  }
`;
export const Chevron = styled.img`
  height: ${props => props.h};
  width: ${props => props.w};
  padding-left: 3px;
  padding-top: 12px
  transition: 0.3s transform cubic-bezier(1, 0.25, 0.25, 0.8);
  transform: ${props => (props.accordionOpen ? 'rotate(90deg)' : 'rotate(0deg)')};
`;

export const AccordionTitle = styled.div`
  cursor: pointer;
  &:hover {
    background: inherit;
    color: ${props => (props.dark ? 'white' : props.theme.colors.color3)};
  }
  color: ${props => (props.dark ? 'white' : props.theme.colors.color3)};
  line-height: 1;
  padding-top: ${props => (props.t ? props.t : '0')};
  padding-bottom: ${props => (props.b ? props.b : '0')};
  padding-left: ${props => (props.l ? props.l : '0')};
  padding-right: ${props => (props.r ? props.r : '0')};
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 599px) {
    font-size: 1.3rem;
    max-width: 350px;
  }
  @media (min-width: 600px) {
    font-size: 1.8rem;
    max-width: 500px;
  }
  @media (min-width: 900px) {
    font-size: 2rem;
    max-width: 700px;
  }
  @media (min-width: 1200px) {
    font-size: 2.2rem;
    max-width: 700px;
  }
  @media (min-width: 1800px) {
    font-size: 2.5rem;
    max-width: 700px;
  }
`;

export const AccordionMenu = styled.div`
  color: ${props => (props.dark ? 'white' : props.theme.colors.color3)};
  cursor: default;
  width: 96%;
  padding-left: 2%
  padding-right: 2%
  transition: height 0.3s;
  height: ${props => (props.accordionOpen ? 'auto' : '0')};
  overflow: hidden;
  margin: auto;
  }
`;

export const AccordionItem = styled.div`
  font-size: 1.1em;
`;

export default {
  AccordionGroup,
  AccordionTitle,
  AccordionMenu,
  AccordionItem,
  Chevron
};
