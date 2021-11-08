import React from "react";

export default function Alert(props) {
    const capitalize = (word) => {
        return (word[0].toUpperCase() + word.slice(1).toLowerCase());
    }
  return (
    <div style={{height: '50px'}}> 
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        {capitalize(props.alert.type)}: <strong>{props.alert.msg}</strong> 
      </div>}
    </div>
  );
}
