import * as React from 'react';
import LoginCard from '../Components/LoginCard';


class Login extends React.Component<ILoginProps, ILoginState> {

    render() {
        return (
            <section className="justify-content-center row">
                <LoginCard  />
            </section>
        )
    }
}

export interface ILoginProps {}

export interface ILoginState {}

export default Login;