import React from "react";
import styled from "styled-components";

const FormRow = ({ name, value, type, handleChange, labelText }) => {
	return (
		<Container>
			<Label htmlFor={name}>{labelText || name}</Label>
			<Input
				type={type}
				name={name}
				value={value}
				onChange={handleChange}
			/>
		</Container>
	);
};

export default FormRow;

const Label = styled.label`
	display: block;
	font-size: 1rem;
	margin-bottom: 0.5rem;
	text-transform: capitalize;
	letter-spacing: var(--spacing);
	font-weight: bold;
`;

const Input = styled.input`
	width: 100%;
	height: 2rem;
	padding: 0.4rem 0.8rem;
	border-radius: 0.3rem;
	border: 0.2rem solid var(--primary-3);
	outline : none;
`;

const Container = styled.div`
	flex: 1;
	margin-bottom: 1rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
