import React, { Component, Fragment } from 'react'
import { Segment, Form, Input } from 'semantic-ui-react'

class VitalSignsComponent extends Component {
 

    render() {
        return (
            <Fragment>
                <h3>Vital Signs</h3>
          <Segment>
              <Form>
            <Form.Field>
              <label>Respiratory rate</label>
              <Input
                label={{ basic: true, content: "respiration/min" }}
                labelPosition="right"
                placeholder="Enter the measured respiratory rate (16-18 per min )"
                name="respiratoryRate"
                onChange={this.props.handler}
              ></Input>
            </Form.Field>
            <Form.Field>
              <label>Ventricular allure</label>
              <Input
                label={{ basic: true, content: "heartbeats/min" }}
                labelPosition="right"
                placeholder="Enter the measured VA (60-80 per min)"
                name="ventricularAllure"
                onChange={this.props.handler}
              ></Input>
            </Form.Field>
            <Form.Field>
              <label>Pulse</label>
              <Input
                label={{ basic: true, content: "heartbeats/min" }}
                labelPosition="right"
                placeholder="Enter the measured Pulse (60-80 per min)"
                name="pulse"
                onChange={this.props.handler}
              ></Input>
            </Form.Field>
            <Form.Field>
              <label>Blood Presure</label>
              <Input
                label={{ basic: true, content: "mmHg" }}
                labelPosition="right"
                placeholder="Enter the measured BP (120-140 /60-80 mmHg)"
                name="bloodPresure"
                onChange={this.props.handler}
              ></Input>
            </Form.Field>
            <Form.Field>
              <label>Temperature</label>
              <Input
                label={{ basic: true, content: "°C" }}
                labelPosition="right"
                placeholder="Enter the measured Temperature (36-37 °C)"
                name="temperature"
                onChange={this.props.handler}
              ></Input>
            </Form.Field>
            <Form.Field>
              <label>Blood Sugar</label>
              <Input
                label={{ basic: true, content: "mg/dl" }}
                labelPosition="right"
                placeholder="Enter the measured BS(80-110 mg/dl)"
                name="bloodSugar"
                onChange={this.props.handler}
              ></Input>
            </Form.Field>
            </Form>
          </Segment>
                
            </Fragment>
        )
    }
}
export default VitalSignsComponent;