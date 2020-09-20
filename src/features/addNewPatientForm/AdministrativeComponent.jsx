import React, { Component, Fragment } from 'react'
import { Segment,  Form } from 'semantic-ui-react'

 class AdministrativeComponent extends Component {
 state ={
 
    broughtBy:'',
    broughtFrom:''
  };
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value });
    this.props.handler();
  };
  
    render() {
      //const{broughtBy}=this.props.AdministrativeComponent.broughtBy;
        return (
            <Fragment>
                <h3>Administrative</h3>
          <Segment>
              <Form>
         <Form.Field>
          <Form.Select options={this.props.broughtByOptions} 
                placeholder="Brought by"
                label="Brought by"
                onChange={ this.props.handler}
            //value={broughtBy}
                
              />
            </Form.Field>
            
            <Form.Field>
            <Form.Select options={this.props.broughtFromOptions} 
                placeholder="Brought from"
                label="Brought from"
                onChange={ this.props.handler}
                
                
                
              
              />
              </Form.Field>
            </Form>
          </Segment>
                
            </Fragment>
        )
    }
}
export default AdministrativeComponent;