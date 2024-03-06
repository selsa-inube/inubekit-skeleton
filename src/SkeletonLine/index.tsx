import { StyledSkeletonLine } from "./styles";

interface ISkeletonLine {
  width?: string;
  animated?: boolean;
}

const SkeletonLine = (props: ISkeletonLine) => {
  const { width = "100%", animated = false } = props;

  return <StyledSkeletonLine $width={width} $animated={animated} />;
};

export { SkeletonLine };
export type { ISkeletonLine };
