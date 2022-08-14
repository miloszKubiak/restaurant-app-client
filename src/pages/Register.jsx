import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FormRow } from "../components";
import logo from "../assets/logo2.png";
import { useNavigate } from "react-router-dom";

const initialState = {
	name: "",
	email: "",
	password: "",
	isMember: true,
};

const Register = () => {
	const [values, setValues] = useState(initialState);

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const toggleMember = () => {
		setValues({ ...values, isMember: !values.isMember });
	};

	return (
		<Wrapper>
			<Form>
				<Logo src={logo} alt="logo" />
				<Title>{values.isMember ? "Login" : "Register"}</Title>
				<FormRow
					type="text"
					name="name"
					value={values.name}
					handleChange={handleChange}
				/>
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
				<Button type="submit">Submit</Button>
				<Info>
					{values.isMember
						? "Not a member yet?"
						: "Already a member?"}
					<ButtonMember onClick={toggleMember}>
						{values.isMember ? "Register" : "Login"}
					</ButtonMember>
				</Info>
			</Form>
		</Wrapper>
	);
};

export default Register;

const Wrapper = styled.section`
	min-height: 100vh;
	display: grid;
	align-items: center;

	p {
		margin: 0;
		margin-top: 1rem;
		text-align: center;
	}
	.btn {
		margin-top: 1rem;
	}
	.member-btn {
		background: transparent;
		border: transparent;
		color: var(--primary-500);
		cursor: pointer;
		letter-spacing: var(--letterSpacing);
	}
`;

const Form = styled.form`
	max-width: 400px;
	border-top: 0.2rem solid var(--grey-1);
`;

const Logo = styled.img``;

const Title = styled.section`
	text-align: center;
`;

const Button = styled.button``;

const ButtonMember = styled.button``;

const Info = styled.p``;
