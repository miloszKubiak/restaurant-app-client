import React from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import styled from "styled-components";
import { useMealsContext } from "../../context/meals-context";

const Pagination = () => {
	const { numOfPages, page, changePage } = useMealsContext();

	const pages = Array.from({ length: numOfPages }, (_, index) => {
		return index + 1;
	});

	const prevPage = () => {
		let newPage = page - 1;
		if (newPage < 1) {
			newPage = 1;
			//newPage = numOfPages
		}
		changePage(newPage);
	};

	const nextPage = () => {
		let newPage = page + 1;
		if (newPage > numOfPages) {
			newPage = numOfPages;
			//newPage = 1
		}
		changePage(newPage);
	};

	return (
		<Wrapper>
			{page > 1 && (
				<ButtonNav onClick={prevPage}>
					<FaAngleDoubleLeft />
					prev
				</ButtonNav>
			)}
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
			{page < numOfPages && (
				<ButtonNav onClick={nextPage}>
					next
					<FaAngleDoubleRight />
				</ButtonNav>
			)}
		</Wrapper>
	);
};

export default Pagination;

const Wrapper = styled.section`
	height: 100%;
	padding: .4rem;
	margin-top: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	flex-wrap: wrap;
	background: #000;
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
		color: var(--primary-3);
		border-radius: 0.2rem;
		font-family: inherit;
		cursor: pointer;
		transition: var(--transition);
	}

	.active {
		background: var(--primary-7);
		color: var(--primary-2);
	}
`;

const ButtonNav = styled.button`
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
