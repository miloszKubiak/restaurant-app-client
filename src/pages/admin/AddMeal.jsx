import React from "react";
import styled from "styled-components";
import { FormRow, FormRowSelect, Alert } from "../../components";
import { useAuthContext } from "../../context/auth-context";

const AddMeal = () => {
	const { isLoading, showAlert } = useAuthContext();

	const handleSubmit = () => {};

	const handleMealInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		console.log(`${name}: ${value}`);
	};

	return (
		<Wrapper>
			<Form onSubmit={handleSubmit}>
				<Title>create meal form</Title>
				{showAlert && <Alert />}
				<FormRow type="text" name="name" onChange={handleMealInput} />
				<FormRow
					type="text"
					name="description"
					onChange={handleMealInput}
				/>
				<FormRow type="text" name="image" onChange={handleMealInput} />
				<FormRow type="text" name="price" onChange={handleMealInput} />
				<FormRowSelect
					labelText="category"
					name="category"
					onChange={handleMealInput}
					list={["all"]}
				/>
				<FormRowSelect
					labelText="featured"
					name="featured"
					onChange={handleMealInput}
					list={["yes", "no"]}
				/>
				<ButtonContainer>
					<ButtonSubmit type="submit" disabled={isLoading}>
						{isLoading ? "please wait..." : "submit"}
					</ButtonSubmit>
					<ButtonClear>clear</ButtonClear>
				</ButtonContainer>
			</Form>
		</Wrapper>
	);
};

export default AddMeal;

const Wrapper = styled.div`
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
	margin: 1rem auto;
	transition: var(--transition);
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	padding: 0.5rem;
	width: 100%;

	@media screen and (max-width: 576px) {
		flex-direction: column;
	}
`;

const ButtonClear = styled.button`
	display: inline-block;
	margin-top: 1rem;
	color: var(--primary-2);
	background: var(--grey-1);
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
		background: gray;
		box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
			0 10px 10px -5px rgba(0, 0, 0, 0.04);
	}
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

const Title = styled.h3`
	padding: 0.5rem;
	margin-top: 1rem;
	text-transform: capitalize;
	letter-spacing: var(--spacing);
`;
