import React from "react";
import styles from "./index.less";
import { Icon } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-icon-demo-two-tone">
      <div className="icons-list">
        <Icon type="smile" theme="twoTone" />
        <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
        <Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />
      </div>
    </div>
  </div>
);
