
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register-Login.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';



function Login() {

    const { username, setUsername, setEmail } = useContext(UserContext);
    const navigate = useNavigate();

    const [localUsername, setLocalUsername] = useState('');
    const [localEmail, setLocalEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Username:', localUsername); console.log('Email:', localEmail); console.log('Password:', password);

        if (localUsername === '' || localEmail === '' || password === '') {
            alert('Please fill all the fields!');
            return;
        }

        // localStorage.setItem('email', localEmail);
        // localStorage.setItem('username', localUsername); we used useEffect in UserContext.js to store the data in local storage, so we don't need to store it here
        setUsername(localUsername);
        setEmail(localEmail);
        alert("Login has been successfully done!");
        navigate('/UserPanel');
    };

    return (
        <>
            <div className="register-login-page">

                {username ? (
                    <div className='prelogged register-login-container'>
                        <p>You have already Logged in as a User.</p>
                        <p>To access the Login Form, please Log out first.</p>
                    </div>
                ) : (
                    <div className="register-login-form register-login-container">
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">Username:</label>
                                <input
                                    type="text"
                                    id="username"
                                    value={localUsername}
                                    onChange={(e) => setLocalUsername(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={localEmail}
                                    onChange={(e) => setLocalEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit">Login</button>
                        </form>

                        <p>Don't have an account? <Link to="/Register">Register</Link></p>
                    </div>
                )}

            </div>
        </>
    );
}

export default Login;