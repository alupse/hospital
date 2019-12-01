import React, { Component } from "react";
import { List } from "semantic-ui-react";

class Shift extends Component {
  render() {
    return (
      <div>
        <List>
          <List.Item>
             
              {this.props.nurses.name}
              </List.Item>
        </List>
        <List>
          <List.Item>{this.props.doctors.name}</List.Item>
        </List>
      </div>
    );
  }
}
export default Shift;
