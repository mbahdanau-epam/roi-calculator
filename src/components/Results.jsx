function formatCurrency(value) {
  const formatted = Math.abs(value).toLocaleString('en-US');
  return value < 0 ? `-$${formatted}` : `$${formatted}`;
}

function Results({ roi, paybackPeriod, totalNetProfit }) {
  return (
    <div className="card">
      <h2>ROI Metrics</h2>
      <div className="metrics">
        <div className="metric">
          <span className="metric-label">ROI</span>
          <span className={`metric-value ${roi >= 0 ? 'positive' : 'negative'}`}>
            {roi.toFixed(1)}%
          </span>
        </div>
        <div className="metric">
          <span className="metric-label">Payback Period</span>
          <span className="metric-value">
            {paybackPeriod === null ? 'Never' : `${paybackPeriod} months`}
          </span>
        </div>
        <div className="metric">
          <span className="metric-label">Total Net Profit</span>
          <span className={`metric-value ${totalNetProfit >= 0 ? 'positive' : 'negative'}`}>
            {formatCurrency(totalNetProfit)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Results;
