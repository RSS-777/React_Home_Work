import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const schema = Yup.object({
    name: Yup.string().required(),
    lastName: Yup.string().required(),
    student: Yup.boolean().notRequired(),
    university: Yup.string().when('student', {
        is: true,
        then: (schema) => schema.required(),
        otherwise: (schema) => schema.notRequired()
    })
})

const ReactHookFormYup = () => {
    const { register, reset, handleSubmit, formState: { errors, isValid } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur'
    })

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
                    {...register('name')}
                />
            </div>
            <div className="block-error">{errors.name && errors.name.message}</div>
            <div className="input-last-name">
                <label htmlFor="last-name">Last name:</label>
                <input
                    type="text"
                    id="last-name"
                    {...register('lastName')}
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
                    {...register('university')}
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

export default ReactHookFormYup;