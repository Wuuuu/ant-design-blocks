import React from "react";
import styles from "./index.less";
import { Menu, Dropdown } from "antd";

const menu = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

export default () => (
  <div className={styles.container}>
    <div id="components-dropdown-demo-context-menu">
      <Dropdown overlay={menu} trigger={["contextMenu"]}>
        <span style={{ userSelect: "none" }}>Right Click on Me</span>
      </Dropdown>
    </div>
  </div>
);
