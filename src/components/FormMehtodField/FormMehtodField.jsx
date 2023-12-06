import { Formik, Form, Field, ErrorMessage } from 'formik';
import './FormMehtodField.css'

export const FormMehtodField = () => {

    const validate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = "Field can't be empty"
        } else if (/\d/.test(values.name)) {
            errors.name = "There can't be a number in the field"
        }

        if (!values.lastName) {
            errors.lastName = "Field can't be empty"
        } else if (/\d/.test(values.lastName)) {
            errors.lastName = "There can't be a number in the field"
        }

        if (!values.city) {
            errors.city = "Field can't be empty"
        } else if (/\d/.test(values.city)) {
            errors.city = "There can't be a number in the field"
        }

        return errors
    }
    return (
        <Formik
            initialValues={{ name: '', lastName: '', city: '' }}
            onSubmit={(values, formikBag) => {
                formikBag.resetForm()
                console.log(values)
            }}
            validate={validate}
        >
            {(props) => {
                console.log(props)
                console.log(Object.keys(props.errors).length === 0 && props.values.name)
                return (
                    <Form>
                        <h2>Form</h2>
                        <div className="name-input">
                            <label htmlFor='name'>Name:</label>
                            <Field type='text' name='name' id='name' className='input' />
                        </div>
                        <div className="errors-messange">
                            <ErrorMessage name='name' component='div' />
                        </div>
                        <div className="last-name-input">
                            <label htmlFor="last-name">Last Name:</label>
                            <Field type='text' name='lastName' id='last-name' className='input' />
                        </div>
                        <div className="errors-messange">
                            <ErrorMessage name='lastName' component='div' />
                        </div>
                        <div className="city-input">
                            <label htmlFor='city'>City:</label>
                            <Field type='text' name='city' id='city' className='input' />
                        </div>
                        <div className="errors-messange">
                            <ErrorMessage name='city' component='div' />
                        </div>
                        <div className="button-submit">
                            <button
                                type='submit'
                                className={
                                    Object.keys(props.errors).length === 0 && props.values.name
                                        ? 'button-active'
                                        : 'button-hiden'
                                }
                            >Submit</button>
                        </div>

                    </Form>
                )
            }}
        </Formik>
    )
}