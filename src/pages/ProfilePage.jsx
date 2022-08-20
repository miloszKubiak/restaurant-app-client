import React, { useState } from "react";
import { Navbar, Sidebar, PageHero, Alert, FormRow } from "../components";
import styled from "styled-components";
import { useAuthContext } from "../context/auth-context";

const ProfilePage = () => {
	const { user, showAlert, displayAlert, updateUser, isLoading } =
		useAuthContext();

	const [name, setName] = useState(user?.name);
	const [lastName, setLastName] = useState(user?.lastName);
	const [email, setEmail] = useState(user?.email);
	const [location, setLocation] = useState(user?.location);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!name || !lastName || !email || !location) {
			displayAlert();
			return;
		}

		updateUser({ name, lastName, email, location });
	};

	return (
		<>
			<Navbar />
			<Sidebar />
			<PageHero title="Profile settings" />
			<Wrapper>
				<Form onSubmit={handleSubmit}>
					{showAlert && <Alert />}
					<FormRow
						type="text"
						name="name"
						value={name}
						handleChange={(e) => setName(e.target.value)}
					/>
					<FormRow
						type="text"
						labelText="last name"
						name="name"
						value={lastName}
						handleChange={(e) => setLastName(e.target.value)}
					/>
					<FormRow
						type="email"
						name="email"
						value={email}
						handleChange={(e) => setEmail(e.target.value)}
					/>
					<FormRow
						type="text"
						name="location"
						value={location}
						handleChange={(e) => setLocation(e.target.value)}
					/>
					<ButtonSubmit type="submit" disabled={isLoading}>
						{isLoading ? "please wait..." : "save changes"}
					</ButtonSubmit>
				</Form>
			</Wrapper>
		</>
	);
};

export default ProfilePage;

const Wrapper = styled.section`
	min-height: calc(100vh - (20vh + 10rem));
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 30rem;
	width: 90vw;
	padding: 2.5rem;
	margin: 3rem auto;
	transition: var(--transition);
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
