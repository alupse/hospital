import React, { Component } from 'react'
import { Segment, Item, Icon } from 'semantic-ui-react'

 class RemainingPatientsComponent extends Component {
    render() {
        return (
            <Segment.Group>
                    <Segment>
                      <Item.Group>
                        <Item>
                         
                          <Item.Content>
                          <Icon size="large"  name="group" />
                            <Item.Header >Number of waiting patients</Item.Header>
                            <Item.Description>
                              Updated at 10:15 
                            </Item.Description>
                            </Item.Content>
                          
                        </Item>
                      </Item.Group>
                    </Segment>
                    <Segment>
                      <span>
                      <table class="ui celled collapsing very basic table">
  <thead class="">
    <tr class="">
      <th class="">Code</th>
      <th class="">Patient waiting</th>
    </tr>
  </thead>
  <tbody class="">
    <tr class="">
      <td class="">
        <h4 class="ui image header">
        <Icon size="large"  color="red" name="circle" />
          <div class="content">
           Red Code
         
          </div>
        </h4>
      </td>
      <td class="">0</td>
    </tr>
    <tr class="">
      <td class="">
        <h4 class="ui image header">
        <Icon size="large"  color="yellow" name="circle" />
          <div class="content">
            Yellow Code
          
          </div>
        </h4>
      </td>
      <td class="">2</td>
    </tr>
    <tr class="">
      <td class="">
        <h4 class="ui image header">
        <Icon size="large"  color="green" name="circle" />
          <div class="content">
            Green Code
         
          </div>
        </h4>
      </td>
      <td class="">15</td>
    </tr>
    <tr class="">
      <td class="">
        <h4 class="ui image header">
        <Icon size="large"  color="blue" name="circle" />
          <div class="content">
            Blue Code
       
          </div>
        </h4>
      </td>
      <td class="">8</td>
    </tr>
  </tbody>
</table>
                      </span>
                    </Segment>
                    
                    
                  </Segment.Group>
        
           
        )
    }
}
export default  RemainingPatientsComponent;