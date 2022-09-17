import {
	FaHandHoldingHeart,
	FaPizzaSlice,
	FaCarSide,
	FaChartBar,
	FaUsers,
	FaUserPlus,
} from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb"
import { GiMeal } from "react-icons/gi"

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
		url: "/admin-panel/stats",
		icon: <FaChartBar />,
	},
	{
		id: 2,
		text: "all orders",
		url: "/admin-panel/all-orders",
		icon: <TbTruckDelivery />,
	},
	{
		id: 3,
		text: "add meal",
		url: "/admin-panel/add-meal",
		icon: <MdFastfood />,
	},
	{
		id: 4,
		text: "all meals",
		url: "/admin-panel/all-meals",
		icon: <GiMeal />,
	},
	{
		id: 5,
		text: "add user",
		url: "/admin-panel/add-user",
		icon: <FaUserPlus />,
	},
	{
		id: 6,
		text: "all users",
		url: "/admin-panel/all-users",
		icon: <FaUsers />,
	},
];
