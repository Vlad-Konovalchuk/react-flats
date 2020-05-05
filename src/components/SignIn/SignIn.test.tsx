import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, waitForElement, wait} from '@testing-library/react';
import SignIn from "./index";

describe('Sign In Form', () => {
    it('form rendered', async () => {
        const {getByText} = render(<SignIn/>);

        const signinTitle = await waitForElement(() => getByText('Sign In Form'));
        wait(() => {
            expect(signinTitle).toBeInTheDocument();
        });
    });
    it('submits values and fires', async () => {

        jest.spyOn(window, 'fetch').mockResolvedValue({ json: () => ({}) });

        const {getByText, getByTestId} = render(<SignIn />);

        const email = await waitForElement(() => getByTestId('Email'));
        const password = await waitForElement(() => getByTestId('Password'));
        const button = await waitForElement(() => getByText('Submit'));

        fireEvent.change(email, {
            target: {
                value: 'testing@mail.com',
            },
        });
        fireEvent.change(password, {
            target: {
                value: 'password',
            },
        });

        fireEvent.click(button);

        wait(() => {
            expect(mock).toBeCalled();
            expect(mock.mock.calls[0][0].email).toBe('testing@mail.com');
            expect(mock.mock.calls[0][1].password).toBe('password');
        });
    });
});
