import { props, parameters } from "./props";
import { SkeletonIcon, ISkeletonIcon } from ".";

const story = {
  title: "feedback/SkeletonIcon",
  components: SkeletonIcon,
  parameters,
  argTypes: props,
};

const Default = (args: ISkeletonIcon) => <SkeletonIcon {...args} />;
Default.args = {
  size: "24px",
  animated: false,
};

export { Default };
export default story;
