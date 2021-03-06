import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

import AntecedentsComponent from "./AntecedentsComponent";
import AdministrativeComponent from "./AdministrativeComponent";
import MainProblemComponent from "./MainProblemComponent";
import PatientPersonalInformationComponent from "./PatientPersonalInformationComponent";
import VitalSignsComponent from "./VitalSignsComponent";
import TimeAndNursesComponent from "./TimeAndNursesComponent";
import ReactDOM from "react-dom";
import DefaultPageDashboard from "../mainPage/pageComponent/DefaultPageDashboard/DefaultPageDashboard";


const broughtByOptions = [
  { key: "ambulance", text: "Ambulance", value: "ambulance" },
  { key: "bythemselves", text: "By themselves", value: "bythemselves" }
];
const broughtFromOptions = [
  { key: "public", text: "public place", value: "public" },
  { key: "home", text: "home", value: "home" },
  { key: "hospital", text: "hospital", value: "hospital" },
  { key: "work", text: "work", value: "work" }
];
const nurses = [
  {
    id: "1",
    name: "Elizabeth Grant",
    code: "red"
  },
  {
    id: "2",
    name: "Selena Martin",
    code: "green"
  },
  {
    id: "3",
    name: "Amelia Mark",
    code: "pink"
  },
  {
    id: "4",
    name: "Mike Slone",
    code: "pink"
  }
  
];

class AddNewPatientForm extends Component {
  state ={
    mainProblem:'',
   
  };
 
  constructor(props)
  {
    super(props);
    this.handleInputChange= this.handleInputChange.bind(this);
    this.handleDropDownChange= this.handleDropDownChange.bind(this);
  }
  handleInputChange(evt) {
    
     this.setState({
       [evt.target.name]:evt.target.value
     });
  };

  handleDropDownChange(evt,name) {
  
    console.log("vai");
     this.setState({
       [name.name]:evt.target.innerText
     });
  };
  handleCheckBox(evt){

    debugger;
    this.setState({
       [evt.target.name]:evt.target.checked
     });
  }
  onPressCancel() {

    
  }
 
  
  handleFormSubmit= evt => {
    evt.preventDefault();
    console.log(this.state);
    }
  render() {
    const{mainProblem}=this.state.mainProblem;
    //const{administrativeComponent}=this.state.administrativeComponent;
   // const{patientInformationComponent} = this.state.patientInformationComponent;
    return (
      <Segment>
        <div onSubmit={this.handleFormSubmit}>
          <input onChange={this.handleInputChange} value={mainProblem} name="mainProblem" ></input>
          <AdministrativeComponent
            broughtByOptions={broughtByOptions}
            broughtFromOptions={broughtFromOptions}
            handler={ this.handleDropDownChange}
          ></AdministrativeComponent>
          <TimeAndNursesComponent nurses={nurses} name='timingNurses'handler={ this.handleInputChange}></TimeAndNursesComponent>
          <MainProblemComponent  name='mainProblem'
                value={mainProblem}
                handler={ this.handleInputChange}
                ></MainProblemComponent>
          <PatientPersonalInformationComponent name='patientInformationComponent'  handler={ this.handleInputChange}></PatientPersonalInformationComponent>
          <AntecedentsComponent ></AntecedentsComponent>
          <VitalSignsComponent  handler={ this.handleInputChange}></VitalSignsComponent>
          <Button positive type="submit" onClick={this.handleFormSubmit}>
            Submit
          </Button>
          <Button type="button"onClick={this.onPressCancel}>Cancel</Button>
        </div>
      </Segment>
    );
  }
}
export default AddNewPatientForm;
