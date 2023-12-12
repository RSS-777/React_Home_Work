import { useForm } from 'react-hook-form';
import './ReactHookForm.css'

const ReactHookForm = () => {
    const { register, reset, handleSubmit, formState: { errors, isValid } } = useForm({
        mode: 'onBlur'
    })
    return (
        <div className="container-form">
            <form onSubmit={handleSubmit((data) => {
                console.log(data),
                    reset()
            })}>
                <div className="block-first-name">
                    <div className="input-firs-name">
                        <label htmlFor='name'>First name:</label>
                        <input
                            type="text"
                            id='name'
                            {...register('firstName', {
                                required: 'The field cannot be empty',
                                minLength: { value: 3, message: 'Give your full name' },
                                pattern: { value: /^[A-Za-z]+$/, message: 'Please enter only letters' }
                            })}
                        />
                    </div>
                    <div className="block-error">{errors.firstName && errors.firstName.message}</div>
                </div>
                <div className="block-last-name">
                    <div className="input-last-name">
                        <label htmlFor='last-name'>Last name:</label>
                        <input
                            type="text"
                            id='last-name'
                            {...register('lastName', {
                                required: 'The field cannot be empty',
                                minLength: { value: 3, message: 'Give your full LastName' },
                                pattern: { value: /^[A-Za-z]+$/, message: 'Please enter only letters' }
                            })}
                        />
                    </div>
                    <div className="block-error">{errors.lastName && errors.lastName.message}</div>
                </div>
                <div className="block-city">
                    <div className="input-city">
                        <label htmlFor='city'>City:</label>
                        <input
                            type="text"
                            id='city'
                            {...register('city', {
                                required: 'The field cannot be empty',
                                minLength: { value: 3, message: 'Enter an existing city' },
                                pattern: { value: /^[A-Za-z]+$/, message: 'Name city cannot include number' }
                            })}
                        />
                    </div>
                    <div className="block-error">{errors.city && errors.city.message}</div>
                </div>
                <button
                    type='submit'
                    disabled={!isValid}
                    className={!isValid ? 'button-not-active' : 'button-active'}
                >Submit
                </button>
            </form>
        </div>
    )
}

export default ReactHookForm;