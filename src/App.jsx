import { useState } from 'react';
import InputForm from './components/InputForm';
import Results from './components/Results';
import CashFlowChart from './components/CashFlowChart';
import {
  calculateMonthlyNetProfit,
  calculatePaybackPeriod,
  calculateTotalNetProfit,
  calculateROI,
  calculateCashFlowData,
} from './utils/calculations';

function App() {
  const [values, setValues] = useState({
    initialInvestment: 100000,
    monthlyRevenue: 15000,
    monthlyCosts: 5000,
    period: 12,
  });

  const monthlyNetProfit = calculateMonthlyNetProfit(values.monthlyRevenue, values.monthlyCosts);
  const paybackPeriod = calculatePaybackPeriod(values.initialInvestment, monthlyNetProfit);
  const totalNetProfit = calculateTotalNetProfit(values.initialInvestment, monthlyNetProfit, values.period);
  const roi = calculateROI(values.initialInvestment, totalNetProfit);
  const cashFlowData = calculateCashFlowData(values.initialInvestment, monthlyNetProfit, values.period);

  return (
    <div className="app">
      <header className="header">
        <h1>ROI Calculator</h1>
        <p>Estimate the return on your business investment</p>
      </header>
      <main className="layout">
        <div className="left-column">
          <InputForm values={values} onChange={setValues} />
        </div>
        <div className="right-column">
          <Results roi={roi} paybackPeriod={paybackPeriod} totalNetProfit={totalNetProfit} />
          <CashFlowChart data={cashFlowData} />
        </div>
      </main>
    </div>
  );
}

export default App;
