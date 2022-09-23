import React from "react";
import { useEffect, useState } from "react";
import { authFetch } from "../../utils/axios";
import { Loader } from "../../components";
import { useAuthContext } from "../../context/auth-context";
import styled from "styled-components";

const AllOrders = () => {
	const [orders, setOrders] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { token } = useAuthContext()
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
		<div>
			AllOrders
			{isLoading && <Loader />}
			{orders.map((order) => {
				return (
					<Order key={order._id}>
						<li>order id: {order._id}</li>
						<li>delivery address: {order.deliveryAddress}</li>
						<li>order status: {order.status}</li>
						<li>order date: {order.createdAt}</li>
						<li>user id: {order.user}</li>
						<li>total: {order.total}</li>
						<li>meals: {order.orderItems.map((item) => {
							return <OrderItem key={item._id}>
								<li>name: {item.name}</li>
								<li>amount: {item.amount}</li>
								<li>price: {item.price}</li>
							</OrderItem>
						})} </li>		
					</Order>
				);
			})}
		</div>
	);
};

export default AllOrders;

const Order = styled.ul`
	background: blue;
	margin: .5rem;
`;

const OrderItem = styled.ul`
	margin: .3rem;
	background: red;
`;
