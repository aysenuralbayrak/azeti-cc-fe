import * as React from "react";
import {TextField} from "@material-ui/core";
import {FieldProps} from 'formik';
import "./AzetiTextField.css";

interface Props extends FieldProps {
  label: string;
}

export const AzetiTextField: React.FC<Props> = (props) => {
  return (
    <div>
      <TextField
        className="text-field"
        helperText={props.form.errors[props.label.toLowerCase()] ? props.form.errors[props.label.toLowerCase()] : null}
        label={props.label}
        {...props.field}
      />
    </div>
  );
}