import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const FormFormikValitateYup = () => {
    const validateChema = Yup.object({
        name: Yup.string().required().matches(/^\D*$/, 'Field must not have number'),
        password: Yup.string().required().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\0-9]{8,}$/)
    })
    console.log(Yup)
    return (
        <Formik
          initialValues={{name: '', password: ''}}
          onSubmit={(values, formikBag) => {
            console.log(values)
            formikBag.resetForm()
          }}
          validationSchema={validateChema}
        >
            {(props) => {
                console.log(props)
                return (
                    <Form>
                        <h2>Formik Form Validate Yup</h2>
                        <label>Name:
                            <Field type="text" name='name' />
                        </label>
                        <ErrorMessage name='name' />
                        <br />
                        <label>Password:
                            <Field type='password' name="password" />
                        </label>
                        <ErrorMessage name='password' />
                        <br />
                        <button type="submit">Submit</button>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default FormFormikValitateYup;