import { props, parameters } from "./props";
import { SkeletonIcon, ISkeletonIconProps } from ".";

const story = {
  title: "feedback/SkeletonIcon",
  components: SkeletonIcon,
  parameters,
  argTypes: props,
};

const Default = (args: ISkeletonIconProps) => <SkeletonIcon {...args} />;
Default.args = {
  size: "24px",
  animated: false,
};

export { Default };
export default story;
