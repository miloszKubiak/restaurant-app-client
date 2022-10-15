import {
	ResponsiveContainer,
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
} from "recharts";

const AreaChartComponent = ({ data }) => {
	return (
		<ResponsiveContainer width="100%" height={400}>
			<AreaChart data={data} margin={{ top: 30 }}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="date" />
				<YAxis allowDecimals={false} />
				<Tooltip />
				<Area
					type="monotone"
					dataKey="count"
					stroke="#0a945a"
					fill="#75dbb1"
				/>
			</AreaChart>
		</ResponsiveContainer>
	);
};

export default AreaChartComponent;
