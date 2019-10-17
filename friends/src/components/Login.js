import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('login', this.state.credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            this.props.history.push('/friends');
        })
        .catch(err => console.log(err.response));
    };

    render() {
        if (localStorage.getItem('token')) {
            return <Redirect to="/friends" />;
        }
        return(
            <div>
                <form onSubmit={this.login}>
                    <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.credentials.username}
                    onChange={this.handleChanges}
                    />

                    <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.credentials.password}
                    onChange={this.handleChanges}
                    />

                    <button>Log In</button>
                </form>
            </div>
        );
    }
}

export default Login;