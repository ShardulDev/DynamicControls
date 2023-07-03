import React, { useState } from "react";
import PropTypes from "prop-types";

let nextId = 1;

function AddControls(props: any) {
  const [value, setValue] = useState("Textbox");
  const [controls, setControl] = useState([
    {
      id: nextId,
      controlname: "",
    },
  ]);

  const handleChange = (event: any) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  const handleAdd = (event: any) => {
    let _controls = [...controls];
    console.log(controls, "!");
    _controls.push({
      id: nextId++,
      controlname: value,
    });
    setControl(_controls);
  };

  const handleDelete = (id: number) => {
    let _controls = [...controls];
    _controls = _controls.filter((e) => e.id !== id);
    setControl(_controls);
  };

  return (
    <div>
      <h3>AddControls</h3>
      <div>
        <label>Select Control: </label>
        <select value={value} onChange={handleChange}>
          <option value={"Textbox"}>TextBox</option>
          <option value={"Radio"}>Radio</option>
          <option value={"Checkbox"}>Checkbox</option>
        </select>
        <br></br>
        <button onClick={handleAdd}>+</button>
      </div>
      <div>
        {controls.map((control) => {
          if (control.controlname == "Textbox") {
            return (
              <div>
                <label>Textbox + {control.id} </label>
                <input type="text"></input>
                <button onClick={() => handleDelete(control.id)}>Delete</button>
              </div>
            );
          }
          if (control.controlname == "Radio") {
            return (
              <div>
                <label>Radio + {control.id} </label>
                <input type="radio"></input>
                <button onClick={() => handleDelete(control.id)}>Delete</button>
              </div>
            );
          }
          if (control.controlname == "Checkbox") {
            return (
              <div>
                <label>CheckBox + {control.id} </label>
                <input type="checkbox"></input>
                <button onClick={() => handleDelete(control.id)}>Delete</button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

AddControls.propTypes = {};

export default AddControls;
