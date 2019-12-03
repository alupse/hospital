import React, { Component, Fragment } from "react";
import { Segment, Radio, List, Checkbox } from "semantic-ui-react";
class AntecedentsComponent extends Component {
    state={
        isCardioPressed: false,
        radio:"cardioDisese"
    };
    
    
        
    
  render() {
    return (
      <Fragment>
        <h3>Antecedents</h3>

        <Segment>
          <List.Item>
            <List.Item>
              <Checkbox   label="Cardiovascular disease"  />
             
             
            </List.Item>
           
            <List.Item>
              {" "}
              <Checkbox label="Neurological disease" />
            </List.Item>
            <List.Item>
              {" "}
              <Checkbox  label="Kidney disease"  />
            </List.Item>
            <List.Item>
              {" "}
              <Checkbox label="Tuberculosis" />
            </List.Item>
            <List.Item>
              {" "}
              <Checkbox label="Liver disease" />
            </List.Item>
            <List.Item>
              {" "}
              <Checkbox label="Gastric diseases" />
            </List.Item>
            <List.Item>
              <Checkbox label="Diabetes" />
            </List.Item>
            <List.Item>
              {" "}
              <Checkbox label="Infectious diseases" />
            </List.Item>
            <List.Item>
              {" "}
              <Checkbox label="STD" />
            </List.Item>
          </List.Item>
        </Segment>
      </Fragment>
    );
  }
}

export default AntecedentsComponent;
