import React, { Component, Fragment } from "react";
import { Segment, Form } from "semantic-ui-react";

class MainProblemComponent extends Component {
  render() {
    return (
      <Fragment>
        <h3>Main Problem</h3>
        <Segment>
          <Form>
            <Form.Field>
              <Form.Input
                label="Reasons of showing"
                type="text"
                placeholder=" Describe in a sentance what is the main problem of the patient"
              />
            </Form.Field>
          </Form>
        </Segment>
      </Fragment>
    );
  }
}
export default MainProblemComponent;
