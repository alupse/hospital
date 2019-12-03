import React, { Component, Fragment } from 'react'
import { Segment, Form, List, Input, Button } from 'semantic-ui-react'
import moment from "moment";
import Nurse from './Nurse';

 class TimeAndNursesComponent extends Component {
    constructor() {
        super();
        this.state = {
          moment: moment(),
          triajNurse:"m"

        };
        this.getSelectedNurse=this.getSelectedNurse.bind(this);
        this.f=this.f.bind(this);
        this.g=this.g.bind(this);
      }
    
      handleChange = moment => {
        this.setState({
          moment
        });
      };
      onChangeName = (event) => {
          debugger;
        this.setState({
            triajNurse: event.target.value
        });
    }
 getSelectedNurse(name)
      {
        
       
         
       
          this.setState({ triajNurse: name }, function () {
            console.log(this.state.triajNurse);
            this.f(this.state.triajNurse);
       });
      
        
         
        
        
        

      }
    
      f(name)
      {
        
        document.getElementById("triajNurse").setAttribute('value',name);
      }
      g(name)
      {
          debugger;
          this.setState((triajNurse)=>({triajNurse:name}));}
          handleChange1(event) {
            this.setState({value: event.target.value});
          }
         
      
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
                  id="triajNurse"
                  label="Triaj Nurse"
                  class="child"
                  placeholder={this.state.triajNurse}
                  onChange={this.handleChange1}
                 
                  options={this.props.nurses.map(nurse => (
                    <Button key={nurse.id} id={nurse.id} onClick={()=>this.getSelectedNurse(nurse.name)} > {nurse.name}</Button> 
                 ))}
                  
                  
                />
              </Form.Field>
              
              <Form.Field>
              <Fragment>
                
                    {/* {this.props.nurses.map(nurse => (
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
                  options={this.props.nurses.map(nurse => (
                    <Button key={nurse.id} id={nurse.id} > {nurse.name}</Button> 
                 ))}
                  
                />
              </Form.Field>
              </Form>
            </Segment>
            
            </Fragment>
        )
    }
}
export default TimeAndNursesComponent;
