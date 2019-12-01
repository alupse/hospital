import React, { Component, Fragment } from "react";
import { Segment, Radio, List } from "semantic-ui-react";
class AntecedentsComponent extends Component {
  render() {
    return (
      <Fragment>
        <h3>Antecedents</h3>

        <Segment>
          <List.Item>
            <List.Item>
              <Radio label="Cardiovascular disease" />
            </List.Item>
            <List.Item>
              <Radio label="Cardiovascular disease" />
            </List.Item>
            <List.Item>
              {" "}
              <Radio label="Neurological disease" />
            </List.Item>
            <List.Item>
              {" "}
              <Radio label="Kidney disease" />
            </List.Item>
            <List.Item>
              {" "}
              <Radio label="Tuberculosis" />
            </List.Item>
            <List.Item>
              {" "}
              <Radio label="Liver disease" />
            </List.Item>
            <List.Item>
              {" "}
              <Radio label="Gastric diseases" />
            </List.Item>
            <List.Item>
              <Radio label="Diabetes" />
            </List.Item>
            <List.Item>
              {" "}
              <Radio label="Infectious diseases" />
            </List.Item>
            <List.Item>
              {" "}
              <Radio label="STD" />
            </List.Item>
          </List.Item>
        </Segment>
      </Fragment>
    );
  }
}

export default AntecedentsComponent;
