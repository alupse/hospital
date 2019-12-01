import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import AverageWaitingTimeComponent from "../../averageWaitingTimeComponent/AverageWaitingTimeComponent";
import RemainingPatientsComponent from "../../remainingPatientsComponent/RemainingPatientsComponent";
import ShiftPersonelComponent from "../../shiftPersonnelComponent/ShiftPersonnelComponent";
import NavBar from "../../../nav/NavBar/NavBar";

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
  render() {
    return (
      <Grid>
        <Grid.Column width={8}>
            <NavBar greeting={greeting} nurses={nurses}></NavBar>
          <AverageWaitingTimeComponent></AverageWaitingTimeComponent>
          <RemainingPatientsComponent></RemainingPatientsComponent>
        </Grid.Column>
        <Grid.Column width={8}>
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
