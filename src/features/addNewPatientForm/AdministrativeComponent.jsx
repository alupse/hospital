import React, { Component, Fragment } from 'react'
import { Segment,  Form } from 'semantic-ui-react'

 class AdministrativeComponent extends Component {
    render() {
        return (
            <Fragment>
                <h3>Administrative</h3>
          <Segment>
              <Form>
         <Form.Field>
          <Form.Select options={this.props.broughtBy} 
                placeholder="Brought by"
                label="Brought by"
              />
            </Form.Field>
            
            <Form.Field>
            <Form.Select options={this.props.broughtFrom} 
                placeholder="Brought from"
                label="Brought from"
              />
              </Form.Field>
            </Form>
          </Segment>
                
            </Fragment>
        )
    }
}
export default AdministrativeComponent;