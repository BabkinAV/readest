import styled from "styled-components";
import { TransitionStatus } from "react-transition-group";


interface AnimatedUlProps {
  transitionState: TransitionStatus;
  UlHeight: number | null;
}

export const AnimatedUl = styled.ul<AnimatedUlProps>`
  transition: max-height 1000ms;
  overflow: hidden;
  max-height: ${({ transitionState, UlHeight }) =>
    transitionState === 'entering' || transitionState === 'exiting'
      ? '0'
      : `${UlHeight}px`};
`;