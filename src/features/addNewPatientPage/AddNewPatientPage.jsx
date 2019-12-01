import React, { Component, Fragment } from 'react'
import NavBar from '../nav/NavBar/NavBar'
import { Container } from 'semantic-ui-react'
import AddNewPatientForm from '../addNewPatientForm/AddNewPatientForm'

 class AddNewPatientPage extends Component {
    render() {
        return (
            <Fragment>
                <Container className="main">
                <NavBar></NavBar>
                <h1>Add new patient</h1>
                <AddNewPatientForm></AddNewPatientForm>
                </Container>
            </Fragment>
        )
    }
}
export default AddNewPatientPage;
