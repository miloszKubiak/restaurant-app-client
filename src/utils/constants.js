import {
	FaHandHoldingHeart,
	FaPizzaSlice,
	FaCarSide,
	FaChartBar,
	FaShippingFast,
} from "react-icons/fa";
import { MdFastfood } from "react-icons/md";

export const links = [
	{
		id: 1,
		text: "home",
		url: "/",
	},
	{
		id: 2,
		text: "about",
		url: "/about",
	},
	{
		id: 3,
		text: "meals",
		url: "/meals",
	},
];

export const services = [
	{
		id: 1,
		icon: <FaHandHoldingHeart />,
		title: "passion",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab facere reiciendis debitis voluptatum odio sapiente non iusto beatae alias laudantium?",
	},
	{
		id: 2,
		icon: <FaPizzaSlice />,
		title: "unique taste",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab facere reiciendis debitis voluptatum odio sapiente non iusto beatae alias laudantium?",
	},
	{
		id: 3,
		icon: <FaCarSide />,
		title: "fast delivery",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab facere reiciendis debitis voluptatum odio sapiente non iusto beatae alias laudantium?",
	},
];

export const adminLinks = [
	{
		id: 1,
		text: "stats",
		url: "/stats",
		icon: <FaChartBar />,
	},
	{
		id: 2,
		text: "add meal",
		url: "/add-meal",
		icon: <MdFastfood />,
	},
	{
		id: 3,
		text: "all orders",
		url: "/all-orders",
		icon: <FaShippingFast />,
	},
];
