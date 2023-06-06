import CenteredMaxWidthBox from "../../components/CenteredMaxWidthBox";
import IncomeBarGraph from "../../components/IncomeGraph";

export default function Income() {
  const transactionsData = [
    { amount: 720, date: "Jan 3, '23", id: "1" },
    { amount: 560, date: "Dec 12, '22", id: "2" },
    { amount: 980, date: "Dec 3, '22", id: "3" },
  ];

  return (
    <section id="host-income" className="host-income">
      <div className="app-padding-inline-default margin-bottom-xl">
        <CenteredMaxWidthBox>
          <div className="host-income__flexbox">
            <div className="host-income__info">
              <h1 className="income-heading-primary">Income</h1>
              <p>
                Last <span>30 days</span>
              </p>
              <h2 className="income-heading-secondary">$2,260</h2>
            </div>

            <div className="host-income__graph">
              <IncomeBarGraph
                options={{ responsive: true, maintainAspectRatio: false }}
              />
            </div>
          </div>
        </CenteredMaxWidthBox>
      </div>

      <div className="host-income__transactions">
        <div className="app-padding-inline-default">
          <CenteredMaxWidthBox>
            <div className="transactions-title">
              <h3 className="income-heading-tertiary">
                Your transactions ({transactionsData.length})
              </h3>
              <p>
                Last <span>30 days</span>
              </p>
            </div>

            <div className="transactions-detail">
              {transactionsData.map(item => (
                <div key={item.id} className="transaction">
                  <h3 className="income-heading-tertiary">${item.amount}</h3>
                  <p>{item.date}</p>
                </div>
              ))}
            </div>
          </CenteredMaxWidthBox>
        </div>
      </div>
    </section>
  );
}
