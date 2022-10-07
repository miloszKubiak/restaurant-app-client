import React from "react";
import moment from "moment";
import styled from "styled-components";
import OrderItem from "./OrderItem";
import OrderInfo from "./OrderInfo";
import { FaUserCircle, FaShippingFast } from "react-icons/fa";

const Order = ({
	_id,
	deliveryAddress,
	status,
	createdAt,
	user,
	total,
	clientSecret,
	orderItems,
	onOrderStatusChange,
	onOrderDelete,
	onIsLoading,
}) => {
	let date = moment(createdAt);
	date = date.format("MMMM Do YYYY, h:mm:ss a");

	return (
		<Wrapper>
			<Header>
				<OrderInfo icon={<FaShippingFast />} text={_id} />
				<OrderInfo icon={<FaUserCircle />} text={user} />
			</Header>
			<Content>
				<Center>
					<Text>Delivery address: {deliveryAddress}</Text>
					<Text>Created at: {date}</Text>
					<Text>Total: {total} €</Text>
					<Status status={`${status}`}>{status}</Status>
					<OrderItems>
						{orderItems.map((item) => {
							return <OrderItem key={item._id} {...item} />;
						})}
					</OrderItems>
				</Center>
				<Footer>
					{status === "paid" && (
						<Button
							color="blue"
							onClick={() =>
								onOrderStatusChange(_id, clientSecret)
							}
							disabled={onIsLoading}
						>
							Sent
						</Button>
					)}
					<Button
						color="red"
						onClick={() => onOrderDelete(_id)}
						disabled={onIsLoading}
					>
						Delete
					</Button>
				</Footer>
			</Content>
		</Wrapper>
	);
};

export default Order;

const Wrapper = styled.div`
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

const Status = styled.div`
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
	background: ${(props) =>
		props.status === "sent"
			? "#eed3a8"
			: props.status === "paid"
			? "#75dbb1"
			: "#f0768a"};
	color: ${(props) => (props.status === "sent" ? "#333" : "#feffea")};
	transition: var(--transition);
`;

const Center = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Footer = styled.footer`
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 0.5rem;
	width: 100%;
	padding: 0.2rem;
	margin-top: 0.5rem;
`;

const Button = styled.button`
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
	border: none;
	color: var(--primary-2);
	transition: var(--transition);
	background: ${(props) => (props.color === "blue" ? "#536DFE" : "#F50057")};
	cursor: pointer;

	&:hover {
		background: ${(props) =>
			props.color === "blue" ? "#203bd3" : "#b1003e"};
	}

	&:disabled {
		background: var(--grey-1);
	}
`;
