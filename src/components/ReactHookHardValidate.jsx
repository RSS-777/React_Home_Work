import { useForm } from "react-hook-form";


const ReactHookHardValidate = () => {
    const { register, reset, handleSubmit, formState: { errors, isValid }, watch } = useForm({
        mode: 'onBlur'
    })

    const studentValue = watch('student') // слідкую за чекбоксом, якщо він написнутий передаю це в поле універсетет як true

    return (
        <form
            onSubmit={handleSubmit((data) => {
                console.log(data)
                reset()
            })}
        >
            <h2>React hook form yup</h2>
            <div className="input-firs-name">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    {...register('name', {
                        required: 'This field is required',
                        pattern: {
                            value: /^[^\d]+$/,
                            message: 'This field cannot contain numbers'
                        }
                    })}
                />
            </div>
            <div className="block-error">{errors.name && errors.name.message}</div>
            <div className="input-last-name">
                <label htmlFor="last-name">Last name:</label>
                <input
                    type="text"
                    id="last-name"
                    {...register('lastName', {
                        required: 'This field is required',
                        pattern: {
                            value: /^[^\d]+$/,
                            message: 'This field cannot contain numbers'
                        }
                    })}
                />
            </div>
            <div className="block-error">{errors.lastName && errors.lastName.message}</div>
            <div className="input-checkbox">
                <label htmlFor="student">Student</label>
                <input
                    type="checkbox"
                    id='student'
                    {...register('student')}
                />
            </div>
            <div className="input-university">
                <label htmlFor="university">University:</label>
                <input
                    type="text"
                    id="university"
                    {...register('university', {
                        required: {value: studentValue, message: 'University field is required'  }
                    })}
                />
            </div>
            <div className="block-error">{errors?.university && errors.university.message}</div>

            <button
                type='submit'
                disabled={!isValid}
                className={!isValid ? 'button-not-active' : 'button-active'}
            >Submit
            </button>

        </form>
    )
}

export default ReactHookHardValidate;