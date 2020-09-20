import React ,{Component, Fragment} from 'react';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';
import DefaultPageDashboard from '../../features/mainPage/pageComponent/DefaultPageDashboard/DefaultPageDashboard';
import { Route } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import SettingDashboard from '../../features/user/Settings/SettingDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import AddNewPatientPage from '../../features/addNewPatientPage/AddNewPatientPage';



class App extends Component {
 
 render(){
    return (
      <Fragment>
        <Route exact path='/' component={HomePage}></Route>
        <Route  path='/(.+)' render={() =>(
     
      <Fragment>
      <NavBar></NavBar>
      <Container className="main" >
        
        <Route path='/mainPage' component={DefaultPageDashboard}></Route>
        <Route path='/people' component={PeopleDashboard}></Route>
        <Route path='/profile/:id' component={UserDetailedPage}></Route>
        <Route path='/settings' component={SettingDashboard}></Route>
        <Route path='/newPatient' component={AddNewPatientPage}></Route>
       

      </Container>
      </Fragment>
       )}>
       </Route>
      </Fragment>
     
     
    );
 } 
}

export default App;
