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
	margin-bottom: 1rem;
	width: 100%;
`;

const Label = styled.label`
	display: block;
	font-size: 0.9rem;
	margin-bottom: 0.5rem;
	text-transform: capitalize;
	letter-spacing: var(--spacing);
	font-weight: bold;
`;

const Select = styled.select``;
const Option = styled.option``;