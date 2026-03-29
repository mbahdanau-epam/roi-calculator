function InputForm({ values, onChange }) {
  const handleChange = (field) => (e) => {
    const value = field === 'period' ? Number(e.target.value) : Number(e.target.value);
    onChange({ ...values, [field]: value });
  };

  return (
    <div className="card">
      <h2>Investment Parameters</h2>
      <div className="form-group">
        <label htmlFor="initialInvestment">Initial Investment ($)</label>
        <input
          id="initialInvestment"
          type="number"
          value={values.initialInvestment}
          onChange={handleChange('initialInvestment')}
          min="0"
        />
      </div>
      <div className="form-group">
        <label htmlFor="monthlyRevenue">Expected Monthly Revenue ($)</label>
        <input
          id="monthlyRevenue"
          type="number"
          value={values.monthlyRevenue}
          onChange={handleChange('monthlyRevenue')}
          min="0"
        />
      </div>
      <div className="form-group">
        <label htmlFor="monthlyCosts">Monthly Operating Costs ($)</label>
        <input
          id="monthlyCosts"
          type="number"
          value={values.monthlyCosts}
          onChange={handleChange('monthlyCosts')}
          min="0"
        />
      </div>
      <div className="form-group">
        <label htmlFor="period">Calculation Period (months)</label>
        <select
          id="period"
          value={values.period}
          onChange={handleChange('period')}
        >
          <option value={12}>12 months</option>
          <option value={24}>24 months</option>
          <option value={36}>36 months</option>
        </select>
      </div>
    </div>
  );
}

export default InputForm;
