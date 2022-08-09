export const formatPrice = (number) => {
	return new Intl.NumberFormat("de-DE", {
		style: "currency",
		currency: "EUR",
	}).format(number / 100);
};

export const getUniqueValues = (data, type) => {
	let uniqueValue = data.map((item) => item[type]);
	return ["all", ...new Set(uniqueValue)];
};
