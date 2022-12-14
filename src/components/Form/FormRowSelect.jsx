import React from "react";
import styled from "styled-components";

const FormRowSelect = ({ name, value, list, handleChange, labelText }) => {
	return (
		<Container>
			<Label htmlFor={name}>{labelText || name}</Label>
			<Select
				name={name}
				value={value}
        onChange={handleChange}
      >
        {list.map((itemValue, index) => {
          return (
            <Option key={index} value={itemValue}>
              {itemValue}
            </Option>
          )
        })}
        </Select>
		</Container>
	);
};

export default FormRowSelect;

const Label = styled.label`
	display: block;
	font-size: 1rem;
	margin-bottom: 0.5rem;
	text-transform: capitalize;
	letter-spacing: var(--spacing);
	font-weight: bold;
`;

const Select = styled.select`
	width: 100%;
	height: 2rem;
	padding: 0.2rem 0.8rem;
	border-radius: 0.3rem;
	border: 0.2rem solid var(--primary-3);
	text-transform: capitalize;
	font-family: inherit;
	font-weight: bold;
	letter-spacing: var(--spacing);
	outline: none;
`;
const Option = styled.option`
	letter-spacing: var(--spacing);
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