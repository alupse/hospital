import React, { Component, Fragment } from "react";
import { Segment, Item, Icon, List, Input } from "semantic-ui-react";

class ShiftPersonnelComponent extends Component {
  render() {
    return (
      <Fragment>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Content>
                <Icon size="large" name="calendar alternate outline" />
                <Item.Header>Shift Personel</Item.Header>
              </Item.Content>
            </Item>
          </Item.Group>

          <Segment>
            <div class="ui grid">
            
            <div class="seven wide column">
            <h3>Nurses</h3>
              <Fragment>
                <List>
                  {this.props.nurses.map(nurse => (
                    <List.Item > <Icon   color={nurse.code} name="circle"key={nurse.id} />{nurse.name} </List.Item> 
                  ))}
                </List>
              </Fragment>
              </div>
         
              <div class="seven wide column">
              <h3>Doctors</h3>
                <Fragment>
                  <List>
                    {this.props.doctors.map(doctor => (
                      <List.Item>  <Icon   color={doctor.code} name="circle" key={doctor.id}/>{doctor.name}  </List.Item>
                    ))}
                  </List>
                </Fragment>
              </div>
              </div>
       

          </Segment>
        </Segment>
      </Fragment>
    );
  }
}
export default ShiftPersonnelComponent;
