import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Navbar, Sidebar, PageHero, Footer, Loader } from "../components";
import authFetch from "../utils/axios";

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

	useEffect(() => {
		getMyOrders();
	}, []);

	return (
		<>
			<Navbar />
			<Sidebar />
			<PageHero title="My orders" />
			<Container>
				{isLoading && <Loader />}
        {myOrders.map((myOrder) => {
          return (
            <li key={myOrder._id}>
              <p>{myOrder._id}</p>
              <p>{myOrder.createdAt}</p>
              <p>{myOrder.status}</p>
              <p>{myOrder.total}</p>
            </li>
          )
        })}
			</Container>
			<Footer />
		</>
	);
};

export default MyOrders;

const Container = styled.div``;
