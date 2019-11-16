import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import AverageWaitingTimeComponent from '../../averageWaitingTimeComponent/AverageWaitingTimeComponent'
import RemainingPatientsComponent from '../../remainingPatientsComponent/RemainingPatientsComponent'
import ShiftPersonelComponent from '../../shiftPersonnelComponent/ShiftPersonnelComponent'

 class DefaultPageDashboard extends Component {
    render() {
        return (
           <Grid>
               <Grid.Column width={8}>
               <AverageWaitingTimeComponent></AverageWaitingTimeComponent>
               <RemainingPatientsComponent></RemainingPatientsComponent>
               </Grid.Column>
               <Grid.Column width={8}>
               <ShiftPersonelComponent></ShiftPersonelComponent>
               </Grid.Column>
              
           </Grid>
        )
    }
}
export default DefaultPageDashboard;
