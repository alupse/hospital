import React ,{Component, Fragment} from 'react';
import {Button, Dropdown, List} from 'semantic-ui-react';
import {Menu} from 'semantic-ui-react';
import {Container} from 'semantic-ui-react';
import AddNewPatientPage from '../../addNewPatientPage/AddNewPatientPage';
import ReactDOM from "react-dom";



class NavBar extends Component {
 
  onPressNewPatient() {
    
    ReactDOM.render(<AddNewPatientPage />, document.getElementById("root"));
}
 render(){

    return (

        <div>
            <Menu inverted fixed="top">
             
                
              <Container>
                <Menu.Item header>
                  <img src="assets/heart-icon.png" alt="logo" />
                 ER-helper
                </Menu.Item>
                
          <Dropdown item text='Triaj'>
            <Dropdown.Menu>
              <Dropdown.Item>Current patients list</Dropdown.Item>
              <Dropdown.Item>History</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        
         
          <Dropdown item text='ER'>
            <Dropdown.Menu>
              <Dropdown.Item>Consult Patient</Dropdown.Item>
              <Dropdown.Item>Hospitalization</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown item text='Schedule'>
            <Dropdown.Menu>
              <Dropdown.Item>Doctors Schedule</Dropdown.Item>
              <Dropdown.Item>Nurses Schedule</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          

              
                <Menu.Item>
                
               
                  
                  <Button floated="right" basic inverted content="New Patient" onClick={this.onPressNewPatient} 
                   
                  />
                </Menu.Item>
                
                
                <Menu.Item position="right">
               
                  
                  <Button basic inverted content="Sign Out" style={{marginLeft: '0.5em'}}  />
                </Menu.Item>
              </Container>
            </Menu>
            </div>
    );
 } 
}

export default NavBar;