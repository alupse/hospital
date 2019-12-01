import React, { Component, Fragment } from "react";
import { Segment, Form, Button, Radio, Input, Dropdown } from "semantic-ui-react";
import { DatetimePicker } from "rc-datetime-picker";
import moment from "moment";
import AntecedentsComponent from "./AntecedentsComponent";
import AdministrativeComponent from "./AdministrativeComponent";


const hospitals = [
  {
    key: "SPHospital",
    text: "Sacramento Public Hospital",
    value: "SPHospital"
  },
  { key: "UCHospital", text: "UChicago Hospital", value: "UCHospital" },
  {
    key: "KMCHospital",
    text: "Kansas Medical Center Hospital",
    value: "KMCHospital"
  }
];
const broughtBy = [
  { key: "ambulance", text: "Ambulance", value: "ambulance" },
  { key: "bythemselves", text: "By themselves", value: "bythemselves" }
];
const broughtFrom = [
  { key: "public", text: "public place", value: "public" },
  { key: "home", text: "home", value: "home" },
  { key: "hospital", text: "hospital", value: "hospital" },
  { key: "work", text: "work", value: "work" }
];
const Grandchild = (props) => <h4>Grandchild - {props.greeting}</h4>;
class AddNewPatientForm extends Component {
  constructor() {
    super();
    this.state = {
      moment: moment()
    };
  }

  handleChange = moment => {
    this.setState({
      moment
    });
  };

  render() {
    return (
      <Segment>
        <Form>
          <AdministrativeComponent broughtBy={broughtBy} broughtFrom={broughtFrom}></AdministrativeComponent>
          <h3>Timing</h3>
          <Segment>
            <Form.Input
              label="Get the current time"
              type="text"
              value={this.state.moment.format("YYYY-MM-DD HH:mm")}
              readOnly
            />
            <Form.Field>
              <Form.Select
                fluid
                label="Triaj Nurse"
                
                
              />
            </Form.Field>
            <Form.Field>
            <Fragment>
{/*               
                  {this.props.nurses.map(nurse => (
                     <Nurse key={nurse.id} id={nurse.id} > {nurse.name}></Nurse> 
                  ))}
                 */}
              </Fragment>
            </Form.Field>

            <Form.Field>
              <Form.Select
                fluid
                label="Registration Nurse"
                placeholder=" Registration Nurse"
              />
            </Form.Field>
          </Segment>
          <h3>Main Problem</h3>
          <Segment>
            <Form.Field>
              <Form.Input
                label="Reasons of showing"
                type="text"
                placeholder=" Describe in a sentance what is the main problem of the patient"
              />
            </Form.Field>
          </Segment>
          <h3>Personal Informations</h3>
          <Segment>
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
          </Segment>
          <Form.Field>
          <AntecedentsComponent></AntecedentsComponent> 
          </Form.Field>
           
          <h3>Vital Signs</h3>
          <Segment>
            <Form.Field>
              <label>Respiratory rate</label>
              <Input
                label={{ basic: true, content: "respiration/min" }}
                labelPosition="right"
                placeholder="Enter the measured respiratory rate (16-18 per min )"
              ></Input>
            </Form.Field>
            <Form.Field>
              <label>Ventricular allure</label>
              <Input
                label={{ basic: true, content: "heartbeats/min" }}
                labelPosition="right"
                placeholder="Enter the measured VA (60-80 per min)"
              ></Input>
            </Form.Field>
            <Form.Field>
              <label>Pulse</label>
              <Input
                label={{ basic: true, content: "heartbeats/min" }}
                labelPosition="right"
                placeholder="Enter the measured Pulse (60-80 per min)"
              ></Input>
            </Form.Field>
            <Form.Field>
              <label>Blood Presure</label>
              <Input
                label={{ basic: true, content: "mmHg" }}
                labelPosition="right"
                placeholder="Enter the measured BP (120-140 /60-80 mmHg)"
              ></Input>
            </Form.Field>
            <Form.Field>
              <label>Temperature</label>
              <Input
                label={{ basic: true, content: "°C" }}
                labelPosition="right"
                placeholder="Enter the measured Temperature (36-37 °C)"
              ></Input>
            </Form.Field>
            <Form.Field>
              <label>Blood Sugar</label>
              <Input
                label={{ basic: true, content: "mg/dl" }}
                labelPosition="right"
                placeholder="Enter the measured BS(80-110 mg/dl)"
              ></Input>
            </Form.Field>
          </Segment>
          <Button positive type="submit">
            Submit
          </Button>
          <Button type="button">Cancel</Button>
        </Form>
      </Segment>
    );
  }
}
export default AddNewPatientForm;
