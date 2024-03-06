import { StyledSkeletonIcon } from "./styles";

interface ISkeletonIcon {
  size?: string;
  animated?: boolean;
}

const SkeletonIcon = (props: ISkeletonIcon) => {
  const { size = "24px", animated = false } = props;

  return <StyledSkeletonIcon $size={size} $animated={animated} />;
};

export { SkeletonIcon };
export type { ISkeletonIcon };
