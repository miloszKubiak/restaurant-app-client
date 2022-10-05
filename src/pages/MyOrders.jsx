import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Navbar, Sidebar, PageHero, Footer, Loader } from "../components";
import authFetch from "../utils/axios";
import moment from "moment";
import noOrdersImg from "../assets/no-orders.svg";
import { Link } from "react-router-dom";

const MyOrders = () => {
	const [myOrders, setMyOrders] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getMyOrders = async () => {
		try {
			setIsLoading(true);
			const response = await authFetch.get("orders/showAllMyOrders");
			setMyOrders(response.data.orders);
			console.log(response.data.orders);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const cancelOrder = async (_id) => {
		try {
			await authFetch.delete(`orders/${_id}`);
			getMyOrders();
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getMyOrders();
	}, []);

	if (myOrders.length < 1) {
		return (
			<>
				<Navbar />
				<Sidebar />
				<PageHero title="My orders" />
				<Wrapper>
					<Empty>
						<img src={noOrdersImg} alt="empty orders" />
						<p>You don't have any orders</p>
						<Link to="/meals">
							<button>back to meals</button>
						</Link>
					</Empty>
				</Wrapper>
				<Footer />
			</>
		);
	}

	return (
		<>
			<Navbar />
			<Sidebar />
			<PageHero title="My orders" />
			<Wrapper>
				{isLoading && <Loader />}
				<Container>
					{myOrders.map((myOrder) => {
						return (
							<li key={myOrder._id}>
								<p>
									<span>Order ID:</span> {myOrder._id}
								</p>
								<p>
									<span>Date of order:</span>{" "}
									{moment(myOrder.createdAt).format(
										"MMMM Do YYYY, h:mm:ss a"
									)}{" "}
								</p>
								<p>
									<span>Status:</span> {myOrder.status}
								</p>
								<p>
									<span>To pay:</span> {myOrder.total} €
								</p>
								<div className="user-order-items">
									{myOrder.orderItems.map((item) => {
										return (
											<li key={item._id}>
												<p>
													<span>{item.name}</span>
												</p>
												<p>
													<span>amount: </span>
													{item.amount}
												</p>
												<p>
													<span>price: </span>
													{item.price} €
												</p>
											</li>
										);
									})}
								</div>
								<button
									type="button"
									disabled={isLoading}
									onClick={() => cancelOrder(myOrder._id)}
								>
									cancel order
								</button>
							</li>
						);
					})}
				</Container>
			</Wrapper>
			<Footer />
		</>
	);
};

export default MyOrders;

const Wrapper = styled.div`
	min-height: calc(100vh - (10vh + 10rem));
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Container = styled.div`
	display: grid;
	margin: 2rem auto;
	width: 100%;
	max-width: 1170px;
	gap: 0.5rem;

	@media screen and (min-width: 576px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (min-width: 992px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media screen and (min-width: 1170px) {
		grid-template-columns: repeat(4, 1fr);
	}

	.user-order-items {
		display: flex;
		flex-direction: column;
		height: 8rem;
		margin-top: 0.3rem;
		padding: 0.3rem 0;
		overflow: scroll;
		overflow-x: hidden;
		border-radius: 0.3rem;
		background: var(--primary-3);

		li {
			background: var(--primary-5);
		}
	}

	li {
		margin: 0.5rem;
		padding: 0.5rem;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-radius: 0.3rem;
		background: var(--primary-1);

		span {
			font-weight: bold;
		}

		button {
			margin: 0.5rem 0;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 0.2rem;
			text-transform: capitalize;
			text-align: center;
			letter-spacing: var(--spacing);
			width: 6rem;
			height: 2rem;
			font-weight: bold;
			font-family: inherit;
			border: none;
			color: var(--primary-2);
			transition: var(--transition);
			background: #f50057;
			cursor: pointer;

			&:hover {
				background: #b1003e;
			}

			&:disabled {
				background: var(--grey-1);
			}
		}
	}
`;

const Empty = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	img {
		display: block;
		max-width: 300px;
	}

	p {
		margin: 2rem auto;
		font-weight: bold;
		font-size: 1.4rem;
	}

	button {
		margin: 1rem;
		padding: 0.8rem 1rem;
		background: var(--primary-3);
		color: var(--primary-2);
		text-decoration: none;
		border-radius: 0.4rem;
		border: none;
		text-transform: capitalize;
		font-family: inherit;
		letter-spacing: var(--spacing);
		transition: var(--transition);
		font-weight: bold;
		font-size: 1rem;
		cursor: pointer;

		&:hover {
			color: var(--primary-3);
			background: var(--primary-1);
		}
	}
`;
