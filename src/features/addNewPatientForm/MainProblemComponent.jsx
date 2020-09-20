import React, { Component, Fragment } from "react";
import { Segment, Form } from "semantic-ui-react";
import { isConstructorDeclaration } from "typescript";
//import AddNewPatientForm from './AddNewPatientForm';

class MainProblemComponent extends Component {
  

constructor(props)
{
  super(props);
  console.log("ura");

  
}
  render() {
    
    
    return (
      <Fragment>
        <h3>Main Problem</h3>
        <Segment>
          <Form >
            <Form.Field>
              <Form.Input
                label="Reasons of showing"
                type="text"
                name='mainProblem'
                placeholder=" Describe in a sentance what is the main problem of the patient"
                onChange={this.props.handler}
                
   
              />
            </Form.Field>
          </Form>
        </Segment>
      </Fragment>
    );
  }
}
export default MainProblemComponent;
