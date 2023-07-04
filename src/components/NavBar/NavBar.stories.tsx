import { Meta, Story } from "@storybook/react";
import NavBar from "./NavBar";
import NavBarItem from "./NavBaritem";
import {
  ArrowRightOutlined,
  HomeFilled,
  RocketFilled,
  SaveFilled,
  SettingFilled,
} from "@ant-design/icons";
import styles from "../../styles/NavBar.module.css";

export default {
  title: "Components/NavBar",
  component: NavBar,
} as Meta;

const Template: Story = (args) => (
  <NavBar {...args}>
    <NavBarItem
      Icon={() => (
        <HomeFilled width={20} height={20} className={styles["navbar-icon"]} />
      )}
      text="Option1"
      active={true}
      onClick={() => console.log("Option1")}
    />
    <NavBarItem
      Icon={() => (
        <ArrowRightOutlined
          width={20}
          height={20}
          className={styles["navbar-icon"]}
        />
      )}
      text="Option2"
      onClick={() => console.log("Option2")}
    />
    <NavBarItem
      Icon={() => (
        <RocketFilled
          width={20}
          height={20}
          className={styles["navbar-icon"]}
        />
      )}
      text="Option3"
      onClick={() => console.log("Option3")}
    />
    <NavBarItem
      Icon={() => (
        <SaveFilled width={20} height={20} className={styles["navbar-icon"]} />
      )}
      text="Option4"
      onClick={() => console.log("Option4")}
    />
    <NavBarItem
      Icon={() => (
        <SettingFilled
          width={20}
          height={20}
          className={styles["navbar-icon"]}
        />
      )}
      text="Option5"
      onClick={() => console.log("Option5")}
    />
  </NavBar>
);

export const Default = Template.bind({});
Default.args = {};
