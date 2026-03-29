export function calculateMonthlyNetProfit(monthlyRevenue, monthlyCosts) {
  return monthlyRevenue - monthlyCosts;
}

export function calculatePaybackPeriod(initialInvestment, monthlyNetProfit) {
  if (monthlyNetProfit <= 0) return null;
  return Math.ceil(initialInvestment / monthlyNetProfit);
}

export function calculateTotalNetProfit(initialInvestment, monthlyNetProfit, period) {
  return monthlyNetProfit * period - initialInvestment;
}

export function calculateROI(initialInvestment, totalNetProfit) {
  if (initialInvestment === 0) return 0;
  return (totalNetProfit / initialInvestment) * 100;
}

export function calculateCashFlowData(initialInvestment, monthlyNetProfit, period) {
  const data = [];
  for (let month = 1; month <= period; month++) {
    data.push({
      month,
      cashFlow: monthlyNetProfit * month - initialInvestment,
    });
  }
  return data;
}
