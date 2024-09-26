import styled, { keyframes, css } from "styled-components";
import { tokens } from "../Tokens/tokens";

const shimmer = keyframes`
0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const StyledSkeletonLine = styled.div`
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  height: 16px;
  width: ${({ $width }) => $width};
  background: ${({ theme }) => {
    return theme?.skeleton?.background?.color || tokens.background.color;
  }};

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

export { StyledSkeletonLine };
