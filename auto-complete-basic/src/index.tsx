import React from "react";
import styles from "./index.less";
import { AutoComplete } from "antd";

function onSelect(value) {
  console.log("onSelect", value);
}

class Complete extends React.Component {
  state = {
    value: "",
    dataSource: []
  };

  onSearch = searchText => {
    this.setState({
      dataSource: !searchText
        ? []
        : [searchText, searchText.repeat(2), searchText.repeat(3)]
    });
  };

  onChange = value => {
    this.setState({ value });
  };

  render() {
    const { dataSource, value } = this.state;
    return (
      <div>
        <AutoComplete
          dataSource={dataSource}
          style={{ width: 200 }}
          onSelect={onSelect}
          onSearch={this.onSearch}
          placeholder="input here"
        />
        <br />
        <br />
        <AutoComplete
          value={value}
          dataSource={dataSource}
          style={{ width: 200 }}
          onSelect={onSelect}
          onSearch={this.onSearch}
          onChange={this.onChange}
          placeholder="control mode"
        />
      </div>
    );
  }
}

export default () => (
  <div className={styles.container}>
    <div id="components-auto-complete-demo-basic">
      <Complete />
    </div>
  </div>
);
