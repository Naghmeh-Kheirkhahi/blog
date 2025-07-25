
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register-Login.css';
import { UserContext } from '../../Context/UserContext';


function Register() {

    const { username, setUsername, setEmail } = useContext(UserContext);
    const navigate = useNavigate();

    const [localUsername, setLocalUsername] = useState('');
    const [localEmail, setLocalEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Username:', localUsername); console.log('Email:', localEmail); console.log('Password:', password); console.log('Confirm Password:', confirmPassword);

        if (localUsername !== '' && localEmail !== '' && password !== '' && confirmPassword !== '') {

            if (password !== confirmPassword) {
                alert("The Passwords do not match. Please try again!");
                return;
            }

            // localStorage.setItem('username', localUsername);
            // localStorage.setItem('email', localEmail); we used useEffect in UserContext.js to store the data in local storage, so we don't need to store it here
            setUsername(localUsername);
            setEmail(localEmail);
            alert("Your Registration has been Successfully done!");
            navigate("/Login");

        } else {
            alert("Please fill all the fields!");
        }
    }


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
                        <h2>Register</h2>
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
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password:</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit">Register</button>
                        </form>
                    </div>
                )}

            </div>
        </>
    );
}

export default Register;