
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { UserContext } from '../../Context/UserContext';


function Register() {

    const { setUsername } = useContext(UserContext);
    const navigate = useNavigate();

    const [localUsername, setLocalUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Username:', localUsername); console.log('Email:', email); console.log('Password:', password); console.log('Confirm Password:', confirmPassword);

        if (localUsername !== '' && email !== '' && password !== '' && confirmPassword !== '') {

            if (password !== confirmPassword) {
                alert("The Passwords do not match. Please try again!");
                return;
            }

            setUsername(localUsername);
            alert("Your Registration has been Successfully done!");
            navigate("/Login");

        } else {
            alert("Please fill all the fields!");
        }
    }


    return (
        <>
            <div className="register-page">
                <div className="register-container">
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
            </div>
        </>
    );
}

export default Register;