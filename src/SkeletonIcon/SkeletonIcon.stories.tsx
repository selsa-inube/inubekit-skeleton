import { ThemeProvider } from "styled-components";
import { presente } from "@inubekit/foundations";

import { props, parameters } from "./props";
import { SkeletonIcon, ISkeletonIconProps } from ".";

const story = {
  title: "feedback/SkeletonIcon",
  components: SkeletonIcon,
  parameters,
  argTypes: props,
};

export const Default = (args: ISkeletonIconProps) => <SkeletonIcon {...args} />;
Default.args = {
  size: "24px",
  animated: false,
};
const theme = {
  ...presente,
};

export const Themed = (args: ISkeletonIconProps) => (
  <ThemeProvider theme={theme}>
    <SkeletonIcon {...args} />
  </ThemeProvider>
);
Themed.args = {
  size: "24px",
  animated: false,
};

export default story;
