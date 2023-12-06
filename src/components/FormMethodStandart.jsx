import { Formik } from "formik";

export const StandartMethodForm = () => {
  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Mandatory field'
    } else if (/\d/.test(values.name)) {
      errors.name = 'Name should not contain numbers';
    }

    if (!values.lastName) {
      errors.lastName = 'Mandatory field'
    } else if (/\d/.test(values.lastName)) {
      errors.lastName = 'Name should not contain numbers';
    }

    if (!values.sity) {
      errors.sity = 'Mandatory field'
    } else if (/\d/.test(values.sity)) {
      errors.sity = 'Name should not contain numbers';
    }

    return errors
  }

  return (
    <Formik
      initialValues={{ name: '', lastName: '', sity: '' }}
      onSubmit={(values, formikBag) => {
        formikBag.resetForm()
      }}
      validate={validate}
    >
      {(props) => {

        console.log(props.values)
        return (
          <form onSubmit={props.handleSubmit}>
            <label htmlFor="name">Name:</label>
            <br />
            <input
              type="text"
              name="name"
              value={props.values.name}
              id="name"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
            {props.errors.name ? <div>{props.errors.name}</div> : null}
            <br />
            <label htmlFor="last-name">Last name: </label>
            <br />
            <input
              type="text"
              name="lastName"
              value={props.values.lastName}
              id="last-name"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
            {props.errors.lastName ? <div>{props.errors.lastName}</div> : null}
            <br />
            <label htmlFor="sity">Sity: </label>
            <br />
            <input
              type="text"
              name="sity"
              value={props.values.sity}
              id="sity"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
            />
            {props.errors.sity ? <div>{props.errors.sity}</div> : null}
            <br />
            <br />
            <button type="submit">
              Submit
            </button>

          </form>
        )
      }}
    </Formik>
  )
}