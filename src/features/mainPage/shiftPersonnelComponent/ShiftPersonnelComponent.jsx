import React, { Component } from 'react'
import { Segment, Item, Icon } from 'semantic-ui-react'

 class ShiftPersonnelComponent extends Component {
    render() {
        return (
           <Segment>
              <Item.Group>
                        <Item>
                         
                          <Item.Content>
                          <Icon size="large"  name="calendar alternate outline" />
                          <Item.Header>Shift Personel</Item.Header>
                          
                          </Item.Content>
                         

                        </Item>
                    </Item.Group>    

                    <Segment>
                    <div class="ui right aligned two column grid">
  <div class="row">
    <div class="column">
    <table class="ui celled collapsing very basic table" >
  <thead class="">
    <tr class="">
      <th class=""><h2>Doctors</h2></th>
     
    </tr>
  </thead>
  <tbody class="">
    <tr class="">
      <td class="">
        <h4 class="ui image header">
        
          <div class="">
          <Icon size="small"  color="red" name="circle" />
           Alex Lupse
          </div>
        </h4>
      </td>
    </tr>
    <tr class="">
      <td class="">
        <h4 class="ui image header">
        
          <div class="content">
          <Icon size="small"  color="yellow" name="circle" />
           Elizabeth Grant
         
          </div>
        </h4>
      </td>
    </tr>
    <tr class="">
      <td class="">
        <h4 class="ui image header">
       
          <div class="content">
          <Icon size="small"  color="green" name="circle" />
            Alice Mitchel
           
          </div>
        </h4>
      </td>
    </tr>
    <tr class="">
      <td class="">
        <h4 class="ui image header">
        
          <div class="content">
          <Icon size="small"  color="blue" name="circle" />
           Dolores Ann
         
          </div>
        </h4>
      </td>
    </tr>
  </tbody>
</table>
    </div>
    <div class="column">
    <table class="ui celled collapsing very basic table">
  <thead class="">
    <tr class="">
      <th class=""><h2>Nurses</h2></th>
     
    </tr>
  </thead>
  <tbody class="">
    <tr class="">
      <td class="">
        <h4 class="ui image header">
        
          <div class="">
          <Icon size="small"  color="red" name="circle" />
           Annie Hase
          </div>
        </h4>
      </td>
    </tr>
    <tr class="">
      <td class="">
        <h4 class="ui image header">
        
          <div class="content">
          <Icon size="small"  color="yellow" name="circle" />
           Jamie Glose
         
          </div>
        </h4>
      </td>
    </tr>
    <tr class="">
      <td class="">
        <h4 class="ui image header">
       
          <div class="content">
          <Icon size="small"  color="green" name="circle" />
            Eveline Smith
           
          </div>
        </h4>
      </td>
    </tr>
    <tr class="">
      <td class="">
        <h4 class="ui image header">
       
          <div class="content">
          <Icon size="small"  color="blue" name="circle" />
           Angelina Jonson
         
          </div>
        </h4>
      </td>
    </tr>
  </tbody>
</table>


    </div>
    
  </div>
</div>
                
               </Segment>     
           </Segment>
         
        )
    }
}
export default ShiftPersonnelComponent;
