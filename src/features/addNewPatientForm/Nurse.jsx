import React, { Component, Fragment } from 'react'
import { List } from 'semantic-ui-react'

 class Nurse extends Component {
    render() {
        return (
            <Fragment>
            <List>
          <List.Item>
             
              {this.props.nurses.name}
              </List.Item>
        </List>
        </Fragment>
        )
    }
}
export default Nurse;
