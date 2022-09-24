import React from "react";
import styled from "styled-components";
import OrderItem from "./OrderItem";
import OrderInfo from "./OrderInfo";
import { FaUserCircle, FaPizzaSlice } from "react-icons/fa";


const Order = ({
	_id,
	deliveryAddress,
	status,
	createdAt,
	user,
	total,
	orderItems,
}) => {
	return (
		<Wrapper>
			<Header>
				{/* <h5>order id: {_id}</h5>
				<p>user id: {user._id}</p> */}
				<OrderInfo icon={<FaPizzaSlice />} text={_id} />
				<OrderInfo icon={<FaUserCircle />} text={user} />
			</Header>
			<Content>
				<Center>
					<p>delivery address: {deliveryAddress}</p>
					<p>created at : {createdAt}</p>
					<p>total: {total}</p>
					<div className={`status ${status}`}>{status}</div>
					{orderItems.map((item) => {
						return <OrderItem key={item._id} {...item} />;
					})}
				</Center>
			</Content>
		</Wrapper>
	);
};

export default Order;

const Wrapper = styled.div``;
const Header = styled.header``;
const Content = styled.div``;
const Center = styled.div``;
