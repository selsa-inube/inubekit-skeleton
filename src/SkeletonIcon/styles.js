import styled, { css, keyframes } from "styled-components";
import { tokens } from "../Tokens/tokens";

const shimmer = keyframes`
0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;
const StyledSkeletonIcon = styled.div`
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  background: ${({ theme }) =>
    theme?.skeleton?.background?.color || tokens.background.color};

  ${({ $animated }) =>
    $animated &&
    css`
      &::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        background: ${({ theme }) => `linear-gradient(
      100deg,
      ${theme?.skeleton?.background?.color || tokens.background.color} 0%,
      ${theme?.skeleton?.animation?.color || tokens.animation.color} 50%,
      ${theme?.skeleton?.background?.color || tokens.background.color} 100%
    );`};
        animation: ${shimmer} 2s linear infinite;
      }
    `}
`;

export { StyledSkeletonIcon };
