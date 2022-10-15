import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const BarChartComponent = ({ data }) => {
	return (
		<ResponsiveContainer width="100%" height={400}>
			<BarChart data={data} margin={{ top: 30 }}>
				<CartesianGrid strokeDasharray="3 3 " />
				<XAxis dataKey="date" />
				<YAxis allowDecimals={false} />
				<Tooltip />
				<Bar dataKey="count" fill="#75dbb1" barSize={80} />
			</BarChart>
		</ResponsiveContainer>
	);
};

export default BarChartComponent;
