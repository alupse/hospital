import React, { Component } from "react";
import { Button, Dropdown, Form } from "semantic-ui-react";
import { Menu } from "semantic-ui-react";
import { Container } from "semantic-ui-react";
import AddNewPatientPage from "../../addNewPatientPage/AddNewPatientPage";
import { NavLink, Link, withRouter} from "react-router-dom";
import SettingDashboard from "../../user/Settings/SettingDashboard";
import SignedInMenu from "./Menus/SignedInMenu";
import SignedOutMenu from "./Menus/SignedOutMenu";

const a ="Mama are mere";
class NavBar extends Component {
  state={ authentificated:true,
    //nursesList:this.props.nursesList,
   
}
handleSignedIn= () =>{debugger; this.setState({authentificated:true});} 
handleSignedOut= () => {
  debugger;this.setState({authentificated:false});
this.props.history.push('/');}



  render() {
    const{authentificated}=this.state;
    return (
      <div>
        <Menu inverted fixed="top">
          <Container>
            <Menu.Item as={NavLink} exact to='/' header>
              <img src="assets/heart-icon.png" alt="logo" />
              ER-helper
            </Menu.Item>

            <Dropdown item text="Triaj">
              <Dropdown.Menu>
                <Dropdown.Item>Current patients list</Dropdown.Item>
                <Dropdown.Item>History</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text="ER">
              <Dropdown.Menu>
                <Dropdown.Item>Consult Patient</Dropdown.Item>
                <Dropdown.Item>Hospitalization</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="Schedule">
              <Dropdown.Menu>
                <Dropdown.Item>Doctors Schedule</Dropdown.Item>
                <Dropdown.Item>Nurses Schedule</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item>
              
            </Menu.Item>
          
         {authentificated ? ( 
           <SignedInMenu  signOut={this.handleSignedOut}/>
         ) : (
          <SignedOutMenu signIn={this.handleSignedIn}/>
         )}
         
            <Menu.Item  as={NavLink} to='/settings' >
          <label>Settings</label>
          </Menu.Item>
            
          </Container>
        </Menu>
      </div>
    );
  }
}

export default withRouter(NavBar) ;
