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

const StyledSkeletonLine = styled.div`
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  height: 16px;
  width: ${({ $width }) => $width};
  background: ${({ theme }) => {
    return theme?.color?.surface?.dark?.clear || inube.color.surface.dark.clear;
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
        theme?.color?.surface?.dark?.clear || inube.color.surface.dark.clear
      } 20%,
      ${
        theme?.color?.surface?.gray?.clear || inube.color.surface.gray.clear
      } 50%,
      ${
        theme?.color?.surface?.dark?.clear || inube.color.surface.dark.clear
      } 80%
    );`};
        animation: ${({ $animated }) => $animated && shimmer} 2s linear infinite;
      }
    `}
`;

export { StyledSkeletonLine };
