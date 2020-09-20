import React, { Component, Fragment } from 'react'
import { Segment,  Form } from 'semantic-ui-react'

 class AdministrativeComponent extends Component {
  constructor(props) {
    super(props);
    this.state ={
 
      broughtBy:'',
      broughtFrom:''
    };

    };

  
    render() {
        return (
            <Fragment>
                <h3>Administrative</h3>
          <Segment>
              <Form  name='brought'>
         <Form.Field name='broughtBy'  onChange={ this.props.handler} > 
          <Form.Select options={this.props.broughtByOptions} 
                placeholder="Brought by"
                label="Brought by"
                onChange={this.props.handler}
                name='broughtBy'  
                
              />
            </Form.Field>
            
            <Form.Field   
            name='broughtFrom'>
            <Form.Select options={this.props.broughtFromOptions} 
                placeholder="Brought from"
                label="Brought from"
                onChange={ this.props.handler}
                name='broughtFrom'
              />
              </Form.Field>
            </Form>
          </Segment>
                
            </Fragment>
        )
    }
}
export default AdministrativeComponent;