import { FaHandHoldingHeart, FaPizzaSlice, FaCarSide } from "react-icons/fa";

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

export const meals_url = `${process.env.REACT_APP_MEALS_URL}`;

export const single_meal_url = `${process.env.REACT_APP_SINGLE_MEAL_URL}`;

