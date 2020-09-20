import React, { Component, Fragment } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import moment from "moment";


class TimeAndNursesComponent extends Component {
  constructor(props) {
    super(props);
     this.state = {
      moment: moment()
    //   triajNurse: "m",
    //   registratorNurse:""
     };
    this.getSelectedTriajNurse = this.getSelectedTriajNurse.bind(this);
    this.getSelectedRegistratorNurse = this.getSelectedRegistratorNurse.bind(this);
    this.f = this.f.bind(this);
    this.g = this.g.bind(this);
  }

  handleChange = moment => {
    this.setState({
      moment
    });
  };
  onChangeName = event => {
    debugger;
    this.setState({
      triajNurse: event.target.value
    });
  };
  getSelectedTriajNurse(name) {
    this.setState({ triajNurse: name }, function() {
      console.log(this.state.triajNurse);
      this.f(this.state.triajNurse,"triajNurse");
    });
  }
  getSelectedRegistratorNurse(name) {
    this.setState({ registratorNurse: name }, function() {
      this.f(this.state.registratorNurse,"registratorNurse");
    });
  }


  f(name,id) {
    document.getElementById(id).setAttribute("value", name);
  }
  g(name) {
    debugger;
    this.setState(triajNurse => ({ triajNurse: name }));
  }
  handleChange1(event) {
    this.setState({ value: event.target.value });
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
              name="currentDateTime"
              onChange={ this.props.handler}
              readOnly
            />
            <Form.Field>
              <Form.Select
                fluid
                id="triajNurse"
                label="Triaj Nurse"
                class="child"
                placeholder={this.state.triajNurse}
                onChange={ this.props.handler}
                options={this.props.nurses.map(nurse => (
                  <Button
                    key={nurse.id}
                    id={nurse.id}
                    onClick={(event) => {this.getSelectedTriajNurse(nurse.name);}}
                   
                    name="triajNurse"
                    
                  >
                    {" "}
                    {nurse.name}
                  </Button>
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
                id="registratorNurse"
                label="Regitrator Nurse"
                class="child"
                placeholder={this.state.registratorNurse}
                onChange={ this.props.handler}
                options={this.props.nurses.map(nurse => (
                  <Button
                    key={nurse.id}
                    id={nurse.id}
                    onClick={() => this.getSelectedRegistratorNurse(nurse.name)}
                    name="registratorNurse"
                    onChange={ this.props.handler}
                  >
                    {" "}
                    {nurse.name}
                  </Button>
                ))}
              />
              
            </Form.Field>
          </Form>
        </Segment>
      </Fragment>
    );
  }
}
export default TimeAndNursesComponent;
