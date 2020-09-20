import React, { Component, Fragment } from 'react'
import { Segment, Form, Radio } from 'semantic-ui-react'

 class PatientPersonalInformationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    gender: "",
    patientName:""
     
    };
    this.getSelectedGender= this.getSelectedGender.bind(this); 
  
  }
  getSelectedGender(chosenGender) {
    this.setState({gender: chosenGender }, function() {
      console.log(this.state.gender);
    
    });
  }
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value });
    this.props.handler();
  };
    render() {
        return (
            <Fragment>
                 <h3>Personal Informations</h3>
          <Segment>
              <Form>
            <Form.Field>
              <Form.Input label="Name" type="text" placeholder=" Full name"  onChange={ this.props.handler}  />
            </Form.Field>
            <Form.Field>
              <Form.Input label="Age" type="text" placeholder=" Age" />
            </Form.Field>
            <Form.Field>
              <label>Gender</label>
              <Radio  id="female" label="Female" name="radioGroup"   checked={this.state.gender === "female"}  onClick={ () => this.getSelectedGender("female")}/>
            </Form.Field>
            <Form.Field>
              <Radio id="male" label="Male" name="radioGroup"   checked={this.state.gender === "male"} onClick={ () => this.getSelectedGender("male")}
              /> 
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
            </Form>
          </Segment>
          <Form.Field></Form.Field>
                
            </Fragment>
        )
    }
}
export default PatientPersonalInformationComponent;
