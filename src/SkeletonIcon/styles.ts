import styled, { css, keyframes } from "styled-components";
import { inube } from "@inubekit/foundations";

import { ISkeletonIconProps } from "./index";

type AddDolarSign<T> = {
  [K in keyof T as `$${string & K}`]: T[K];
};

type IStyledSkeletonIconProps = AddDolarSign<ISkeletonIconProps>;

const shimmer = keyframes`
0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;
const StyledSkeletonIcon = styled.div<IStyledSkeletonIconProps>`
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  background: ${({ theme }) =>
    theme?.color?.surface?.dark?.clear || inube.color.surface.dark.clear};

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
        animation: ${shimmer} 2s linear infinite;
      }
    `}
`;

export { StyledSkeletonIcon };
