
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { Link } from 'react-router-dom';



function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Email:', email);
        console.log('Password:', password);
        // Navigate to the home page after successful login
        navigate('/UserPanel');
    };

    return (
        <>
            <div className="login-page">
                <div className="login-container">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
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
                        <button type="submit">Login</button>
                    </form>

                    <p>Don't have an account? <Link to="/Register">Register</Link></p>
                </div>
            </div>
        </>
    );
}

export default Login;