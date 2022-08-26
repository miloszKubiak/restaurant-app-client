import React from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import styled from "styled-components";
import { useMealsContext } from "../../context/meals-context";

const Pagination = () => {
	const { numOfPages, page, changePage } = useMealsContext();

	const pages = Array.from({ length: numOfPages }, (_, index) => {
		return index + 1;
	});
	console.log(pages);

	const prevPage = () => {
		console.log("prev");
	};

	const nextPage = () => {
		console.log("next");
	};

	return (
		<Wrapper>
			<Button onClick={prevPage}>
				<FaAngleDoubleLeft />
				prev
			</Button>
			<ButtonsContainer>
				{pages.map((pageNumber) => {
					return (
						<button
							type="button"
							className={
								pageNumber === page
									? "pageBtn active"
									: "pageBtn"
							}
							key={pageNumber}
							onClick={() => changePage(pageNumber)}
						>
							{pageNumber}
						</button>
					);
				})}
			</ButtonsContainer>
			<Button onClick={nextPage}>
				next
				<FaAngleDoubleRight />
			</Button>
		</Wrapper>
	);
};

export default Pagination;

const Wrapper = styled.section`
	height: 4rem;
	margin-top: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	flex-wrap: wrap;
`;

const ButtonsContainer = styled.div`
	background: var(--primary-1);
	border-radius: 0.2rem;

	.pageBtn {
		background: transparent;
		border-color: transparent;
		width: 3rem;
		height: 2.5rem;
		font-weight: bold;
		font-size: 1rem;
		color: var(--primary-2);
		border-radius: .2rem;
		cursor: pointer;
		transition: var(--transition);
	}

	.active {
		background: var(--primary-7);
		color: var(--primary-2);
	}
`;

const Button = styled.button`
	width: 6rem;
	height: 2.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background: var(--primary-3);
	border-color: transparent;
	border-radius: 0.2rem;
	color: var(--primary-2);
	text-transform: capitalize;
	letter-spacing: var(--spacing);
	font-weight: bold;
	font-family: inherit;
	font-size: 1rem;
	gap: 0.5rem;
	cursor: pointer;
	transition: var(--transition);

	&:hover {
		background: var(--primary-7);
	}
`;
