import React from 'react';
import {useRef, useState, useEffect } from 'react';
import './styles/LoginStyles.css';

import useAuth from '../hooks/useAuth'

import axios from '../api/axios';
import {ComputeAuthHashComponent} from "./ComputeAuthHashComponent";

const LOGIN_URL = '/o/token';

const LoginComponent = () => {
	const {setAuth} = useAuth()
	const userRef = useRef();
	const errRef = useRef();

	const [user, setUser] = useState('');
	const [pwd, setPwd] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		setErrMsg('');
	}, [user, pwd]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {

			const auth_hash = await ComputeAuthHashComponent(user, pwd);
			const grant_type = "password";
			const client = "web";
			const username = user;

			const response = await axios.post(LOGIN_URL,null,
				{
					headers: {'Content-Type': 'application/json'},
					params: {
						username: username,
						auth_hash: auth_hash,
						grant_type:grant_type,
						client:client

					},
				}
			);
			console.log(JSON.stringify(response?.data));
			console.log(JSON.stringify(response));
			const accessToken = response?.data?.access_token;
			console.log(JSON.stringify(accessToken));
			console.log(JSON.stringify(username));
			setAuth(username, accessToken);
			setUser('');
			setPwd('');
			setSuccess(true);

		} catch (err) {
			if (!err?.response) {
				setErrMsg('No server Response');
			} else if (err.response?.status === 400) {
				setErrMsg('Missing Username or Password');
			} else if (err.response?.status === 401) {
				setErrMsg('Unauthorized');
			} else {
				setErrMsg('Login Failed');
			}
			errRef.current.focus();
		}
	};

	return (
		<>
			{success ? (
				<section>
					<h1>You are Logged in!</h1>
					<br/>
					<p>
						<a href="#">GO to the Dashboard</a>
					</p>
				</section>
			) : (
				<section>
					<p ref={errRef} className={errMsg ? "errmsg" :
						"offscreen"} aria-live="assertive">{errMsg}</p>
					<h1>Sign In</h1>
					<form onSubmit={handleSubmit}>
						<label htmlFor="username">Username : </label>
						<input
							type="text"
							id="username"
							ref={userRef}
							autocomplete="off"
							onChange={(e) => setUser(e.target.value)}
							value={user}
							required
						/>

						<label htmlFor="password">Password: </label>
						<input
							type="password"
							id="password"
							onChange={(e) => setPwd(e.target.value)}
							value={pwd}
							required
						/>

						<button>Sign In</button>
					</form>

				</section>
			)}
		</>
	);
};

export default LoginComponent;
