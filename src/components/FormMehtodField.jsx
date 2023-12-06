import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const FormMehtodField = () => {
    return (
        <Formik
            initialValues={{ name: '', lastName: '', city: '' }}
            validate={values => {
                const errors = {};
                if (!values.name) {
                    errors.name = 'Mandatory field';
                }
                if (!values.lastName) {
                    errors.lastName = 'Mandatory field';
                }
                if (!values.city) {
                    errors.city = 'Mandatory field';
                }
                return errors;
            }}

            onSubmit={(values, formikBag) => {
                formikBag.resetForm();
                console.log(values);
            }}
        >
            {(props) => {
                console.log('props', props)
                return (
                    <Form>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <br />
                            <Field type="text" name="name" id="name" />
                            <ErrorMessage name="name" component="div" />
                            <br />
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name:</label>
                            <br />
                            <Field type="text" name="lastName" id="lastName" />
                            <ErrorMessage name="lastName" component="div" />
                            <br />
                        </div>
                        <div>
                            <label htmlFor="city">City:</label>
                            <br />
                            <Field type="text" name="city" id="city" />
                            <ErrorMessage name="city" component="div" />
                            <br />
                        </div>
                        <div>
                            <br />
                            <button type='submit'>Submit</button>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    );
};