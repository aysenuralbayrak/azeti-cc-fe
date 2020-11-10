import * as React from "react";
import {Button, Grid} from "@material-ui/core";
import {Formik, Form, Field} from "formik";
import {AzetiTextField} from "../AzetiTextField";
import * as Yup from 'yup';
import {AzetiProfileAvatar} from "../AzetiProfileAvatar";
import "./ProfileForm.css"

interface Props {
}

const ProfileFormSchema = Yup.object().shape({
  username: Yup.string()
    .max(20)
    .required('Required')
    .matches(/^[a-z0-9]+$/i, 'Only alphanumeric characters are allowed'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

export const ProfileForm: React.FC<Props> = () => {
  return (
    <div className="form">
      <Formik
        initialValues={{username: '', email: ''}}
        validationSchema={ProfileFormSchema}
        onSubmit={(values) => {
          console.log(values);
        }}>
        {formik => (
          <Form>
            <Grid container direction="column" alignItems="center" justify="center" spacing={2}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <AzetiProfileAvatar setFieldValue={formik.setFieldValue}/>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Field name="username" label="Username" component={AzetiTextField}/>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Field name="email" label="Email" component={AzetiTextField}/>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Button id="save-button" style={{display: "block"}} type="submit" data-cy="save">Save</Button>
              </Grid>
            </Grid>
          </Form>
        )}</Formik>
    </div>
  )
}