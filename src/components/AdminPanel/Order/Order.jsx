import React from "react";
import moment from "moment";
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
	let date = moment(createdAt)
	date = date.format("MMMM Do YYYY, h:mm:ss a");

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
					<Text>Delivery address: {deliveryAddress}</Text>
					<Text>Created at : {date}</Text>
					<Text>Total: {total} €</Text>
					<div className={`status ${status}`}>{status}</div>
					<OrderItems>
						{orderItems.map((item) => {
							return <OrderItem key={item._id} {...item} />;
						})}
					</OrderItems>
				</Center>
			</Content>
		</Wrapper>
	);
};

export default Order;

const Wrapper = styled.div`
	background: red;
	margin: 0.5rem;
	padding: 0.5rem;
	flex: 1;
	display: flex;
	flex-direction: column;
	border-radius: .3rem;
	background: var(--primary-3);
`;

const OrderItems = styled.div`
	display: flex;
	flex-direction: column;
	height: 8rem;
	margin-top: .3rem;
	padding: 0.3rem 0;
	overflow: scroll;
	overflow-x: hidden;
	background: var(--primary-1);
	border-radius: .3rem;
`;

const Header = styled.header``;
const Content = styled.div``;

const Text = styled.p`
	margin-top: .2rem;
	color: var(--primary-2);

	&:nth-child(odd) {
		font-weight: bold;
	}
`;

const Center = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	.status {
		margin: .2rem 0;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: .2rem;;
		text-transform: capitalize;
		text-align: center;
		letter-spacing: var(--spacing);
		width: 100px;
		height: 30px;
		background: #f5f56f;
	}
`;
