import React ,{Component, Fragment} from 'react';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';
import DefaultPageDashboard from '../../features/mainPage/pageComponent/DefaultPageDashboard/DefaultPageDashboard';


class App extends Component {
 
 render(){
    return (
      <Fragment>
       
      <NavBar></NavBar>
      <Container className="main" >
        
      <DefaultPageDashboard></DefaultPageDashboard>
      </Container>
      </Fragment>
    );
 } 
}

export default App;
