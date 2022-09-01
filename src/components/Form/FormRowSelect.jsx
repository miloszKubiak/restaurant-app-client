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

const Container = styled.div`
	flex: 1;
	margin-bottom: 1rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Label = styled.label`
	display: block;
	font-size: 0.9rem;
	margin-bottom: 0.5rem;
	text-transform: capitalize;
	letter-spacing: var(--spacing);
	font-weight: bold;
`;

const Select = styled.select`
	width: 100%;
	height: 2rem;
	padding: 0.4rem 0.8rem;
	border-radius: 0.3rem;
	background: var(--primary-2);
	border: 0.1rem solid var(--primary-3);
	text-transform: capitalize;
	font-family: inherit;
	font-weight: bold;
`;
const Option = styled.option`
	font-weight: bold;
`;