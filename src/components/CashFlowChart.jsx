import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

function formatYAxis(value) {
  if (Math.abs(value) >= 1000) {
    return `$${(value / 1000).toFixed(0)}k`;
  }
  return `$${value}`;
}

function formatTooltip(value) {
  const formatted = Math.abs(value).toLocaleString('en-US');
  return value < 0 ? `-$${formatted}` : `$${formatted}`;
}

function CashFlowChart({ data }) {
  return (
    <div className="card">
      <h2>Cumulative Cash Flow</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2a4a" />
            <XAxis
              dataKey="month"
              label={{ value: 'Month', position: 'insideBottom', offset: -5, fill: '#aaa' }}
              tick={{ fill: '#aaa' }}
            />
            <YAxis
              tickFormatter={formatYAxis}
              tick={{ fill: '#aaa' }}
            />
            <Tooltip
              formatter={(value) => [formatTooltip(value), 'Cash Flow']}
              labelFormatter={(label) => `Month ${label}`}
              contentStyle={{ backgroundColor: '#1a1a2e', border: '1px solid #333', borderRadius: '8px' }}
              itemStyle={{ color: '#39f' }}
              labelStyle={{ color: '#ccc' }}
            />
            <ReferenceLine y={0} stroke="#888" strokeDasharray="6 4" label={{ value: 'Break-even', fill: '#888', position: 'right' }} />
            <Line
              type="monotone"
              dataKey="cashFlow"
              stroke="#39f"
              strokeWidth={2}
              dot={{ fill: '#39f', r: 3 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default CashFlowChart;
