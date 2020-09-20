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

  onChange(e) {
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
                  onChange={this.onChange.bind(this)}
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
                onChange={this.onChange.bind(this)}
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
                onChange={this.onChange.bind(this)}
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
                onChange={this.onChange.bind(this)}
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
                onChange={this.onChange.bind(this)}
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
                onChange={this.onChange.bind(this)}
              />
              <span>
              <label>Gastric disease</label>
                  </span>
            </List.Item>
            <List.Item>
              <input type="checkbox" label="Diabetes" onChange={this.onChange.bind(this)}
               value={"Diabetes"} />
              <span>
              <label>Diabetes</label>
                  </span>
            </List.Item>
            <List.Item>
              {" "}
              <input type="checkbox"
                label="Infectious diseases"
                onChange={this.onChange.bind(this)}
                value={"Infectious diseases"}
              />
              <span>
              <label>Infectious diseases</label>
                  </span>
            </List.Item>
            <List.Item>
              {" "}
              <input type="checkbox" label="STD" onChange={this.onChange.bind(this)} />
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
