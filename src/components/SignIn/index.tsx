import React from 'react'
import {
    Formik,
    Form,
    Field,
} from 'formik';
import {AuthService} from "../../services/auth";

interface ISignInFormData {
    email: string;
    password: string;
    login: string;
}

/*const WithAuthService = props => WrappedComponent => {
    class WithAuthService extends React.Component<any, any> {
        login = async (email, password) => {
            await AuthService.login({email, password})
        }

        render() {
            return (
                <WrappedComponent
                    login={this.login}
                    {...props}
                />
            );
        }
    }

    return WithAuthService;
};*/
const SignIn: React.FC<{}> = () => {
    const initialValues: ISignInFormData = {
        email: '',
        password: '',
        login: ''
    }
    return (
        <div>
            <h1>Sign In Form</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={async (values, actions) => {
                    try {
                        await AuthService.login({email: values.email, password:values.password})
                        actions.setSubmitting(false);
                    } catch (e) {
                        actions.setSubmitting(false);
                        actions.setErrors({login: e.message});
                    }
                }}
            >
                {() => (
                    <Form>
                        <Field name="email" data-testid="Email"/>
                        <Field name="password" data-testid="Password"/>
                        <button type="submit">Submit</button>
                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default SignIn
