import React, { Component, Fragment } from 'react'
import { Segment, Form } from 'semantic-ui-react'
import moment from "moment";

 class TimeAndNursesComponent extends Component {
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
            <Fragment>
            <h3>Timing</h3>
            <Segment>
                <Form>
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
              </Form>
            </Segment>
            
            </Fragment>
        )
    }
}
export default TimeAndNursesComponent;
