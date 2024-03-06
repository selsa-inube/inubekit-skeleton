import { SkeletonLine, ISkeletonLine } from ".";
import { props, parameters } from "./props";

const story = {
  title: "feedback/SkeletonLine",
  components: [SkeletonLine],
  parameters,
  argTypes: props,
};
const Default = (args: ISkeletonLine) => <SkeletonLine {...args} />;
Default.args = {
  width: "100%",
  animated: false,
};

export default story;
export { Default };
