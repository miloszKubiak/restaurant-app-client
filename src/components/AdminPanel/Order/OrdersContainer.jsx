import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { authFetch } from "../../../utils/axios";
import { Loader } from "../../components";
import Order from "./Order";
import { useAuthContext } from "../../../context/auth-context";

const OrdersContainer = () => {
	const [orders, setOrders] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	// const { token } = useAuthContext()
	const token = localStorage.getItem("token");
	console.log(token);
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
			AllOrders
			{isLoading && <Loader />}
			{orders.map((order) => {
				return <Order key={order._id} {...order} />;
			})}
		</Wrapper>
	);
};

export default OrdersContainer;

const Wrapper = styled.div``;
