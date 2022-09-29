import React from "react";
import styled from "styled-components";
import { FormRow, FormRowSelect } from "../../components";
import { AdminAlert } from "../../components/AdminPanel";
import { useMealsContext } from "../../context/meals-context";

const AddMeal = () => {
	const {
		createMeal,
		editMeal,
		displayAlert,
		showAlert,
		isLoading,
		clearValues,
		isEditing,
		handleChange,
		name,
		description,
		image,
		price,
		category,
		categoryOptions,
		featuredOptions,
		featured,
		averageRatingOptions,
		averageRating,
		numberOfReviews,
	} = useMealsContext();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!name || !description || !image || !price || !numberOfReviews) {
			displayAlert();
			return;
		}
		if (isEditing) {
			editMeal()
			return;
		}
		createMeal();
	};

	const handleMealInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		handleChange({ name, value });
	};

	return (
		<Wrapper>
			<Form onSubmit={handleSubmit}>
				<Title>{isEditing ? "edit meal" : "add meal"}</Title>
				{showAlert && <AdminAlert />}
				<FormRow
					type="text"
					name="name"
					value={name}
					handleChange={handleMealInput}
				/>
				<FormRow
					type="text"
					name="description"
					value={description}
					handleChange={handleMealInput}
				/>
				<FormRow
					type="text"
					name="image"
					value={image}
					handleChange={handleMealInput}
				/>
				<FormRow
					type="number"
					name="price"
					value={price}
					handleChange={handleMealInput}
				/>
				<FormRowSelect
					labelText="category"
					name="category"
					value={category}
					handleChange={handleMealInput}
					list={categoryOptions}
				/>
				<FormRowSelect
					labelText="featured"
					name="featured"
					value={featured}
					handleChange={handleMealInput}
					list={featuredOptions}
				/>
				<FormRowSelect
					labelText="averageRating"
					name="averageRating"
					value={averageRating}
					handleChange={handleMealInput}
					list={averageRatingOptions}
				/>
				<FormRow
					type="text"
					name="numberOfReviews"
					value={numberOfReviews}
					handleChange={handleMealInput}
				/>
				<ButtonContainer>
					<ButtonSubmit
						type="submit"
						disabled={isLoading}
						onClick={handleSubmit}
					>
						{isLoading ? "please wait..." : "submit"}
					</ButtonSubmit>
					<ButtonClear
						onClick={(e) => {
							e.preventDefault();
							clearValues();
						}}
					>
						clear
					</ButtonClear>
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
	padding: 1rem;
	margin: 0.5rem auto;
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
	font-size: 2.5rem;
	text-transform: capitalize;
	letter-spacing: var(--spacing);
`;
