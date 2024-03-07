import styled, { keyframes, css } from "styled-components";
import { inube } from "@inubekit/foundations";

const shimmer = keyframes`
0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const StyledSkeletonLine = styled.div`
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  height: 16px;
  width: ${({ $width }) => $width};
  background: ${({ theme }) => {
    return (
      theme?.skeleton?.background?.color || inube.skeleton.background.color
    );
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
      ${
        theme?.skeleton?.background?.color || inube.skeleton.background.color
      } 0%,
      ${
        theme?.skeleton?.animation?.color || inube.skeleton.animation.color
      } 50%,
      ${
        theme?.skeleton?.background?.color || inube.skeleton.background.color
      } 100%
    );`};
        animation: ${shimmer} 2s linear infinite;
      }
    `}
`;
