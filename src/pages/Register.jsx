import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FormRow, Alert } from "../components";
import logo from "../assets/logo2.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/auth-context";

const initialState = {
	name: "",
	email: "",
	password: "",
	isMember: true,
};

const Register = () => {
	const [values, setValues] = useState(initialState);
	const {
		isLoading,
		showAlert,
		displayAlert,
		registerUser,
		loginUser,
		user,
	} = useAuthContext();
	const navigate = useNavigate();

	const toggleMember = () => {
		setValues({ ...values, isMember: !values.isMember });
	};

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { name, email, password, isMember } = values;
		if (!email || !password || (!isMember && !name)) {
			displayAlert();
			return;
		}
		const currentUser = { name, password, email };
		if (isMember) {
			loginUser(currentUser);
		} else {
			registerUser(currentUser);
		}
	};

	useEffect(() => {
		if (user) {
			setTimeout(() => {
				navigate("/");
			}, 3000);
		}
	}, [user, navigate]);

	return (
		<Wrapper>
			<Form onSubmit={handleSubmit}>
				<Logo src={logo} alt="logo" />
				<Title>{values.isMember ? "Login" : "Register"}</Title>
				{showAlert && <Alert />}
				{!values.isMember && (
					<FormRow
						type="text"
						name="name"
						value={values.name}
						handleChange={handleChange}
					/>
				)}
				<FormRow
					type="email"
					name="email"
					value={values.email}
					handleChange={handleChange}
				/>
				<FormRow
					type="password"
					name="password"
					value={values.password}
					handleChange={handleChange}
				/>
				<ButtonSubmit type="submit" disabled={isLoading}>
					Submit
				</ButtonSubmit>
				<Info>
					{values.isMember
						? "Not a member yet?"
						: "Already a member?"}
					<ButtonMember type="button" onClick={toggleMember}>
						{values.isMember ? "Register" : "Login"}
					</ButtonMember>
				</Info>
				<Link to="/">Back to home page</Link>
			</Form>
		</Wrapper>
	);
};

export default Register;

const Wrapper = styled.section`
	min-height: calc(100vh - 5rem);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 25rem;
	width: 90vw;
	border-top: 0.4rem solid var(--primary-3);
	border-radius: 0.3rem;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
		0 2px 4px -1px rgba(0, 0, 0, 0.06);
	padding: 2.5rem;
	margin: 3rem auto;
	transition: var(--transition);
	background: var(--primary-1);

	a {
		margin-top: .5rem;
		font-weight: bold;
		color: var(--primary-3);
		text-decoration: none;
	}

	&:hover {
		box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
			0 10px 10px -5px rgba(0, 0, 0, 0.04);
	}
`;

const Logo = styled.img``;

const Title = styled.section`
	text-align: center;
	font-weight: bold;
	font-size: 1.5rem;
	margin-top: 0.5rem;
`;

const ButtonSubmit = styled.button`
	display: inline-block;
	margin-top: 1rem;
	color: var(--primary-2);
	background: var(--primary-3);
	border: transparent;
	border-radius: 0.3rem;
	letter-spacing: var(--spacing);
	padding: 0.4rem 0.8rem;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
		0 2px 4px -1px rgba(0, 0, 0, 0.06);
	transition: var(--transition);
	text-transform: capitalize;
	width: 100%;
	font-weight: bold;
	font-size: 1.2rem;
	font-family: inherit;
	cursor: pointer;

	&:hover {
		background: var(--primary-7);
		box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
			0 10px 10px -5px rgba(0, 0, 0, 0.04);
	}

	&:disabled {
		background: var(--grey-1);
	}
`;

const ButtonMember = styled.button`
	background: transparent;
	border: transparent;
	color: var(--primary-7);
	letter-spacing: var(--spacing);
	margin-left: 1rem;
	font-size: 1rem;
	font-weight: bold;
	font-family: inherit;
	cursor: pointer;
`;

const Info = styled.p`
	margin: 0;
	margin-top: 1rem;
	text-align: center;
	font-weight: bold;
`;
