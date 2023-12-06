import { useFormik } from "formik";

export const FormMethodHook = () => {
    const validate = (values) => {
        const errors = {};

        if (!values.email) {
            errors.email = 'This field is required';
        } else if ((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))) {
            errors.email = 'Invalid email address'
        }

        if (!values.password) {
            errors.password = 'This field is required'
        } else if (values.password.length < 8) {
            errors.password = 'Password must be at longer 8 characters'
        }

        return errors;
    }
    const formik = useFormik({
        initialValues: { email: '', password: '' },
        onSubmit: (values, formikBag) => {
            formikBag.resetForm()
            console.log(values)
        },
        validate
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email:</label>
            <br />
            <input
                type="email"
                name="email"
                id="email"
                value={formik.values.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
            />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            <br />
            <label htmlFor="password">Password:</label>
            <br />
            <input
                type="password"
                id="password"
                name="password"
                value={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
            />
            {formik.errors.password ? <div>{formik.errors.password}</div> : null}
            <br />
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}