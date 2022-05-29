import styled from "styled-components";

interface AnimatedUlProps {
  transitionState: string;
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