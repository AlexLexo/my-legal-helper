import styled from 'styled-components';

const Wrapper = styled.default.div`
  width: 100%;
  height: 400px;
  background: white;
  padding: 10px 0 0 0;
   display: flex;
   align-items: center;
   justify-content: center;
`;

const rotator = styled.keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(270deg);
  }
`;

const dash = styled.keyframes`
  0% {
    stroke-dashoffset: 187;
  }
  50% {
    stroke-dashoffset: ${187 / 4};
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: 187;
    transform: rotate(450deg);
  }
`;

const colors = styled.keyframes`
  0% {
    stroke: #026337;
  }
  25% {
    stroke: #c5dbcf;
  }
  50% {
    stroke: #003a63;
  }
  75% {
    stroke: #c75c35;
  }
  100% {
    stroke: #c7985c;
  }
`;

const myCircle = ({ className }) => (
  <circle className={className} fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30" />
);

const StyledCircle = styled.default(myCircle)`
  stroke-dasharray: 187;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: ${dash} 1.4s ease-in-out infinite, ${colors} ${1.4 * 4}s ease-in-out infinite;
`;

const StyledSpinner = styled.default.svg`
animation: ${rotator} 1.4s linear infinite;
margin: -25px 0 0 -25px;
width: 50px;
height: 50px;
`;
/*<Wrapper>
        <StyledSpinner width="65px" height="65px" viewBox="0 0 66 66">
          <StyledCircle />
        </StyledSpinner>
      </Wrapper>*/
