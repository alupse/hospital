import React, { Component, Fragment } from "react";
import { Segment, List, Checkbox } from "semantic-ui-react";
class AntecedentsComponent extends Component {
  state = {
    // isCardioPressed: false,
    // isNeutoPressed:false,
    // isKidneyPressed:false,
    // isTuberculosisPressed:false,
    // isLiverPressed:false,
    // isGastricPressed:false,
    // isDiabetesPressed:false,
    // isInfectiousPressed:false,
    // isSTDPressed:false
    checkedAntecedents: []
  };

  onPressEvt(e) {
    debugger;
    // current array of options
    const checkedAntecedents = this.state.checkedAntecedents;
    let index;

    // check if the check box is checked or unchecked
    if (e.target.checked) {
      // add the numerical value of the checkbox to options array
      let whatToPush = e.target.value;
      checkedAntecedents.push(whatToPush);
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = checkedAntecedents.indexOf(e.target.value);
      checkedAntecedents.splice(index, 1);
    }

    // update the state with the new array of options
    this.setState({ checkedAntecedents: checkedAntecedents }, function() {
      console.log(this.state.checkedAntecedents);
    });
  }
  render() {
    return (
      <Fragment>
        <h3>Antecedents</h3>

        <Segment>
          <List.Item>
            <List.Item>
            {" "}
                <input
                  type="checkbox"
                  value={"Cardiovascular disease"}
                  onClick={this.onPressEvt.bind(this)}
                  onChange={this.props.handler}
                  name="cardiovascularDisease"
                />
             
              <span>
              <label>Cardiovascular disease</label>
                  </span>
              </List.Item>
          

            <List.Item>
              {" "}
              <input
                type="checkbox"
                label="Neurological disease"
                value={"Neurological disease"}
                onClick={this.onPressEvt.bind(this)}
                onChange={this.props.handler}
                name="neurologicalDisease"
              />
              <span>
              <label>Neurological disease</label>
                  </span>
            </List.Item>
            <List.Item>
              {" "}
              <input type="checkbox"
                label="Kidney disease"
                value={"Kidney disease"}
                onClick={this.onPressEvt.bind(this)}
                onChange={this.props.handler}
                name="kidneyDisease"
              />
              <span>
              <label>Kidney disease</label>
                  </span>
            </List.Item>
            <List.Item>
              {" "}
              <input type="checkbox"
                label="Tuberculosis"
                value={"Tuberculosis"}
                onClick={this.onPressEvt.bind(this)}
                onChange={this.props.handler}
                name="tuberculosis"
              />
              <span>
              <label>Tuberculosis</label>
                  </span>
            </List.Item>
            <List.Item>
              {" "}
              <input type="checkbox"
                label="Liver disease"
                value={"Liver disease"}
                onClick={this.onPressEvt.bind(this)}
                onChange={this.props.handler}
                name="liverDisease"
              />
              <span>
              <label>Liver disease</label>
                  </span>
            </List.Item>
            <List.Item>
              {" "}
              <input type="checkbox"
                label="Gastric diseases"
                value={"Gastric disease"}
                onClick={this.onPressEvt.bind(this)}
                onChange={this.props.handler}
                name="gastricDiseases"
              />
              <span>
              <label>Gastric disease</label>
                  </span>
            </List.Item>
            <List.Item>
              <input type="checkbox"
               label="Diabetes" 
               onClick={this.onPressEvt.bind(this)}
               onChange={this.props.handler}
               value={"Diabetes"} 
               name="diabetes"/>
              
              <span>
              <label>Diabetes</label>
                  </span>
            </List.Item>
            <List.Item>
              {" "}
              <input type="checkbox"
                label="Infectious diseases"
                onClick={this.onPressEvt.bind(this)}
                onChange={this.props.handler}
                value={"Infectious diseases"}
                name="infectiousDiseases"
              />
              <span>
              <label>Infectious diseases</label>
                  </span>
            </List.Item>
            <List.Item>
              {" "}
              <input type="checkbox"
               label="STD" 
               onClick={this.onPressEvt.bind(this)} 
               onChange={this.props.handler}
               name="STD"/>
              <span>
              <label>STD</label>
                  </span>
            </List.Item>
          </List.Item>
        </Segment>
      </Fragment>
    );
  }
}

export default AntecedentsComponent;
