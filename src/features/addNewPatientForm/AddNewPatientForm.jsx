import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

import AntecedentsComponent from "./AntecedentsComponent";
import AdministrativeComponent from "./AdministrativeComponent";
import MainProblemComponent from "./MainProblemComponent";
import PatientPersonalInformationComponent from "./PatientPersonalInformationComponent";
import VitalSignsComponent from "./VitalSignsComponent";
import TimeAndNursesComponent from "./TimeAndNursesComponent";


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
class AddNewPatientForm extends Component {
  render() {
    return (
      <Segment>
        <Form>
          <AdministrativeComponent
            broughtBy={broughtBy}
            broughtFrom={broughtFrom}
          ></AdministrativeComponent>
          <TimeAndNursesComponent nurses={this.props.nurses}></TimeAndNursesComponent>
          <MainProblemComponent></MainProblemComponent>
          <PatientPersonalInformationComponent></PatientPersonalInformationComponent>
          <AntecedentsComponent></AntecedentsComponent>
          <VitalSignsComponent></VitalSignsComponent>
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
