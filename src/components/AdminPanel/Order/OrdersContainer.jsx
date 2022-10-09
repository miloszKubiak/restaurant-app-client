import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import authFetch from "../../../utils/axios";
import { Loader } from "../../";
import Order from "./Order";

const OrdersContainer = () => {
	const [orders, setOrders] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getOrders = async () => {
		try {
			setIsLoading(true);
			const response = await authFetch.get(`/orders`);
			setOrders(response.data.orders);
			console.log(response.data.orders);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const changeOrderStatus = async (_id, clientSecret) => {
		try {
			setIsLoading(true);
			await authFetch.patch(`/orders/${_id}`, {
				status: "sent",
				clientSecret,
			});
			getOrders();
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const deleteOrder = async (_id) => {
		try {
			setIsLoading(true);
			await authFetch.delete(`/orders/${_id}`);
			getOrders();
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getOrders();
	}, []);

	return (
		<Wrapper>
			<Content>
				<Title>
					{orders.length} order{orders.length > 1 && "s"} found
				</Title>
				{isLoading && <Loader />}
				<Container>
					{orders.map((order) => {
						return (
							<Order
								key={order._id}
								{...order}
								onIsLoading={isLoading}
								onOrderStatusChange={changeOrderStatus}
								onOrderDelete={deleteOrder}
							/>
						);
					})}
				</Container>
			</Content>
		</Wrapper>
	);
};

export default OrdersContainer;

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	margin: 0.5rem auto;
`;

const Title = styled.h3`
	padding: 0.5rem;
	margin: 0 auto;
	margin-bottom: 2rem;
	text-align: center;
	letter-spacing: var(--spacing);
	background: var(--primary-7);
	width: 12rem;
	border-radius: 0.2rem;
	color: var(--primary-2);
`;

const Container = styled.div`
	padding: 0.5rem;
	display: grid;
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
`;

const Content = styled.div``;
