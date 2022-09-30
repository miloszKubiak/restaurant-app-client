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
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const changeOrderStatus = async (_id, clientSecret) => {
		try {
			await authFetch.patch(`/orders/${_id}`, clientSecret);
			console.log(clientSecret);
			getOrders();
		} catch (error) {
			console.log(error);
		}
	};

	const deleteOrder = async (_id) => {
		try {
			await authFetch.delete(`/orders/${_id}`);
			getOrders();
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
				<Title>All Orders</Title>
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
	font-size: 2.5rem;
	text-transform: capitalize;
	text-align: center;
	letter-spacing: var(--spacing); ;
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
