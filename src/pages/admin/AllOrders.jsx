import React from "react";
import { useEffect, useState } from "react";
import { authFetch } from "../../utils/axios";
import { Loader } from "../../components";
// import { useAuthContext } from "../../context/auth-context";

const AllOrders = () => {
	const [orders, setOrders] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	// const { token } = useAuthContext()
	///////if error, check token value
	const getOrders = async () => {
		try {
			const response = await authFetch.get(`/orders`);
			setOrders(response.data.orders);
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
					<li key={order._id}>
						<p>order id: {order._id}</p>
						<p>delivery address: {order.deliveryAddress}</p>
						<p>order status: {order.status}</p>
						<p>order date: {order.createdAt}</p>
						<p>user id: {order.user}</p>
					</li>
				);
			})}
		</div>
	);
};

export default AllOrders;
