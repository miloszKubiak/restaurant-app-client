import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { authFetch } from "../../../utils/axios";
import { Loader } from "../../";
import Order from "./Order";
// import { useAuthContext } from "../../../context/auth-context";

const OrdersContainer = () => {
	const [orders, setOrders] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	// const { token } = useAuthContext()
	const token = localStorage.getItem("token");
	///////if error, check token value

	//request interceptor
	authFetch.interceptors.request.use(
		(config) => {
			config.headers.common["Authorization"] = `Bearer ${token}`;
			return config;
		},
		(error) => {
			return Promise.reject(error);
		}
	);

	//response interceptor
	authFetch.interceptors.response.use(
		(response) => {
			return response;
		},
		(error) => {
			if (error.response.status === 401) {
				console.log("AUTH ERROR");
			}
			return Promise.reject(error);
		}
	);

	const getOrders = async () => {
		try {
			const response = await authFetch.get(`/orders`);
			setOrders(response.data.orders);
			console.log(response.data.orders);
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
				<Title>All Orders</Title>
				{isLoading && <Loader />}
				<Container>
					{orders.map((order) => {
						return (
							<Order
								key={order._id}
								{...order}
								onOrderUpdate={getOrders}
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
