import React, { Component, Fragment } from 'react'
import { Segment, Form, Radio } from 'semantic-ui-react'

 class PatientPersonalInformationComponent extends Component {
    render() {
        return (
            <Fragment>
                 <h3>Personal Informations</h3>
          <Segment>
              <Form>
            <Form.Field>
              <Form.Input label="Name" type="text" placeholder=" Full name" />
            </Form.Field>
            <Form.Field>
              <Form.Input label="Age" type="text" placeholder=" Age" />
            </Form.Field>
            <Form.Field>
              <label>Gender</label>
              <Radio label="Female" name="radioGroup" />
            </Form.Field>
            <Form.Field>
              <Radio label="Male" name="radioGroup" />
            </Form.Field>
            <Form.Field>
              <Form.Input
                label="CNP"
                type="text"
                placeholder=" CNP"
              ></Form.Input>
            </Form.Field>
            <Form.Field>
              <Form.Input
                label="Adress"
                type="text"
                placeholder=" Enter the full adress"
              ></Form.Input>
            </Form.Field>
            <Form.Field>
              <Form.Input
                label="Phone Number"
                type="text"
                placeholder=" Enter the  phone number including the prefix"
              ></Form.Input>
            </Form.Field>
            </Form>
          </Segment>
          <Form.Field></Form.Field>
                
            </Fragment>
        )
    }
}
export default PatientPersonalInformationComponent;
