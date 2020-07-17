import React from 'react'
import {
    Formik,
    Form,
    Field, ErrorMessage,
} from 'formik';
import {AuthService} from "../../services/auth";

interface ISignInFormData {
    email: string;
    password: string;
    login: string;
}

const SignIn: React.FC<{}> = () => {
    const initialValues: ISignInFormData = {
        email: 2,
        password: 2,
        login: ''
    }
    return (
        <div className="container-fluid h-100">
            <div className="row justify-content-center mt-5 mb-2">
                <h1>Sign In</h1>
            </div>
            <div className="row justify-content-center ">
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
                    {({ touched, errors, isSubmitting })=> (
                        <Form>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Enter email"
                                    className={`form-control ${
                                        touched.email && errors.email ? "is-invalid" : ""
                                    }`}
                                />
                                <ErrorMessage
                                    component="div"
                                    name="email"
                                    className="invalid-feedback"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                    className={`form-control ${
                                        touched.password && errors.password ? "is-invalid" : ""
                                    }`}
                                />
                                <ErrorMessage
                                    component="div"
                                    name="password"
                                    className="invalid-feedback"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Please wait..." : "Submit"}
                            </button>
                            <p className="forgot-password text-right">
                                Forgot <a href="#">password?</a>
                            </p>
                        </Form>
                    )}

                </Formik>
            </div>
        </div>
    )
}

export default SignIn
