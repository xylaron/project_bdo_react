import React from "react";
import { sycraia } from "../../database";

export default class Table extends React.Component {
  render() {
    let item_icons = [];
    for (let i = 0; i < sycraia.length; i++) {
      item_icons.push(<img src={sycraia[i].icon} alt="icon" />);
    }
    return <div>{item_icons}</div>;
  }
}
