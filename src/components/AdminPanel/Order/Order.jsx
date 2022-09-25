import React from "react";
import moment from "moment";
import styled from "styled-components";
import OrderItem from "./OrderItem";
import OrderInfo from "./OrderInfo";
import { FaUserCircle, FaShippingFast } from "react-icons/fa";
import { authFetch } from "../../../utils/axios";
import { Link } from "react-router-dom";

const Order = ({
	_id,
	deliveryAddress,
	status,
	createdAt,
	user,
	total,
	orderItems,
}) => {
	let date = moment(createdAt);
	date = date.format("MMMM Do YYYY, h:mm:ss a");

	const changeOrderStatus = async () => {
		console.log("paid")
	};

	const deleteOrder = async () => {
		console.log("deleted");
	}

	return (
		<Wrapper>
			<Header>
				{/* <h5>order id: {_id}</h5>
				<p>user id: {user._id}</p> */}
				<OrderInfo icon={<FaShippingFast />} text={_id} />
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
				<Footer>
					<Button onClick={changeOrderStatus}>Paid</Button>
					<Button onClick={deleteOrder}>Delete</Button>
				</Footer>
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
	justify-content: space-between;
	border-radius: 0.3rem;
	background: var(--primary-3);
`;

const OrderItems = styled.div`
	display: flex;
	flex-direction: column;
	height: 8rem;
	margin-top: 0.3rem;
	padding: 0.3rem 0;
	overflow: scroll;
	overflow-x: hidden;
	background: var(--primary-1);
	border-radius: 0.3rem;
`;

const Header = styled.header``;
const Content = styled.div``;

const Text = styled.p`
	margin-top: 0.2rem;
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
		margin: 0.2rem 0;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 0.2rem;
		text-transform: capitalize;
		text-align: center;
		letter-spacing: var(--spacing);
		width: 6rem;
		height: 2rem;
		font-size: 1rem;
		font-weight: bold;
		font-family: inherit;
		background: #f7ddb4;
		transition: var(--transition);
	}
`;

const Footer = styled.footer`
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: .5rem;
	width: 100%;
	padding: .2rem;
	margin-top: .5rem;
`;

const Button = styled.button`
	width: 4rem;
	height: 1.5rem;
	font-weight: bold;
	transition: var(--transition);
`;