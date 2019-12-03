import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import AverageWaitingTimeComponent from "../../averageWaitingTimeComponent/AverageWaitingTimeComponent";
import RemainingPatientsComponent from "../../remainingPatientsComponent/RemainingPatientsComponent";
import ShiftPersonelComponent from "../../shiftPersonnelComponent/ShiftPersonnelComponent";
import NavBar from "../../../nav/NavBar/NavBar";
import ReactDOM from "react-dom";
import AddNewPatientPage from "../../../addNewPatientPage/AddNewPatientPage";

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
const doctors = [
  {
    id: "1",
    name: "Annie Smith",
    code: "red"
  },
  {
    id: "2",
    name: "Alex Lupse",
    code: "green"
  }
];
const greeting="miau";


class DefaultPageDashboard extends Component {
    state={
        nurses:nurses,
        doctors:doctors,
        
    }
    onPressNewPatient() {
        ReactDOM.render(
        <AddNewPatientPage nurses={nurses}  />, document.getElementById("root"));
      }
  render() {
    
    return (
      
      <Grid>
        <Grid.Column width={8}>
            <NavBar greeting={greeting} nurses={nurses}></NavBar>
          <AverageWaitingTimeComponent></AverageWaitingTimeComponent>
          <RemainingPatientsComponent></RemainingPatientsComponent>
        </Grid.Column>
        <Grid.Column width={8}>
        <Button
              
                basic
                inverted
                content="New Patient"
                onClick={this.onPressNewPatient}
              />
          <ShiftPersonelComponent
            nurses={nurses}
            doctors={doctors}
         
           
          ></ShiftPersonelComponent>
        </Grid.Column>
      </Grid>
    );
  }
}
export default DefaultPageDashboard;
