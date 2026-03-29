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
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis
              dataKey="month"
              label={{ value: 'Month', position: 'insideBottom', offset: -5, fill: '#666' }}
              tick={{ fill: '#666' }}
            />
            <YAxis
              tickFormatter={formatYAxis}
              tick={{ fill: '#666' }}
            />
            <Tooltip
              formatter={(value) => [formatTooltip(value), 'Cash Flow']}
              labelFormatter={(label) => `Month ${label}`}
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
              itemStyle={{ color: '#0047ff' }}
              labelStyle={{ color: '#231f20', fontWeight: 600 }}
            />
            <ReferenceLine y={0} stroke="#bbb" strokeDasharray="6 4" label={{ value: 'Break-even', fill: '#999', position: 'right' }} />
            <Line
              type="monotone"
              dataKey="cashFlow"
              stroke="#0047ff"
              strokeWidth={2.5}
              dot={{ fill: '#0047ff', r: 3 }}
              activeDot={{ r: 5, fill: '#00f6ff', stroke: '#0047ff' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default CashFlowChart;
