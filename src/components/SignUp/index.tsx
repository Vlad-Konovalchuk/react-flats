import React, {useEffect} from 'react'
import {Field, Form, Formik} from "formik";
import {AuthService} from "../../services/auth";
interface ISignUpFormData {
    email: '',
    password: '',
    login: ''
}
const SignUp = () => {
    const initialValues: ISignUpFormData = {
        email: '',
        password: '',
        login: ''
    }
    return (
        <div>
            <h1>Sign Up Form</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={async (values, actions) => {
                    console.log({values, actions});
                    console.log({values});
                    try {
                        await AuthService.register({email: values.email, password:values.password})
                        actions.setSubmitting(false);
                    } catch (e) {
                        actions.setSubmitting(false);
                        actions.setErrors({login: e.message});
                    }
                }}
                render={() => (
                    <Form>
                        <Field name="email"/>
                        <Field type="password" name="password"/>
                        <button type="submit">Submit</button>
                    </Form>
                )}
            />
        </div>
    )
}
export default SignUp
