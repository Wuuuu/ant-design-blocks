import React from "react";
import styles from "./index.less";
import { Input } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-input-demo-size">
      <div className="example-input">
        <Input size="large" placeholder="large size" />
        <Input placeholder="default size" />
        <Input size="small" placeholder="small size" />
      </div>
    </div>
  </div>
);
